// === GRÁFICOS DE REPORTES ===

// Ventas por Mes
const ctxMes = document.getElementById("chartVentasMes").getContext("2d");
new Chart(ctxMes, {
  type: "bar",
  data: {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    datasets: [{
      label: "Ventas (S/)",
      data: [700, 850, 900, 1000, 950, 1100, 1200, 1300, 1250, 1400, 1350, 1500],
      backgroundColor: "#8fd19e",
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        grid: { borderDash: [5, 5] },
        beginAtZero: true
      }
    },
    plugins: { legend: { display: false } }
  }
});

// Ventas Diarias
const ctxDia = document.getElementById("chartVentasDiarias").getContext("2d");
new Chart(ctxDia, {
  type: "line",
  data: {
    labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    datasets: [{
      label: "Ventas (S/)",
      data: [180, 190, 200, 210, 220, 230, 233],
      borderColor: "#2b7a0b",
      backgroundColor: "rgba(43, 122, 11, 0.1)",
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      y: {
        grid: { borderDash: [5, 5] },
        beginAtZero: true
      }
    }
  }
});

// === FUNCIONALIDAD BOTONES ===
document.querySelector(".btn-generar").addEventListener("click", () => {
  alert("Generando reporte...");
});

document.querySelector(".btn-exportar").addEventListener("click", () => {
  alert("Exportando datos...");
});
