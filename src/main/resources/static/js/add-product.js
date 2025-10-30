document.getElementById("productForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const categoria = document.getElementById("categoria").value;
  const stock = parseInt(document.getElementById("stock").value);
  const precio = parseFloat(document.getElementById("precio").value);

  if (!nombre || !categoria || stock < 0 || precio < 0) {
    alert("Por favor, complete todos los campos correctamente.");
    return;
  }

  alert(`✅ Producto registrado:
  • Nombre: ${nombre}
  • Categoría: ${categoria}
  • Stock: ${stock}
  • Precio: S/${precio.toFixed(2)}`);

  this.reset();
});
