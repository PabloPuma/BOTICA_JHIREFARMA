/* =====================================
   JHIREFARMA - JS ADMINISTRADOR
   Archivo: src/view/js/admin.js
   ===================================== */

   document.addEventListener("DOMContentLoaded", () => {
    const filas = document.querySelectorAll("tbody tr");
    const buscador = document.querySelector(".buscador input");
    const botonesActualizar = document.querySelectorAll(".btn-azul");
    const itemsMenu = document.querySelectorAll(".sidebar nav li");
  
    // ==== Filtro de búsqueda ====
    buscador.addEventListener("input", (e) => {
      const texto = e.target.value.toLowerCase();
  
      filas.forEach((fila) => {
        const nombre = fila.cells[1].textContent.toLowerCase();
        fila.style.display = nombre.includes(texto) ? "" : "none";
      });
    });
  
    // ==== Menú activo ====
    itemsMenu.forEach((item) => {
      item.addEventListener("click", () => {
        itemsMenu.forEach((i) => i.classList.remove("activo"));
        item.classList.add("activo");
      });
    });
  
    // ==== Botones "Actualizar" ====
    botonesActualizar.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.textContent = "✔ Actualizado";
        btn.style.background = "#059669";
        setTimeout(() => {
          btn.textContent = "Actualizar";
          btn.style.background = "";
        }, 2000);
      });
    });
  });
  