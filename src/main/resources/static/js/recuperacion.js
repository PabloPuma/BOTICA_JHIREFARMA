document.addEventListener('DOMContentLoaded', () => {
    const recoverForm = document.getElementById('recoverForm');
    const mensajeDiv = document.getElementById('mensaje');
  
    recoverForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
  
      if (!email) {
        mensajeDiv.textContent = 'Por favor ingresa tu correo.';
        mensajeDiv.style.color = 'red';
        return;
      }
  
      try {
        const res = await fetch('/api/recover-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
  
        const data = await res.json();
        mensajeDiv.textContent = data.message;
        mensajeDiv.style.color = data.success ? 'green' : 'red';
      } catch (err) {
        mensajeDiv.textContent = 'Error al enviar la solicitud. Intenta nuevamente.';
        mensajeDiv.style.color = 'red';
      }
    });
  });
  