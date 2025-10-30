document.getElementById("actualizarStockForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const stock = parseInt(document.getElementById("stock").value);
  const precio = parseFloat(document.getElementById("precio").value);

  if (isNaN(stock) || stock < 0 || isNaN(precio) || precio <= 0) {
    alert("⚠️ Por favor ingrese valores válidos para stock y precio.");
    return;
  }

  alert(`✅ Producto actualizado correctamente:
  • Nombre: Paracetamol 500mg
  • Categoría: Analgésicos
  • Nuevo stock: ${stock}
  • Precio: S/ ${precio.toFixed(2)}`);

  this.reset();
});
