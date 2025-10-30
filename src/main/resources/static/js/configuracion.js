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
