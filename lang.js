/* 사이트 언어 전환 (KR / EN)

   HTML에는 영어 원문만 적어 두고, 한국어는 아래 사전에서 꺼내 바꿔 넣습니다.
   페이지를 두 벌로 만들 필요가 없습니다.

     data-i18n="키"          → 요소 안의 글자를 바꾼다
     data-i18n-속성="키"      → 그 속성을 바꾼다 (data-i18n-alt, data-i18n-aria-label 등)

   고른 언어는 localStorage에 저장돼 다른 페이지와 다음 방문에도 이어집니다.
   처음 온 사람에게는 브라우저 언어가 한국어면 KR, 아니면 EN을 보여줍니다.

   이 파일은 반드시 <head>에서, 다른 스크립트보다 먼저 불러야 합니다.
   catalog.js가 상품 목록을 그릴 때 아래 t()와 getLanguage()를 쓰기 때문입니다. */

const I18N_STORAGE_KEY = "mc-lang";
const I18N_SOURCE = "en"; // HTML에 적혀 있는 원문의 언어

/* 글자를 바꿀 속성 목록. HTML에서 data-i18n-alt 처럼 씁니다. */
const I18N_ATTRS = ["alt", "aria-label", "content", "placeholder", "title"];

const I18N = {
    en: {
        /* ----- 문서 정보 ----- */
        "meta.title.index": "Moongyung Choi — Paris",
        "meta.desc.index": "A luxury fashion brand founded in 2025 by designer Moongyung Choi. Discover the Moongyung Choi collection.",
        "meta.desc.category": "The Moongyung Choi collection. Women, Men, Bags, Shoes, Accessories and Beauty.",
        "meta.title.error": "Page Not Found — Moongyung Choi",
        "meta.desc.error": "The page you are looking for does not exist.",

        /* ----- 헤더 ----- */
        "nav.about": "About",
        "nav.new": "New",
        "nav.contact": "Contact",

        /* ----- 화면 낭독기용 설명 ----- */
        "aria.menuOpen": "Open menu",
        "aria.menuClose": "Close menu",
        "aria.top": "Back to top",
        "aria.home": "Go to home",
        "aria.drawer": "Full menu",
        "aria.crumb": "Breadcrumb",
        "aria.filters": "Subcategories",
        "aria.dog": "Illustration of a puppy",

        /* ----- 드로어 메뉴 ----- */
        "drawer.collections": "Collections",
        "drawer.discover": "Discover",
        "drawer.newArrivals": "New Arrivals",
        "drawer.lookbook": "Lookbook",
        "drawer.journal": "Journal",
        "drawer.boutiques": "Boutiques",

        "cat.women": "Women",
        "cat.men": "Men",
        "cat.bags": "Bags",
        "cat.shoes": "Shoes",
        "cat.accessories": "Accessories",
        "cat.beauty": "Beauty",

        "sub.all": "View All",
        "sub.coats": "Coats",
        "sub.jackets": "Jackets",
        "sub.dresses": "Dresses",
        "sub.knitwear": "Knitwear",
        "sub.tops-blouses": "Tops & Blouses",
        "sub.trousers": "Trousers",
        "sub.skirts": "Skirts",
        "sub.suits": "Suits",
        "sub.shirts": "Shirts",
        "sub.tote-bags": "Tote Bags",
        "sub.shoulder-bags": "Shoulder Bags",
        "sub.cross-body": "Cross Body",
        "sub.clutches": "Clutches",
        "sub.small-leather-goods": "Small Leather Goods",
        "sub.heels": "Heels",
        "sub.flats": "Flats",
        "sub.boots": "Boots",
        "sub.sneakers": "Sneakers",
        "sub.scarves": "Scarves",
        "sub.belts": "Belts",
        "sub.jewellery": "Jewellery",
        "sub.eyewear": "Eyewear",
        "sub.hats": "Hats",
        "sub.gloves": "Gloves",
        "sub.fragrance": "Fragrance",
        "sub.makeup": "Makeup",
        "sub.skincare": "Skincare",
        "sub.body-bath": "Body & Bath",
        "sub.gift-sets": "Gift Sets",

        "boutique.cheongdam": "Seoul · Cheongdam",
        "boutique.apgujeong": "Seoul · Apgujeong",
        "boutique.itaewon": "Seoul · Itaewon",
        "boutique.hannam": "Seoul · Hannam",
        "boutique.seongsu": "Seoul · Seongsu",
        "boutique.songdo": "Incheon · Songdo",
        "boutique.haeundae": "Busan · Haeundae",
        "boutique.suseong": "Daegu · Suseong",
        "boutique.jungmun": "Jeju · Jungmun",

        /* 첫 화면의 슬로건("We aim to…")은 두 언어에서 모두 영어로 두기로 해
           사전에 넣지 않았습니다. index.html에 적힌 글자가 그대로 보입니다. */

        /* ----- 소개 ----- */
        "about.eyebrow": "Who is Moongyung Choi",
        "about.title": "About Moongyung Choi",
        "about.greeting": "Hello,",
        "about.name": "I'm Moongyung Choi",
        "about.p1": "I'm a global fashion designer",
        "about.p2": "And graduated from Incheon National University in Korea with the department of fashion industry",
        "about.p3": "I've always wanted my brand \"Moongyung Choi\", which started in 2025, to go global",
        "about.p4": "Now, enjoy my luxury brand Moongyung Choi!",
        "about.imgAlt": "Signature look by designer Moongyung Choi",

        /* ----- 신상품 ----- */
        "new.title": "BEST COLLECTION",
        "new.item1": "Moongyung Choi Signature Coat",
        "new.item2": "Natural Leather Bag",
        "new.item3": "Long Skirt",
        "new.more": "See more new arrivals",

        /* ----- 문의 ----- */
        "contact.eyebrow": "CONTACT",
        "contact.title": "Contact With Me",
        "contact.phone": "phone",
        "contact.email": "email",
        "contact.address": "address",
        "contact.addressValue": "Teheran-ro, Gangnam-gu, Seoul, Republic of Korea",
        "form.name": "name",
        "form.email": "email",
        "form.message": "message",
        "form.send": "send",

        /* ----- 푸터 ----- */
        "footer.explore": "Explore",
        "footer.about": "About",
        "footer.collections": "Collections",
        "footer.contact": "Contact",
        "footer.follow": "Follow",
        "footer.business": "Business",
        "footer.ceo": "Representative",
        "footer.ceoName": "Moongyung Choi",
        "footer.bizNo": "Business registration no.",
        "footer.email": "Email",
        "footer.notice": "Unauthorized reproduction, distribution, or adaptation of any image, video, design or text on this site is prohibited.",

        /* ----- 카테고리 페이지 ----- */
        "category.eyebrow": "Collection",
        "category.unknown": "Collection",
        "category.unknownDesc": "This category does not exist.",
        "crumb.home": "Home",
        "filter.all": "All",
        "product.comingSoon": "Coming Soon",
        "grid.empty": "There are no products in this category yet.",
        "grid.note": "This page is still in preparation. Product details will be released in stages.",

        "desc.women": "A women's collection that blurs the line between the everyday and the occasion.",
        "desc.men": "A men's collection completed with restrained silhouettes.",
        "desc.bags": "Leather goods finished by the hands of artisans.",
        "desc.shoes": "A silhouette completed with every step.",
        "desc.accessories": "The small difference that decides the finish.",
        "desc.beauty": "The memory of a house, left behind as a scent.",

        /* ----- 404 ----- */
        "error.title": "Page Not Found",
        "error.desc": "The page you are looking for does not exist or may have been moved.",
        "error.home": "Back to Home",
        "error.collections": "View Collections"
    },

    ko: {
        /* ----- 문서 정보 ----- */
        "meta.title.index": "Moongyung Choi — 파리",
        "meta.desc.index": "디자이너 최문경이 2025년 시작한 럭셔리 패션 브랜드. Moongyung Choi의 컬렉션을 만나보세요.",
        "meta.desc.category": "Moongyung Choi 컬렉션. 여성·남성 의류, 가방, 슈즈, 액세서리, 뷰티.",
        "meta.title.error": "페이지를 찾을 수 없습니다 — Moongyung Choi",
        "meta.desc.error": "찾으시는 페이지가 존재하지 않습니다.",

        /* ----- 헤더 ----- */
        "nav.about": "소개",
        "nav.new": "신상품",
        "nav.contact": "문의",

        /* ----- 화면 낭독기용 설명 ----- */
        "aria.menuOpen": "메뉴 열기",
        "aria.menuClose": "메뉴 닫기",
        "aria.top": "맨 위로",
        "aria.home": "홈으로",
        "aria.drawer": "전체 메뉴",
        "aria.crumb": "현재 위치",
        "aria.filters": "하위 분류",
        "aria.dog": "강아지 일러스트",

        /* ----- 드로어 메뉴 ----- */
        "drawer.collections": "컬렉션",
        "drawer.discover": "둘러보기",
        "drawer.newArrivals": "신상품",
        "drawer.lookbook": "룩북",
        "drawer.journal": "저널",
        "drawer.boutiques": "매장",

        "cat.women": "여성",
        "cat.men": "남성",
        "cat.bags": "가방",
        "cat.shoes": "슈즈",
        "cat.accessories": "액세서리",
        "cat.beauty": "뷰티",

        "sub.all": "전체 보기",
        "sub.coats": "코트",
        "sub.jackets": "재킷",
        "sub.dresses": "드레스",
        "sub.knitwear": "니트웨어",
        "sub.tops-blouses": "상의 & 블라우스",
        "sub.trousers": "팬츠",
        "sub.skirts": "스커트",
        "sub.suits": "슈트",
        "sub.shirts": "셔츠",
        "sub.tote-bags": "토트백",
        "sub.shoulder-bags": "숄더백",
        "sub.cross-body": "크로스백",
        "sub.clutches": "클러치",
        "sub.small-leather-goods": "가죽 소품",
        "sub.heels": "힐",
        "sub.flats": "플랫",
        "sub.boots": "부츠",
        "sub.sneakers": "스니커즈",
        "sub.scarves": "스카프",
        "sub.belts": "벨트",
        "sub.jewellery": "주얼리",
        "sub.eyewear": "아이웨어",
        "sub.hats": "모자",
        "sub.gloves": "장갑",
        "sub.fragrance": "프래그런스",
        "sub.makeup": "메이크업",
        "sub.skincare": "스킨케어",
        "sub.body-bath": "바디 & 배스",
        "sub.gift-sets": "기프트 세트",

        "boutique.cheongdam": "서울 · 청담",
        "boutique.apgujeong": "서울 · 압구정",
        "boutique.itaewon": "서울 · 이태원",
        "boutique.hannam": "서울 · 한남",
        "boutique.seongsu": "서울 · 성수",
        "boutique.songdo": "인천 · 송도",
        "boutique.haeundae": "부산 · 해운대",
        "boutique.suseong": "대구 · 수성",
        "boutique.jungmun": "제주 · 중문",

        /* ----- 소개 ----- */
        "about.eyebrow": "최문경은 누구인가",
        "about.title": "브랜드 소개",
        "about.greeting": "안녕하세요,",
        "about.name": "디자이너 최문경입니다",
        "about.p1": "저는 글로벌 패션 디자이너입니다",
        "about.p2": "인천대학교 패션산업학과를 졸업했습니다",
        "about.p3": "2025년에 시작한 제 브랜드 \"Moongyung Choi\"가 세계로 나아가기를 늘 바라왔습니다",
        "about.p4": "이제, 럭셔리 브랜드 Moongyung Choi를 만나보세요",
        "about.imgAlt": "디자이너 최문경의 대표 착장",

        /* ----- 신상품 ----- */
        "new.title": "베스트 컬렉션",
        "new.item1": "문경초이 시그니처 코트",
        "new.item2": "천연 가죽 가방",
        "new.item3": "긴 치마",
        "new.more": "더 많은 신상품 보기",

        /* ----- 문의 ----- */
        "contact.eyebrow": "문의",
        "contact.title": "문의하기",
        "contact.phone": "전화",
        "contact.email": "이메일",
        "contact.address": "주소",
        "contact.addressValue": "서울특별시 강남구 테헤란로",
        "form.name": "이름",
        "form.email": "이메일",
        "form.message": "문의 내용",
        "form.send": "보내기",

        /* ----- 푸터 ----- */
        "footer.explore": "둘러보기",
        "footer.about": "소개",
        "footer.collections": "컬렉션",
        "footer.contact": "문의",
        "footer.follow": "팔로우",
        "footer.business": "사업자 정보",
        "footer.ceo": "대표자",
        "footer.ceoName": "최문경",
        "footer.bizNo": "사업자등록번호",
        "footer.email": "이메일",
        "footer.notice": "본 사이트의 모든 이미지, 영상, 디자인, 텍스트의 무단 복제, 배포, 2차 가공을 금합니다.",

        /* ----- 카테고리 페이지 ----- */
        "category.eyebrow": "컬렉션",
        "category.unknown": "컬렉션",
        "category.unknownDesc": "존재하지 않는 카테고리입니다.",
        "crumb.home": "홈",
        "filter.all": "전체",
        "product.comingSoon": "준비 중",
        "grid.empty": "해당 분류에 등록된 상품이 없습니다.",
        "grid.note": "아직 준비 중인 페이지입니다. 실제 상품 정보는 순차적으로 공개됩니다.",

        "desc.women": "일상과 무대의 경계를 지우는 여성 컬렉션.",
        "desc.men": "절제된 실루엣으로 완성한 남성 컬렉션.",
        "desc.bags": "장인의 손끝에서 완성된 가죽 제품.",
        "desc.shoes": "걸음마다 완성되는 실루엣.",
        "desc.accessories": "마무리를 결정하는 작은 차이.",
        "desc.beauty": "향으로 남는 브랜드의 기억.",

        /* ----- 404 ----- */
        "error.title": "페이지를 찾을 수 없습니다",
        "error.desc": "찾으시는 페이지가 없거나 주소가 바뀌었을 수 있습니다.",
        "error.home": "홈으로 돌아가기",
        "error.collections": "컬렉션 보기"
    }
};

/* 사생활 보호 모드 등에서는 localStorage 접근이 막힐 수 있어 감싸 둔다 */
const readStoredLang = function () {
    try {
        return localStorage.getItem(I18N_STORAGE_KEY);
    } catch (e) {
        return null;
    }
};

const storeLang = function (lang) {
    try {
        localStorage.setItem(I18N_STORAGE_KEY, lang);
    } catch (e) {
        // 저장하지 못해도 이번 방문에는 정상 동작한다
    }
};

/* 저장해 둔 선택 → 브라우저 언어 순으로 정한다 */
const detectLang = function () {
    const stored = readStoredLang();
    if (stored === "ko" || stored === "en") {
        return stored;
    }
    const browser = (navigator.language || "").toLowerCase();
    return browser.indexOf("ko") === 0 ? "ko" : "en";
};

let currentLang = detectLang();

const getLanguage = function () {
    return currentLang;
};

/* 키를 지금 언어의 글자로 바꾼다.
   빠진 키는 영어 원문으로, 그것도 없으면 키를 그대로 돌려준다. */
const t = function (key) {
    const table = I18N[currentLang];
    if (table && table[key] !== undefined) {
        return table[key];
    }
    const source = I18N[I18N_SOURCE];
    return source[key] !== undefined ? source[key] : key;
};

const applyTranslations = function () {
    document.documentElement.lang = currentLang;

    const textNodes = document.querySelectorAll("[data-i18n]");
    for (let i = 0; i < textNodes.length; i++) {
        textNodes[i].textContent = t(textNodes[i].getAttribute("data-i18n"));
    }

    for (let a = 0; a < I18N_ATTRS.length; a++) {
        const attr = I18N_ATTRS[a];
        const hook = "data-i18n-" + attr;
        const attrNodes = document.querySelectorAll("[" + hook + "]");
        for (let i = 0; i < attrNodes.length; i++) {
            attrNodes[i].setAttribute(attr, t(attrNodes[i].getAttribute(hook)));
        }
    }
};

/* 헤더와 드로어 양쪽에 KR/EN이 있다. data-lang이 붙은 버튼을 모두 잡아
   어느 쪽을 눌러도 두 곳의 표시가 함께 바뀌게 한다. */
const syncLangButtons = function () {
    const buttons = document.querySelectorAll("button[data-lang]");
    for (let i = 0; i < buttons.length; i++) {
        const on = buttons[i].dataset.lang === currentLang;
        buttons[i].classList.toggle("is-active", on);
        buttons[i].setAttribute("aria-pressed", String(on));
    }
};

const setLanguage = function (lang) {
    if (lang !== "ko" && lang !== "en") {
        return;
    }
    if (lang === currentLang) {
        return;
    }
    currentLang = lang;
    storeLang(lang);
    applyTranslations();
    syncLangButtons();

    /* catalog.js처럼 글자를 스스로 만들어 넣는 스크립트에게 알린다.
       (data-i18n으로는 닿지 않는 부분이다) */
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
};

/* 한국어로 볼 때는 영어 원문이 잠깐 스쳐 지나가는 게 보이지 않도록
   번역이 끝날 때까지 본문을 감춰 둔다. (style.css의 .i18n-pending)
   영어는 HTML에 적힌 그대로라 감출 필요가 없다.
   혹시 아래 코드가 실패해도 화면이 계속 가려지지 않도록 안전장치를 둔다. */
document.documentElement.lang = currentLang;
if (currentLang !== I18N_SOURCE) {
    document.documentElement.classList.add("i18n-pending");
    setTimeout(function () {
        document.documentElement.classList.remove("i18n-pending");
    }, 1200);
}

document.addEventListener("DOMContentLoaded", function () {
    try {
        applyTranslations();
        syncLangButtons();

        const buttons = document.querySelectorAll("button[data-lang]");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function () {
                setLanguage(this.dataset.lang);
            });
        }
    } finally {
        document.documentElement.classList.remove("i18n-pending");
    }
});
