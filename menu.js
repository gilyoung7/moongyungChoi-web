/* 좌측 사이드 드로어 메뉴 */
const menuToggle = document.querySelector(".menu-toggle");
const drawer = document.querySelector(".drawer");
const drawerBackdrop = document.querySelector(".drawer-backdrop");
const drawerClose = document.querySelector(".drawer-close");

const openMenu = function () {
    drawer.classList.add("is-open");
    drawerBackdrop.classList.add("is-open");
    document.body.classList.add("menu-open"); // 뒷배경 스크롤 잠금
    drawer.removeAttribute("inert"); // 닫혀 있을 때는 Tab으로 접근되지 않도록 inert 사용
    menuToggle.setAttribute("aria-expanded", "true");
    drawerClose.focus();
};

const closeMenu = function () {
    drawer.classList.remove("is-open");
    drawerBackdrop.classList.remove("is-open");
    document.body.classList.remove("menu-open"); // 스크롤 잠금 해제
    drawer.setAttribute("inert", "");
    menuToggle.setAttribute("aria-expanded", "false");
    closeAllSubmenus(); // 아래에서 정의됨. 실제 호출은 사용자가 누른 뒤라 문제없다.
};

menuToggle.addEventListener("click", openMenu);
drawerClose.addEventListener("click", function () {
    closeMenu();
    menuToggle.focus(); // 닫으면 열었던 버튼으로 초점 되돌리기
});
drawerBackdrop.addEventListener("click", closeMenu);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
        closeMenu();
        menuToggle.focus();
    }
});

/* 드로어 안의 항목을 누르면 메뉴를 닫는다.
   하위 메뉴를 펼치는 버튼(.submenu-trigger)은 닫으면 안 되므로 제외한다.
   이 파일이 scroll.js보다 먼저 로드되므로 여기서 스크롤 잠금이 먼저 풀리고,
   그 다음 scroll.js가 해당 섹션으로 이동한다. */
const drawerItems = drawer.querySelectorAll(
    ".drawer-nav a, .drawer-nav button:not(.submenu-trigger)"
);
for (let i = 0; i < drawerItems.length; i++) {
    drawerItems[i].addEventListener("click", function (e) {
        if (this.hasAttribute("data-placeholder")) {
            e.preventDefault(); // 아직 페이지가 없는 항목은 이동하지 않음
        }
        closeMenu();
    });
}

/* 하위 메뉴 펼치기 */
const submenuItems = drawer.querySelectorAll(".has-submenu");

const setSubmenu = function (item, open) {
    item.classList.toggle("is-open", open);
    item.querySelector(".submenu-trigger").setAttribute("aria-expanded", String(open));
};

const closeAllSubmenus = function () {
    for (let i = 0; i < submenuItems.length; i++) {
        setSubmenu(submenuItems[i], false);
    }
};

/* 눌러서 열고, 다시 누를 때까지 열린 채로 둔다.

   예전에는 마우스를 올리면 열리고 벗어나면 바로 닫혔는데, 세로로 늘어선
   드로어에서는 맞지 않았다. 하위 항목을 보려고 마우스를 움직이거나
   드로어를 스크롤하는 순간 닫혀버렸고, 무엇보다 hover가 클릭을 덮어써서
   눌러서 고정하는 것 자체가 되지 않았다. (마우스를 떼면 mouseleave가 닫음)
   그래서 여닫는 판단은 클릭 하나로만 한다. 터치 기기와도 동작이 같아진다. */
for (let i = 0; i < submenuItems.length; i++) {
    const item = submenuItems[i];
    const trigger = item.querySelector(".submenu-trigger");

    trigger.addEventListener("click", function () {
        const willOpen = !item.classList.contains("is-open");
        closeAllSubmenus(); // 한 번에 하나만 펼쳐지도록
        if (willOpen) {
            setSubmenu(item, true);
        }
    });
}

/* KR / EN 버튼은 lang.js가 맡습니다. */
