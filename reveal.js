/* 스크롤해서 화면에 들어오는 요소를 아래에서 떠오르듯 나타나게 한다.

   .reveal 클래스는 이 파일이 직접 붙인다. HTML에 미리 넣지 않는 이유는,
   JS가 동작하지 않는 환경에서 요소가 투명한 채로 영영 안 보이는 걸 막기 위해서다.
   (JS가 없으면 클래스도 안 붙으므로 그냥 평범하게 보인다) */

/* 움직임을 줄이도록 설정한 사용자에게는 효과를 적용하지 않는다 */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* selector: 대상, stagger: 같은 묶음 안에서 하나씩 늦출 간격(ms) */
const revealGroups = [
    { selector: "#about .title" },
    { selector: "#about .about-self > div", stagger: 140 },
    { selector: "#new .title" },
    { selector: "#new .newproduct > div", stagger: 120 },
    { selector: "#new .bottom" },
    { selector: "#contact .title" },
    { selector: "#contact .contact-me .left .card", stagger: 100 },
    { selector: "#contact .contact-me .right" },
    { selector: ".category-head" },
    { selector: ".filters" },
    { selector: ".product-grid .product-card", stagger: 60 },
    { selector: ".site-footer .footer-main" }
];

if (!prefersReducedMotion) {
    const observer = new IntersectionObserver(
        function (entries) {
            for (let i = 0; i < entries.length; i++) {
                if (entries[i].isIntersecting) {
                    entries[i].target.classList.add("is-visible");
                    // 한 번 나타난 뒤에는 다시 감시할 필요가 없다
                    observer.unobserve(entries[i].target);
                }
            }
        },
        {
            // 요소가 화면 아래에서 12% 정도 올라왔을 때 시작
            rootMargin: "0px 0px -12% 0px",
            threshold: 0
        }
    );

    for (let g = 0; g < revealGroups.length; g++) {
        const group = revealGroups[g];
        const targets = document.querySelectorAll(group.selector);
        for (let i = 0; i < targets.length; i++) {
            targets[i].classList.add("reveal");
            if (group.stagger) {
                targets[i].style.transitionDelay = i * group.stagger + "ms";
            }
            observer.observe(targets[i]);
        }
    }
}
