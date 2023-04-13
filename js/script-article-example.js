/***********CONFIGURACIÓN DE BTN-RETURN*******************/
const btnReturn = document.querySelector(".btn-return");

btnReturn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
