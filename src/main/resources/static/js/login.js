document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const adminBtn = document.getElementById("adminLogin");

  // Simulación de inicio de sesión usuario normal
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Simulación (sin base de datos aún)
    if (email === "usuario@correo.com" && password === "1234") {
      alert("Inicio de sesión exitoso ✅");
      window.location.href = "home.html";
    } else {
      alert("Credenciales inválidas ❌");
    }
  });

  // Redirección al login de administrador
  adminBtn.addEventListener("click", () => {
    window.location.href = "admin-login.html";
  });
});
