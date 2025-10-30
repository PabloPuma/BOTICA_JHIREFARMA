/* =====================================
   JHIREFARMA - JS ADMINISTRADOR
   Archivo: src/view/js/admin.js
   ===================================== */

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
  