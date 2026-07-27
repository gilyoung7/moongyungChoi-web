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

/* 마우스가 있는 기기에서만 hover로 여닫는다.
   (hover: none)인 터치 기기는 아래 클릭 처리만 사용한다. */
const hasHover = window.matchMedia("(hover: hover)").matches;

for (let i = 0; i < submenuItems.length; i++) {
    const item = submenuItems[i];
    const trigger = item.querySelector(".submenu-trigger");

    if (hasHover) {
        item.addEventListener("mouseenter", function () {
            closeAllSubmenus(); // 한 번에 하나만 펼쳐지도록
            setSubmenu(item, true);
        });
        item.addEventListener("mouseleave", function () {
            setSubmenu(item, false);
        });
    }

    /* 화살표를 누르면 열고 닫기를 전환한다.
       클릭으로 닫은 뒤에는 mouseenter가 다시 발생하지 않으므로
       마우스를 뺐다가 다시 올려야 열린다. 의도한 동작이다. */
    trigger.addEventListener("click", function () {
        const willOpen = !item.classList.contains("is-open");
        closeAllSubmenus();
        if (willOpen) {
            setSubmenu(item, true);
        }
    });
}

/* 언어 표시 전환 (화면 표시만 바뀌며 실제 번역 기능은 없음) */
const langButtons = document.querySelectorAll(".drawer-lang button");
for (let i = 0; i < langButtons.length; i++) {
    langButtons[i].addEventListener("click", function () {
        for (let j = 0; j < langButtons.length; j++) {
            langButtons[j].classList.remove("is-active");
        }
        this.classList.add("is-active");
    });
}
