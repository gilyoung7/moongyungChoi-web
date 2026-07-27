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