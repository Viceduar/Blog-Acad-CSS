/***********CONFIGURACIÓN DE EXPLORACIÓN*******************/
const tabContainer = document.querySelector(".exploration__tab-container");
const tabs = document.querySelectorAll(".exploration__tab");
const expContent = document.querySelectorAll(".exploration__content");

tabContainer.addEventListener("click", function (e) {
  const clicked = e.target;

  if (!clicked.classList.contains("exploration__tab")) return;

  tabs.forEach((t) => t.classList.remove("exploration__tab--active"));
  clicked.classList.add("exploration__tab--active");

  expContent.forEach((exp) =>
    exp.classList.remove("exploration__content--active")
  );
  document
    .querySelector(`.exploration__content--${clicked.dataset.tab}`)
    .classList.add("exploration__content--active");
});

/***********CONFIGURACIÓN DE NAV-STICKY*******************/
const sectionNewestEl = document.querySelector(".section-newest");
const obs = new IntersectionObserver(
  function (entries) {
    const [ent] = entries;

    if (!ent.isIntersecting) document.body.classList.add("sticky");
    else document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionNewestEl);
