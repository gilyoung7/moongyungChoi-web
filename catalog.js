/* 카테고리 페이지(category.html)의 상품 목록을 그린다.
   주소의 ?c=bags 로 카테고리를, ?sub=clutches 로 하위 분류를 정한다.

   지금은 전부 자리표시용 상품입니다. 실제 상품이 생기면
   아래 CATALOG의 items에 { name, sub, image } 형태로 채우면 되고,
   image를 넣으면 회색 자리 대신 사진이 나옵니다. */
const CATALOG = {
    women: {
        title: "Women",
        desc: "일상과 무대의 경계를 지우는 여성 컬렉션.",
        subs: [
            { slug: "coats", label: "Coats" },
            { slug: "jackets", label: "Jackets" },
            { slug: "dresses", label: "Dresses" },
            { slug: "knitwear", label: "Knitwear" },
            { slug: "tops-blouses", label: "Tops & Blouses" },
            { slug: "trousers", label: "Trousers" },
            { slug: "skirts", label: "Skirts" }
        ],
        items: [
            { name: "Signature Wool Coat", sub: "coats" },
            { name: "Double-Breasted Trench", sub: "coats" },
            { name: "Cashmere Wrap Coat", sub: "coats" },
            { name: "Cropped Tweed Jacket", sub: "jackets" },
            { name: "Leather Biker Jacket", sub: "jackets" },
            { name: "Pleated Midi Dress", sub: "dresses" },
            { name: "Silk Slip Dress", sub: "dresses" },
            { name: "Floral Tiered Gown", sub: "dresses" },
            { name: "Ribbed Cashmere Knit", sub: "knitwear" },
            { name: "Oversized Mohair Sweater", sub: "knitwear" },
            { name: "Silk Tie-Neck Blouse", sub: "tops-blouses" },
            { name: "Cotton Poplin Shirt", sub: "tops-blouses" },
            { name: "High-Waist Wool Trousers", sub: "trousers" },
            { name: "Wide-Leg Linen Trousers", sub: "trousers" },
            { name: "Pleated Maxi Skirt", sub: "skirts" },
            { name: "A-Line Wool Skirt", sub: "skirts" }
        ]
    },
    men: {
        title: "Men",
        desc: "절제된 실루엣으로 완성한 남성 컬렉션.",
        subs: [
            { slug: "coats", label: "Coats" },
            { slug: "jackets", label: "Jackets" },
            { slug: "suits", label: "Suits" },
            { slug: "knitwear", label: "Knitwear" },
            { slug: "shirts", label: "Shirts" },
            { slug: "trousers", label: "Trousers" }
        ],
        items: [
            { name: "Wool Overcoat", sub: "coats" },
            { name: "Cashmere Car Coat", sub: "coats" },
            { name: "Unstructured Blazer", sub: "jackets" },
            { name: "Suede Bomber Jacket", sub: "jackets" },
            { name: "Two-Piece Wool Suit", sub: "suits" },
            { name: "Single-Breasted Tuxedo", sub: "suits" },
            { name: "Merino Crewneck", sub: "knitwear" },
            { name: "Cable-Knit Cardigan", sub: "knitwear" },
            { name: "Cotton Oxford Shirt", sub: "shirts" },
            { name: "Silk Evening Shirt", sub: "shirts" },
            { name: "Tailored Wool Trousers", sub: "trousers" },
            { name: "Pleated Linen Trousers", sub: "trousers" }
        ]
    },
    bags: {
        title: "Bags",
        desc: "장인의 손끝에서 완성된 가죽 제품.",
        subs: [
            { slug: "tote-bags", label: "Tote Bags" },
            { slug: "shoulder-bags", label: "Shoulder Bags" },
            { slug: "cross-body", label: "Cross Body" },
            { slug: "clutches", label: "Clutches" },
            { slug: "small-leather-goods", label: "Small Leather Goods" }
        ],
        items: [
            { name: "Structured Leather Tote", sub: "tote-bags" },
            { name: "Soft Calfskin Tote", sub: "tote-bags" },
            { name: "Canvas Shopper", sub: "tote-bags" },
            { name: "Quilted Shoulder Bag", sub: "shoulder-bags" },
            { name: "Chain Hobo Bag", sub: "shoulder-bags" },
            { name: "Mini Cross Body", sub: "cross-body" },
            { name: "Saddle Cross Body", sub: "cross-body" },
            { name: "Satin Evening Clutch", sub: "clutches" },
            { name: "Envelope Clutch", sub: "clutches" },
            { name: "Bifold Card Holder", sub: "small-leather-goods" },
            { name: "Zip Around Wallet", sub: "small-leather-goods" },
            { name: "Leather Key Pouch", sub: "small-leather-goods" }
        ]
    },
    shoes: {
        title: "Shoes",
        desc: "걸음마다 완성되는 실루엣.",
        subs: [
            { slug: "heels", label: "Heels" },
            { slug: "flats", label: "Flats" },
            { slug: "boots", label: "Boots" },
            { slug: "sneakers", label: "Sneakers" }
        ],
        items: [
            { name: "Pointed Leather Pump", sub: "heels" },
            { name: "Satin Slingback", sub: "heels" },
            { name: "Sculpted Heel Sandal", sub: "heels" },
            { name: "Leather Ballet Flat", sub: "flats" },
            { name: "Suede Loafer", sub: "flats" },
            { name: "Knee-High Leather Boot", sub: "boots" },
            { name: "Chelsea Ankle Boot", sub: "boots" },
            { name: "Leather Low-Top Sneaker", sub: "sneakers" },
            { name: "Suede Runner", sub: "sneakers" }
        ]
    },
    accessories: {
        title: "Accessories",
        desc: "마무리를 결정하는 작은 차이.",
        subs: [
            { slug: "scarves", label: "Scarves" },
            { slug: "belts", label: "Belts" },
            { slug: "jewellery", label: "Jewellery" },
            { slug: "eyewear", label: "Eyewear" },
            { slug: "hats", label: "Hats" },
            { slug: "gloves", label: "Gloves" }
        ],
        items: [
            { name: "Silk Twill Scarf", sub: "scarves" },
            { name: "Cashmere Stole", sub: "scarves" },
            { name: "Leather Buckle Belt", sub: "belts" },
            { name: "Chain Link Belt", sub: "belts" },
            { name: "Gold Hoop Earrings", sub: "jewellery" },
            { name: "Pearl Drop Necklace", sub: "jewellery" },
            { name: "Signet Ring", sub: "jewellery" },
            { name: "Acetate Sunglasses", sub: "eyewear" },
            { name: "Slim Metal Frames", sub: "eyewear" },
            { name: "Straw Boater Hat", sub: "hats" },
            { name: "Wool Felt Fedora", sub: "hats" },
            { name: "Lambskin Gloves", sub: "gloves" }
        ]
    },
    beauty: {
        title: "Beauty",
        desc: "향으로 남는 브랜드의 기억.",
        subs: [
            { slug: "fragrance", label: "Fragrance" },
            { slug: "makeup", label: "Makeup" },
            { slug: "skincare", label: "Skincare" },
            { slug: "body-bath", label: "Body & Bath" },
            { slug: "gift-sets", label: "Gift Sets" }
        ],
        items: [
            { name: "Eau de Parfum No.1", sub: "fragrance" },
            { name: "Eau de Toilette Blanc", sub: "fragrance" },
            { name: "Solid Perfume Case", sub: "fragrance" },
            { name: "Satin Matte Lipstick", sub: "makeup" },
            { name: "Sheer Cushion Foundation", sub: "makeup" },
            { name: "Eye Palette Nude", sub: "makeup" },
            { name: "Renewal Serum", sub: "skincare" },
            { name: "Hydrating Cream", sub: "skincare" },
            { name: "Perfumed Body Lotion", sub: "body-bath" },
            { name: "Scented Bath Oil", sub: "body-bath" },
            { name: "Discovery Set", sub: "gift-sets" },
            { name: "Holiday Coffret", sub: "gift-sets" }
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

/* 자리표시 카드. 사진이 없으므로 이름 첫 글자를 크게 넣어 채운다. */
const renderItems = function (items) {
    gridEl.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const card = document.createElement("a");
        card.className = "product-card";
        card.href = "#";
        card.setAttribute("data-placeholder", "");

        const thumb = document.createElement("div");
        thumb.className = "product-thumb";
        if (item.image) {
            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.name;
            thumb.appendChild(img);
        } else {
            const mark = document.createElement("span");
            mark.className = "product-mark";
            mark.textContent = item.name.charAt(0);
            thumb.appendChild(mark);
        }

        const name = document.createElement("h3");
        name.textContent = item.name;

        const status = document.createElement("p");
        status.textContent = "Coming Soon";

        card.appendChild(thumb);
        card.appendChild(name);
        card.appendChild(status);
        gridEl.appendChild(card);
    }
    emptyEl.hidden = items.length > 0;
};

const applyFilter = function (subSlug) {
    const buttons = filtersEl.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
        const on = buttons[i].dataset.sub === subSlug;
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

const addFilterButton = function (slug, label) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = label;
    if (slug) { btn.dataset.sub = slug; }
    btn.addEventListener("click", function () { applyFilter(slug); });
    filtersEl.appendChild(btn);
};

if (!category) {
    // 주소가 잘못됐을 때 빈 화면 대신 안내를 보여준다
    titleEl.textContent = "Collection";
    descEl.textContent = "존재하지 않는 카테고리입니다.";
    crumbEl.textContent = "Collection";
    emptyEl.hidden = false;
} else {
    document.title = category.title + " — Moongyung Choi";
    titleEl.textContent = category.title;
    descEl.textContent = category.desc;
    crumbEl.textContent = category.title;

    addFilterButton("", "All");
    for (let i = 0; i < category.subs.length; i++) {
        addFilterButton(category.subs[i].slug, category.subs[i].label);
    }

    const requested = params.get("sub");
    const valid = category.subs.some(function (s) { return s.slug === requested; });
    applyFilter(valid ? requested : "");
}
