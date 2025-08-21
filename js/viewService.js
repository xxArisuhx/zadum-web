// JS para la aparicion de los textos en la pagina de servicio

document.querySelectorAll("li .titulo").forEach((titulo) => {
    titulo.addEventListener("click", () => {
      const li = titulo.parentElement;
      li.classList.toggle("active");
    });
  });

