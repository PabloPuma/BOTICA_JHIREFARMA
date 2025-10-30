// verificacion.js
document.addEventListener('DOMContentLoaded', () => {
    const verificacionForm = document.getElementById('verificacionForm');
    const volverRegistro = document.getElementById('volverRegistro');
    const botonVerificar = verificacionForm.querySelector('button[type="submit"]');
  
    // Contenedor y barra de bloqueo
    let contadorDiv = document.getElementById('contadorBloqueo');
    if (!contadorDiv) {
      contadorDiv = document.createElement('div');
      contadorDiv.id = 'contadorBloqueo';
      contadorDiv.style.marginTop = '10px';
      contadorDiv.style.fontWeight = 'bold';
      verificacionForm.appendChild(contadorDiv);
    }
  
    let barraProgreso = document.getElementById('barraProgreso');
    if (!barraProgreso) {
      barraProgreso = document.createElement('div');
      barraProgreso.id = 'barraProgreso';
      barraProgreso.style.width = '100%';
      barraProgreso.style.height = '20px';
      barraProgreso.style.backgroundColor = '#ddd';
      barraProgreso.style.borderRadius = '10px';
      barraProgreso.style.marginTop = '5px';
      barraProgreso.style.overflow = 'hidden';
  
      const barraInterna = document.createElement('div');
      barraInterna.id = 'barraInterna';
      barraInterna.style.height = '100%';
      barraInterna.style.width = '100%';
      barraInterna.style.backgroundColor = '#f44336';
      barraInterna.style.transition = 'width 1s linear, background-color 1s linear';
  
      barraProgreso.appendChild(barraInterna);
      contadorDiv.appendChild(barraProgreso);
    }
  
    let intentosFallidos = parseInt(localStorage.getItem('intentosFallidos')) || 0;
    let bloqueosAcumulados = parseInt(localStorage.getItem('bloqueosAcumulados')) || 0;
    let bloqueoFin = parseInt(localStorage.getItem('bloqueoFin')) || 0;
  
    const obtenerTiempoBloqueo = (bloqueoNum) => {
      switch (bloqueoNum) {
        case 1: return 30;
        case 2: return 120;
        case 3: return 300;
        default: return 300;
      }
    };
  
    const ahora = Math.floor(Date.now() / 1000);
    if (bloqueoFin > ahora) {
      const tiempoRestante = bloqueoFin - ahora;
      bloquearBoton(tiempoRestante);
    }
  
    volverRegistro.addEventListener('click', () => {
      localStorage.removeItem('intentosFallidos');
      localStorage.removeItem('bloqueosAcumulados');
      localStorage.removeItem('bloqueoFin');
      window.location.href = 'register.html';
    });
  
    verificacionForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const codigoIngresado = document.getElementById('codigo').value.trim();
  
      if (!/^\d{6}$/.test(codigoIngresado)) {
        alert('⚠️ El código debe tener 6 dígitos numéricos.');
        return;
      }
  
      const datosRegistro = JSON.parse(sessionStorage.getItem('datosRegistro'));
  
      if (!datosRegistro) {
        alert('No se encontraron datos de registro. Vuelve a registrarte.');
        window.location.href = 'register.html';
        return;
      }
  
      if (codigoIngresado === datosRegistro.codigo.toString()) {
        alert(`✅ Cuenta verificada correctamente! Bienvenido ${datosRegistro.nombres}`);
        sessionStorage.removeItem('datosRegistro');
        localStorage.removeItem('intentosFallidos');
        localStorage.removeItem('bloqueosAcumulados');
        localStorage.removeItem('bloqueoFin');
        ocultarBarra();
        window.location.href = 'login.html';
      } else {
        intentosFallidos++;
        localStorage.setItem('intentosFallidos', intentosFallidos);
  
        if (intentosFallidos < 3) {
          alert(`❌ Código incorrecto. Te quedan ${3 - intentosFallidos} intento(s) antes del bloqueo.`);
        } else {
          bloqueosAcumulados++;
          localStorage.setItem('bloqueosAcumulados', bloqueosAcumulados);
  
          const tiempoBloqueo = obtenerTiempoBloqueo(bloqueosAcumulados);
          const bloqueoHasta = Math.floor(Date.now() / 1000) + tiempoBloqueo;
          localStorage.setItem('bloqueoFin', bloqueoHasta);
  
          alert(`⚠️ Has alcanzado el 3er intento fallido. El botón se bloqueará ${tiempoBloqueo} segundos.`);
  
          bloquearBoton(tiempoBloqueo);
  
          intentosFallidos = 0;
          localStorage.setItem('intentosFallidos', intentosFallidos);
        }
      }
    });
  
    function bloquearBoton(tiempoSegundos) {
      botonVerificar.disabled = true;
      mostrarBarra();
      let tiempo = tiempoSegundos;
      const barraInterna = document.getElementById('barraInterna');
  
      const intervalo = setInterval(() => {
        tiempo--;
        const porcentaje = (tiempo / tiempoSegundos) * 100;
        barraInterna.style.width = `${porcentaje}%`;
  
        if (porcentaje > 66) barraInterna.style.backgroundColor = '#f44336';
        else if (porcentaje > 33) barraInterna.style.backgroundColor = '#ff9800';
        else barraInterna.style.backgroundColor = '#4caf50';
  
        contadorDiv.firstChild.nodeValue = `⏳ Bloqueado por ${tiempo} segundos`;
  
        if (tiempo <= 0) {
          clearInterval(intervalo);
          botonVerificar.disabled = false;
          localStorage.removeItem('bloqueoFin');
          ocultarBarra();
        }
      }, 1000);
  
      contadorDiv.firstChild.nodeValue = `⏳ Bloqueado por ${tiempoSegundos} segundos`;
      barraInterna.style.width = '100%';
      barraInterna.style.backgroundColor = '#f44336';
    }
  
    function mostrarBarra() {
      barraProgreso.style.display = 'block';
      contadorDiv.style.display = 'block';
    }
  
    function ocultarBarra() {
      barraProgreso.style.display = 'none';
      contadorDiv.style.display = 'none';
    }
  });
  