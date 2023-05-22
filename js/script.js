/***********CONFIGURACIÓN DE EXPLORACIÓN*******************/

// Sección lógica que nos permite seleccionar entre los tres sets de Temas que se muestran
// dentro de la página. Se revisa la tab que está activa, desplegando el contenido
// correspondiente a esta.

const tabContainer = document.querySelector(".exploration-tab-container");
const tabs = document.querySelectorAll(".exploration-tab");
const expContent = document.querySelectorAll(".exploration-content");

tabContainer?.addEventListener("click", function (e) {
  const clicked = e.target;

  if (!clicked.classList.contains("exploration-tab")) return;

  tabs.forEach((t) => t.classList.remove("exploration-tab--active"));
  clicked.classList.add("exploration-tab--active");

  expContent.forEach((exp) =>
    exp.classList.remove("exploration-content--active")
  );
  document
    .querySelector(`.exploration-content--${clicked.dataset.tab}`)
    .classList.add("exploration-content--active");
});

/***********CONFIGURACIÓN DE NAV MOBILE*******************/


// Con esta funcion desactivamos el scroll al momento de abrir el menu de hamburguesa
// haciendo que, al hacer un scroll, la pantalla regrese al lugar fijado.
function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function lockScroll() {
    window.scrollTo(scrollLeft, scrollTop);
  };
}



const btnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

// Al hacer click en el botón hamburguesa, se agrega o quita la clase que despliega el menú y 
// se activa o desactiva la función para bloquear el scroll.
btnEl.addEventListener("click", function (e) {
  headerEl.classList.toggle("nav-open");
  if(headerEl.classList.contains("nav-open")){
    disableScroll();
  }else{
    window.onscroll = function() {};
  }

});

/***********CONFIGURACIÓN DE BTN-RETURN*******************/

// Al hacer click en el botón de regreso, esta función nos llevará al inicio de la página.
const btnReturn = document.querySelector(".btn-return");

btnReturn.addEventListener("click", function returnButton () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/***********CLICK EN BOTON DE LIKE*******************/


// Cuando demos click en un elemento que sea un botón, a este se le agregará una nueva clase 
// que nos indicará que ya se ha dado like.
document.addEventListener('click', function buttonLiked(event) {
  if(event.target.classList.contains('btn-like')){
    event.target.classList.toggle('btn-liked')
  }else if(event.target.parentElement.classList.contains('btn-like')){
    event.target.parentElement.classList.toggle('btn-liked')
  }
});
