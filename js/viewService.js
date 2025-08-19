 document.querySelectorAll("li .titulo").forEach((titulo) => {
    titulo.addEventListener("click", () => {
      const li = titulo.parentElement;
      li.classList.toggle("active");
    });
  });

  