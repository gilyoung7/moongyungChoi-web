/* 문의 폼 전송 (Web3Forms)

   그냥 두면 폼을 제출할 때 브라우저가 페이지를 떠나 서비스의 안내 화면으로
   넘어갑니다. 여기서는 fetch로 대신 보내서, 사이트에 머문 채 결과만
   폼 아래에 보여줍니다.

   자바스크립트가 꺼져 있으면 이 파일이 동작하지 않지만,
   HTML의 action/method가 그대로 살아 있어 전송 자체는 됩니다.
   (다만 서비스의 안내 페이지로 이동합니다) */

const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#form-status");
const contactButton = contactForm.querySelector("button[type=submit]");

/* 키를 아직 넣지 않은 상태를 구분하려고 HTML에 적어 둔 자리표시 값 */
const CONTACT_KEY_PLACEHOLDER = "PUT-YOUR-WEB3FORMS-KEY-HERE";

/* 메일 제목 앞에 항상 붙는 말. 받은편지함에서 사이트 문의임을 바로 알아보고
   검색이나 필터로 모아 볼 수 있도록 고정한다.
   뒤에는 방문자가 제목 칸에 적은 글이 이어진다. */
const CONTACT_SUBJECT_PREFIX = "NANNAMUN 문의";

/* 언어를 바꿔도 지금 떠 있는 메시지를 다시 그리기 위해 키를 기억해 둔다 */
let contactStatusKey = "";

const setContactStatus = function (key, kind) {
    contactStatusKey = key;
    if (!key) {
        contactStatus.hidden = true;
        contactStatus.textContent = "";
        return;
    }
    contactStatus.textContent = t(key);
    contactStatus.classList.toggle("is-success", kind === "success");
    contactStatus.classList.toggle("is-error", kind === "error");
    contactStatus.hidden = false;
};

/* 언어를 바꾸면 이 글자는 data-i18n으로 닿지 않으므로 여기서 다시 그린다 */
document.addEventListener("langchange", function () {
    if (contactStatusKey) {
        contactStatus.textContent = t(contactStatusKey);
    }
});

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {};
    const entries = new FormData(contactForm).entries();
    for (const pair of entries) {
        data[pair[0]] = pair[1];
    }

    /* 방문자가 적은 제목 앞에 고정 문구를 붙인다.
       비워둔 채로 넘어온 경우(required를 우회한 경우)에는 고정 문구만 남긴다. */
    const typed = (data.subject || "").trim();
    data.subject = typed ? CONTACT_SUBJECT_PREFIX + " — " + typed : CONTACT_SUBJECT_PREFIX;

    if (data.access_key === CONTACT_KEY_PLACEHOLDER) {
        // 사이트를 만든 사람에게만 보이는 안내. 방문자에게는 일반 오류로 보인다.
        console.warn(
            "[문의 폼] Web3Forms 키가 아직 자리표시 값입니다. " +
            "index.html의 access_key를 발급받은 키로 바꿔주세요."
        );
        setContactStatus("form.error", "error");
        return;
    }

    contactButton.disabled = true; // 누르는 동안 중복 전송 방지
    setContactStatus("form.sending");

    fetch(contactForm.action, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(function (res) { return res.json(); })
        .then(function (result) {
            if (result.success) {
                setContactStatus("form.success", "success");
                contactForm.reset();
            } else {
                setContactStatus("form.error", "error");
            }
        })
        .catch(function () {
            // 인터넷이 끊겼거나 서비스가 응답하지 않는 경우
            setContactStatus("form.error", "error");
        })
        .finally(function () {
            contactButton.disabled = false;
        });
});
