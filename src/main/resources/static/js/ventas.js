document.addEventListener("DOMContentLoaded", () => {
    const botonesMas = document.querySelectorAll(".mas");
    const botonesMenos = document.querySelectorAll(".menos");

    botonesMas.forEach(btn => {
        btn.addEventListener("click", () => {
            const span = btn.parentElement.querySelector("span");
            span.textContent = parseInt(span.textContent) + 1;
        });
    });

    botonesMenos.forEach(btn => {
        btn.addEventListener("click", () => {
            const span = btn.parentElement.querySelector("span");
            const valor = parseInt(span.textContent);
            if (valor > 1) span.textContent = valor - 1;
        });
    });
});
