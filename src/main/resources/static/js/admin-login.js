document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("adminLoginForm");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const user = document.getElementById("adminUser").value.trim();
      const pass = document.getElementById("adminPass").value.trim();
  
      if (user === "admin" && pass === "1234") {
        alert("Inicio de sesión exitoso ✅");
        window.location.href = "admin.html";
      } else {
        alert("Credenciales inválidas ❌");
      }
    });
  });