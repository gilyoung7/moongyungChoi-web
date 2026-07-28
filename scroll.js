const animationMove = function (selector) {
    const target = document.querySelector(selector);
    if (!target) {
        console.error("해당 요소를 찾을 수 없음:", selector);
        return;
    }
    const browserScrollY = window.scrollY;
    const targetScrollY = target.getBoundingClientRect().top + browserScrollY;
    // 고정 헤더에 제목이 가려지지 않도록 헤더 높이만큼 빼기
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;
    window.scrollTo({ top: targetScrollY - headerHeight, behavior: "smooth" });
};

const scrollMoveE1 = document.querySelectorAll("[data-animation-scroll='true']");
for (let i = 0; i < scrollMoveE1.length; i++) {
    scrollMoveE1[i].addEventListener("click", function (e) {
        e.preventDefault(); // 기본 동작 방지
        animationMove(this.dataset.target);
    });
}

/* 헤더는 맨 위(히어로 영상 위)에서 투명하고, 조금이라도 내리면 흰 배경으로 바뀐다.
   실제 배경 전환은 style.css의 .is-scrolled가 담당한다. */
const headerEl = document.querySelector("header");
/* 히어로 영상이 없는 페이지(카테고리 등)는 배경이 밝아서
   헤더가 투명하면 흰 글씨가 보이지 않는다. 그런 페이지는 항상 불투명. */
const hasHero = document.querySelector(".hero") !== null;
const updateHeaderStyle = function () {
    headerEl.classList.toggle("is-scrolled", !hasHero || window.scrollY > 40);
};
updateHeaderStyle(); // 새로고침으로 중간에서 시작하는 경우 대비
window.addEventListener("scroll", updateHeaderStyle, { passive: true });