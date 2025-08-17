(function () {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("main-nav");

  function toggleMenu() {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));

    // cambia icono (bars <-> xmark)
    const icon = menuToggle.querySelector("i");
    if (isOpen) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
      menuToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
      menuToggle.setAttribute("aria-label", "Abrir menú");
    }
  }

  menuToggle.addEventListener("click", toggleMenu);

  // cerrar cuando se hace click en un enlace (útil en móviles)
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && nav.classList.contains("open")) {
      toggleMenu();
    }
  });

  // cerrar con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      toggleMenu();
    }
  });

  // opcional: cerrar el menú al redimensionar si se pasa a desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && nav.classList.contains("open")) {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      const icon = menuToggle.querySelector("i");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
      menuToggle.setAttribute("aria-label", "Abrir menú");
    }
  });
})();

//    funciones autoinvocadas o IIFE (Immediately Invoked Function Expression) cuando las ves así:

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("#main-nav a").forEach(link => {
    if(link.getAttribute("href").includes(currentPage)){
      link.classList.add("active");
    }
  });
