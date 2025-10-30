document.addEventListener('DOMContentLoaded', () => {
    const resetForm = document.getElementById('resetForm');
    const mensajeDiv = document.getElementById('mensaje');
  
    // Suponemos que el token viene como parámetro en la URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
  
    if (!token) {
      mensajeDiv.textContent = 'Token inválido o expirado.';
      mensajeDiv.style.color = 'red';
      resetForm.style.display = 'none';
      return;
    }
  
    resetForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const password = document.getElementById('password').value.trim();
      const confirmPassword = document.getElementById('confirmPassword').value.trim();
  
      if (!password || !confirmPassword) {
        mensajeDiv.textContent = 'Completa ambos campos.';
        mensajeDiv.style.color = 'red';
        return;
      }
  
      if (password !== confirmPassword) {
        mensajeDiv.textContent = 'Las contraseñas no coinciden.';
        mensajeDiv.style.color = 'red';
        return;
      }
  
      try {
        const res = await fetch('/api/reset-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token, password })
        });
  
        const data = await res.json();
        mensajeDiv.textContent = data.message;
        mensajeDiv.style.color = data.success ? 'green' : 'red';
  
        if (data.success) {
          // Redirigir al login después de 3 segundos
          setTimeout(() => {
            window.location.href = 'login.html';
          }, 3000);
        }
      } catch (err) {
        mensajeDiv.textContent = 'Error al actualizar la contraseña. Intenta nuevamente.';
        mensajeDiv.style.color = 'red';
      }
    });
  });
  