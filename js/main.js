(function () {
  const subjects = {
    join: "Заявка: вступление в сообщество выпускников СПбГМТУ",
    update: "Заявка: обновить данные выпускника",
    mentor: "Заявка: стать наставником",
    lecture: "Заявка: выступить перед студентами",
    vacancy: "Заявка: предложить практику или вакансию",
    project: "Заявка: участие в разработках и проектах",
    ambassador: "Заявка: стать амбассадором СПбГМТУ",
    reunion: "Заявка: организовать встречу выпуска",
    support: "Заявка: поддержать Университет",
    event: "Заявка: регистрация на мероприятие",
    feedback: "Обращение в отдел по работе с выпускниками",
    discount: "Заявка: скидка на обучение для выпускника",
    library: "Заявка: доступ к библиотечному фонду"
  };

  function formHref(key) {
    const url = SITE.forms[key];
    if (url) return url;
    const subject = encodeURIComponent(subjects[key] || "Заявка выпускника СПбГМТУ");
    return `mailto:${SITE.email}?subject=${subject}`;
  }

  document.querySelectorAll("[data-form]").forEach((el) => {
    const key = el.getAttribute("data-form");
    el.setAttribute("href", formHref(key));
    if (SITE.forms[key]) {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
  });

  const params = new URLSearchParams(location.search);
  const action = params.get("action");
  if (action) {
    document.querySelectorAll(`[data-action="${action}"]`).forEach((card) => {
      card.classList.add("is-highlighted");
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
})();
