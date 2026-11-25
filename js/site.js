/* ============================================================
   INTERAÇÕES DO PORTFÓLIO
   Arquivo: js/site.js
   O JavaScript controla os botões de avançar/voltar dos carrosséis
   e o menu responsivo. O conteúdo continua acessível sem animações.
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
    // Menu compacto: abre e fecha quando a tela é estreita.
    const botaoMenu = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu-horizontal");

    if (botaoMenu && menu) {
        botaoMenu.addEventListener("click", function () {
            const estaAberto = menu.classList.toggle("aberto");
            botaoMenu.setAttribute("aria-expanded", String(estaAberto));
        });
    }

    // Carrossel horizontal: move a faixa aproximadamente um cartão por clique.
    document.querySelectorAll("[data-carrossel]").forEach(function (carrossel) {
        const faixa = carrossel.querySelector(".carrossel-faixa");
        const anterior = carrossel.querySelector("[data-anterior]");
        const proximo = carrossel.querySelector("[data-proximo]");

        if (!faixa) return;

        function distanciaDeRolagem() {
            const slide = faixa.querySelector(".slide");
            return slide ? slide.getBoundingClientRect().width + 18 : faixa.clientWidth * 0.8;
        }

        if (anterior) {
            anterior.addEventListener("click", function () {
                faixa.scrollBy({ left: -distanciaDeRolagem(), behavior: "smooth" });
            });
        }
        if (proximo) {
            proximo.addEventListener("click", function () {
                faixa.scrollBy({ left: distanciaDeRolagem(), behavior: "smooth" });
            });
        }
    });

    // Carrossel vertical: sobe ou desce um cartão de cada vez.
    document.querySelectorAll("[data-carrossel-vertical]").forEach(function (carrossel) {
        const faixa = carrossel.querySelector(".carrossel-vertical");
        const anterior = carrossel.querySelector("[data-subir]");
        const proximo = carrossel.querySelector("[data-descer]");

        if (!faixa) return;

        function distanciaVertical() {
            const slide = faixa.querySelector(".slide-vertical");
            return slide ? slide.getBoundingClientRect().height : 140;
        }

        if (anterior) {
            anterior.addEventListener("click", function () {
                faixa.scrollBy({ top: -distanciaVertical(), behavior: "smooth" });
            });
        }
        if (proximo) {
            proximo.addEventListener("click", function () {
                faixa.scrollBy({ top: distanciaVertical(), behavior: "smooth" });
            });
        }
    });
});
