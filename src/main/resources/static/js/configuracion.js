document.addEventListener("DOMContentLoaded", () => {
  const modoOscuroToggle = document.getElementById("modoOscuro");

  modoOscuroToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", modoOscuroToggle.checked);
  });

  const btnsGuardar = document.querySelectorAll("button");
  btnsGuardar.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      alert(`Acción ejecutada: ${btn.textContent}`);
    });
  });
});


   document.addEventListener("DOMContentLoaded", () => {

    const itemsMenu = document.querySelectorAll(".sidebar nav li");
  

    // ==== Menú activo ====
    itemsMenu.forEach((item) => {
      item.addEventListener("click", () => {
        itemsMenu.forEach((i) => i.classList.remove("activo"));
        item.classList.add("activo");
      });
    });
  

  });