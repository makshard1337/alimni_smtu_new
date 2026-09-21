(function () {
  const page = document.body.dataset.page || "home";

  const nav = [
    { id: "opportunities", href: "opportunities.html", label: "Возможности" },
    { id: "events", href: "events.html", label: "События" },
    { id: "career", href: "career.html", label: "Карьера" },
    { id: "contacts", href: "contacts.html", label: "Контакты" }
  ];

  const navHtml = nav
    .map(
      (item) =>
        `<a class="nav__link${item.id === page ? " is-active" : ""}" href="${item.href}">${item.label}</a>`
    )
    .join("");

  const header = `
    <header class="header">
      <div class="topbar">
        <div class="container topbar__inner">
          <a href="${SITE.links.university}" target="_blank" rel="noopener">СПбГМТУ</a>
          <span class="topbar__sep"></span>
          <a href="${SITE.links.priority}" target="_blank" rel="noopener">Приоритет-2030</a>
          <span class="topbar__sep"></span>
          <a href="${SITE.links.engineers}" target="_blank" rel="noopener">ПИШ</a>
          <span class="topbar__sep"></span>
          <a href="${SITE.links.pilot}" target="_blank" rel="noopener">Пилотный проект</a>
          <span class="topbar__sep"></span>
          <a href="mailto:${SITE.email}">${SITE.email}</a>
          <span class="topbar__muted">${SITE.hours}</span>
        </div>
      </div>
      <div class="container header__row">
        <a class="brand" href="index.html">
          <img src="img/mark.svg" alt="СПбГМТУ">
          <span>
            <strong>Выпускники</strong>
            <small>СПбГМТУ · Корабелка</small>
          </span>
        </a>
        <nav class="nav" id="site-nav">${navHtml}</nav>
        <div class="header__cta">
          <a class="btn btn--cyan" data-form="join" href="https://isu.smtu.ru/reg/" target="_blank" rel="noopener">Присоединиться</a>
          <button class="burger" type="button" aria-label="Открыть меню" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `;

  const footer = `
    <footer class="footer">
      <div class="footer__accent"></div>
      <div class="container footer__grid">
        <div class="footer__brand">
          <img src="img/mark.svg" alt="">
          <p>Отдел по работе с выпускниками Санкт-Петербургского государственного морского технического университета.</p>
        </div>
        <div>
          <h3>Разделы</h3>
          <a href="opportunities.html">Возможности</a>
          <a href="events.html">Мероприятия</a>
          <a href="career.html">Карьера и практика</a>
        </div>
        <div>
          <h3>Участие</h3>
          <a href="mentoring.html">Наставничество</a>
          <a href="projects.html">Проекты</a>
          <a href="support.html">Поддержать Университет</a>
          <a href="https://isu.smtu.ru/reg/" target="_blank" rel="noopener">Присоединиться</a>
        </div>
        <div>
          <h3>Контакты</h3>
          <p>${SITE.address}</p>
          <a href="mailto:${SITE.email}">${SITE.email}</a>
          <div class="social">
            <a href="${SITE.links.vk}" target="_blank" rel="noopener">ВКонтакте</a>
            <a href="${SITE.links.telegram}" target="_blank" rel="noopener">Telegram</a>
            <a href="${SITE.links.university}" target="_blank" rel="noopener">smtu.ru</a>
          </div>
        </div>
      </div>
      <div class="footer__copy">
        <div class="container">© СПбГМТУ, отдел по работе с выпускниками</div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);

  const burger = document.querySelector(".burger");
  const navEl = document.getElementById("site-nav");
  burger?.addEventListener("click", () => {
    const open = navEl.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });
})();
