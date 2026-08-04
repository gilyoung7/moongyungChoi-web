/* 카테고리 페이지(category.html)의 상품 목록을 그린다.
   주소의 ?c=bags 로 카테고리를, ?sub=clutches 로 하위 분류를 정한다.

   카테고리 이름(Women…)과 분류 이름(Coats…), 안내 문구는 lang.js의 사전에서
   가져온다. 드로어 메뉴와 같은 글자를 쓰기 때문에 한곳에서만 고치면 된다.
   상품 이름만 여기서 name(영어) / nameKo(한국어) 두 벌로 들고 있다.

   지금은 전부 자리표시용 상품입니다. 실제 상품이 생기면
   아래 CATALOG의 items에 { name, nameKo, sub, image } 형태로 채우면 되고,
   image를 넣으면 회색 자리 대신 사진이 나옵니다. */
const CATALOG = {
    women: {
        subs: ["coats", "jackets", "dresses", "knitwear", "tops-blouses", "trousers", "skirts"],
        items: [
            { name: "Signature Wool Coat", nameKo: "시그니처 울 코트", sub: "coats" },
            { name: "Double-Breasted Trench", nameKo: "더블브레스티드 트렌치코트", sub: "coats" },
            { name: "Cashmere Wrap Coat", nameKo: "캐시미어 랩 코트", sub: "coats" },
            { name: "Cropped Tweed Jacket", nameKo: "크롭 트위드 재킷", sub: "jackets" },
            { name: "Leather Biker Jacket", nameKo: "레더 바이커 재킷", sub: "jackets" },
            { name: "Pleated Midi Dress", nameKo: "플리츠 미디 드레스", sub: "dresses" },
            { name: "Silk Slip Dress", nameKo: "실크 슬립 드레스", sub: "dresses" },
            { name: "Floral Tiered Gown", nameKo: "플로럴 티어드 가운", sub: "dresses" },
            { name: "Ribbed Cashmere Knit", nameKo: "골지 캐시미어 니트", sub: "knitwear" },
            { name: "Oversized Mohair Sweater", nameKo: "오버사이즈 모헤어 스웨터", sub: "knitwear" },
            { name: "Silk Tie-Neck Blouse", nameKo: "실크 타이넥 블라우스", sub: "tops-blouses" },
            { name: "Cotton Poplin Shirt", nameKo: "코튼 포플린 셔츠", sub: "tops-blouses" },
            { name: "High-Waist Wool Trousers", nameKo: "하이웨이스트 울 팬츠", sub: "trousers" },
            { name: "Wide-Leg Linen Trousers", nameKo: "와이드 린넨 팬츠", sub: "trousers" },
            { name: "Pleated Maxi Skirt", nameKo: "플리츠 맥시 스커트", sub: "skirts" },
            { name: "A-Line Wool Skirt", nameKo: "A라인 울 스커트", sub: "skirts" }
        ]
    },
    men: {
        subs: ["coats", "jackets", "suits", "knitwear", "shirts", "trousers"],
        items: [
            { name: "Wool Overcoat", nameKo: "울 오버코트", sub: "coats" },
            { name: "Cashmere Car Coat", nameKo: "캐시미어 카 코트", sub: "coats" },
            { name: "Unstructured Blazer", nameKo: "언스트럭처드 블레이저", sub: "jackets" },
            { name: "Suede Bomber Jacket", nameKo: "스웨이드 봄버 재킷", sub: "jackets" },
            { name: "Two-Piece Wool Suit", nameKo: "울 투피스 슈트", sub: "suits" },
            { name: "Single-Breasted Tuxedo", nameKo: "싱글브레스티드 턱시도", sub: "suits" },
            { name: "Merino Crewneck", nameKo: "메리노 크루넥 니트", sub: "knitwear" },
            { name: "Cable-Knit Cardigan", nameKo: "케이블 니트 가디건", sub: "knitwear" },
            { name: "Cotton Oxford Shirt", nameKo: "코튼 옥스퍼드 셔츠", sub: "shirts" },
            { name: "Silk Evening Shirt", nameKo: "실크 이브닝 셔츠", sub: "shirts" },
            { name: "Tailored Wool Trousers", nameKo: "테일러드 울 팬츠", sub: "trousers" },
            { name: "Pleated Linen Trousers", nameKo: "플리츠 린넨 팬츠", sub: "trousers" }
        ]
    },
    bags: {
        subs: ["tote-bags", "shoulder-bags", "cross-body", "clutches", "small-leather-goods"],
        items: [
            { name: "Structured Leather Tote", nameKo: "스트럭처드 레더 토트백", sub: "tote-bags" },
            { name: "Soft Calfskin Tote", nameKo: "소프트 카프스킨 토트백", sub: "tote-bags" },
            { name: "Canvas Shopper", nameKo: "캔버스 쇼퍼백", sub: "tote-bags" },
            { name: "Quilted Shoulder Bag", nameKo: "퀼팅 숄더백", sub: "shoulder-bags" },
            { name: "Chain Hobo Bag", nameKo: "체인 호보백", sub: "shoulder-bags" },
            { name: "Mini Cross Body", nameKo: "미니 크로스백", sub: "cross-body" },
            { name: "Saddle Cross Body", nameKo: "새들 크로스백", sub: "cross-body" },
            { name: "Satin Evening Clutch", nameKo: "새틴 이브닝 클러치", sub: "clutches" },
            { name: "Envelope Clutch", nameKo: "엔벨로프 클러치", sub: "clutches" },
            { name: "Bifold Card Holder", nameKo: "이단 카드 홀더", sub: "small-leather-goods" },
            { name: "Zip Around Wallet", nameKo: "지퍼 장지갑", sub: "small-leather-goods" },
            { name: "Leather Key Pouch", nameKo: "레더 키 파우치", sub: "small-leather-goods" }
        ]
    },
    shoes: {
        subs: ["heels", "flats", "boots", "sneakers"],
        items: [
            { name: "Pointed Leather Pump", nameKo: "포인티드 레더 펌프스", sub: "heels" },
            { name: "Satin Slingback", nameKo: "새틴 슬링백", sub: "heels" },
            { name: "Sculpted Heel Sandal", nameKo: "스컬프처드 힐 샌들", sub: "heels" },
            { name: "Leather Ballet Flat", nameKo: "레더 발레 플랫", sub: "flats" },
            { name: "Suede Loafer", nameKo: "스웨이드 로퍼", sub: "flats" },
            { name: "Knee-High Leather Boot", nameKo: "니하이 레더 부츠", sub: "boots" },
            { name: "Chelsea Ankle Boot", nameKo: "첼시 앵클부츠", sub: "boots" },
            { name: "Leather Low-Top Sneaker", nameKo: "레더 로우탑 스니커즈", sub: "sneakers" },
            { name: "Suede Runner", nameKo: "스웨이드 러너", sub: "sneakers" }
        ]
    },
    accessories: {
        subs: ["scarves", "belts", "jewellery", "eyewear", "hats", "gloves"],
        items: [
            { name: "Silk Twill Scarf", nameKo: "실크 트윌 스카프", sub: "scarves" },
            { name: "Cashmere Stole", nameKo: "캐시미어 스톨", sub: "scarves" },
            { name: "Leather Buckle Belt", nameKo: "레더 버클 벨트", sub: "belts" },
            { name: "Chain Link Belt", nameKo: "체인 링크 벨트", sub: "belts" },
            { name: "Gold Hoop Earrings", nameKo: "골드 후프 이어링", sub: "jewellery" },
            { name: "Pearl Drop Necklace", nameKo: "펄 드롭 네크리스", sub: "jewellery" },
            { name: "Signet Ring", nameKo: "시그넷 링", sub: "jewellery" },
            { name: "Acetate Sunglasses", nameKo: "아세테이트 선글라스", sub: "eyewear" },
            { name: "Slim Metal Frames", nameKo: "슬림 메탈 프레임", sub: "eyewear" },
            { name: "Straw Boater Hat", nameKo: "스트로 보터 햇", sub: "hats" },
            { name: "Wool Felt Fedora", nameKo: "울 펠트 페도라", sub: "hats" },
            { name: "Lambskin Gloves", nameKo: "램스킨 장갑", sub: "gloves" }
        ]
    },
    beauty: {
        subs: ["fragrance", "makeup", "skincare", "body-bath", "gift-sets"],
        items: [
            { name: "Eau de Parfum No.1", nameKo: "오 드 퍼퓸 No.1", sub: "fragrance" },
            { name: "Eau de Toilette Blanc", nameKo: "오 드 뚜왈렛 블랑", sub: "fragrance" },
            { name: "Solid Perfume Case", nameKo: "고체 향수 케이스", sub: "fragrance" },
            { name: "Satin Matte Lipstick", nameKo: "새틴 매트 립스틱", sub: "makeup" },
            { name: "Sheer Cushion Foundation", nameKo: "시어 쿠션 파운데이션", sub: "makeup" },
            { name: "Eye Palette Nude", nameKo: "아이 팔레트 누드", sub: "makeup" },
            { name: "Renewal Serum", nameKo: "리뉴얼 세럼", sub: "skincare" },
            { name: "Hydrating Cream", nameKo: "수분 크림", sub: "skincare" },
            { name: "Perfumed Body Lotion", nameKo: "퍼퓸 바디로션", sub: "body-bath" },
            { name: "Scented Bath Oil", nameKo: "센티드 배스 오일", sub: "body-bath" },
            { name: "Discovery Set", nameKo: "디스커버리 세트", sub: "gift-sets" },
            { name: "Holiday Coffret", nameKo: "홀리데이 코프레", sub: "gift-sets" }
        ]
    }
};

const params = new URLSearchParams(window.location.search);
const categoryKey = params.get("c");
const category = CATALOG[categoryKey];

const titleEl = document.querySelector("#category-title");
const descEl = document.querySelector("#category-desc");
const crumbEl = document.querySelector("#crumb-current");
const filtersEl = document.querySelector("#filters");
const gridEl = document.querySelector("#product-grid");
const emptyEl = document.querySelector("#grid-empty");

/* 지금 언어에 맞는 상품 이름. 한국어 이름이 없으면 영어 이름을 쓴다. */
const itemName = function (item) {
    return getLanguage() === "ko" && item.nameKo ? item.nameKo : item.name;
};

/* 지금 고른 하위 분류. 언어를 바꿔 다시 그릴 때 그대로 유지하려고 기억해 둔다. */
let activeSub = "";

/* 자리표시 카드. 사진이 없으므로 이름 첫 글자를 크게 넣어 채운다. */
const renderItems = function (items) {
    gridEl.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const card = document.createElement("a");
        card.className = "product-card";
        card.href = "#";
        card.setAttribute("data-placeholder", "");

        const label = itemName(item);

        const thumb = document.createElement("div");
        thumb.className = "product-thumb";
        if (item.image) {
            const img = document.createElement("img");
            img.src = item.image;
            img.alt = label;
            thumb.appendChild(img);
        } else {
            const mark = document.createElement("span");
            mark.className = "product-mark";
            mark.textContent = label.charAt(0);
            thumb.appendChild(mark);
        }

        const name = document.createElement("h3");
        name.textContent = label;

        const status = document.createElement("p");
        status.textContent = t("product.comingSoon");

        card.appendChild(thumb);
        card.appendChild(name);
        card.appendChild(status);
        gridEl.appendChild(card);
    }
    emptyEl.hidden = items.length > 0;
};

const applyFilter = function (subSlug) {
    activeSub = subSlug;

    const buttons = filtersEl.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
        const on = (buttons[i].dataset.sub || "") === subSlug;
        buttons[i].classList.toggle("is-active", on);
        buttons[i].setAttribute("aria-pressed", String(on));
    }
    const items = subSlug
        ? category.items.filter(function (it) { return it.sub === subSlug; })
        : category.items;
    renderItems(items);

    // 새로고침하거나 링크를 공유해도 같은 화면이 나오도록 주소를 맞춰둔다
    const next = new URLSearchParams({ c: categoryKey });
    if (subSlug) { next.set("sub", subSlug); }
    history.replaceState(null, "", "?" + next.toString());
};

/* 분류 단추를 처음부터 다시 만든다. 언어를 바꿀 때도 이 함수를 다시 부른다. */
const buildFilters = function () {
    filtersEl.innerHTML = "";

    const addFilterButton = function (slug, label) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = label;
        if (slug) { btn.dataset.sub = slug; }
        btn.addEventListener("click", function () { applyFilter(slug); });
        filtersEl.appendChild(btn);
    };

    addFilterButton("", t("filter.all"));
    for (let i = 0; i < category.subs.length; i++) {
        const slug = category.subs[i];
        addFilterButton(slug, t("sub." + slug));
    }
};

const renderPage = function () {
    if (!category) {
        // 주소가 잘못됐을 때 빈 화면 대신 안내를 보여준다
        titleEl.textContent = t("category.unknown");
        descEl.textContent = t("category.unknownDesc");
        crumbEl.textContent = t("category.unknown");
        emptyEl.hidden = false;
        return;
    }

    const title = t("cat." + categoryKey);
    document.title = title + " — NANNAMUN";
    titleEl.textContent = title;
    descEl.textContent = t("desc." + categoryKey);
    crumbEl.textContent = title;

    buildFilters();
    applyFilter(activeSub);
};

/* 첫 그리기. 주소에 ?sub= 이 있으면 그 분류부터 보여준다. */
if (category) {
    const requested = params.get("sub");
    const valid = category.subs.indexOf(requested) !== -1;
    activeSub = valid ? requested : "";
}
renderPage();

/* 언어를 바꾸면 상품 목록은 data-i18n으로 닿지 않으므로 여기서 다시 그린다.
   (lang.js가 langchange 이벤트를 보내준다) */
document.addEventListener("langchange", renderPage);
