const backgroundContainer = document.querySelector('.img_background');
const quadrado = document.querySelector('.quadrado');
const welcomeText = document.getElementById('welcome-text');
let posX = 0;
let posY = 0;
const speed = 1; // Velocidade do movimento diagonal

// Animação do background
function moveBackground() {
    posX += speed;
    posY += speed;
    backgroundContainer.style.backgroundPositionX = posX + 'px';
    backgroundContainer.style.backgroundPositionY = posY + 'px';
    requestAnimationFrame(moveBackground);
}

// Função de easing
function easeOutQuad(t) {
    return t * (2 - t);
}

// Animação do quadrado
function animateQuadrado() {
    const duration = 500; // Duração da animação em milissegundos
    const startTime = performance.now();

    function animationStep(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Progresso da animação
        const easedProgress = easeOutQuad(progress); // Aplicar easing

        // Definir o tamanho do quadrado com base no progresso da animação
        const maxWidth = 700; // 70% da largura da viewport
        const maxHeight = 500; // 50% da altura da viewport
        quadrado.style.width = `${maxWidth * easedProgress}px`;
        quadrado.style.height = `${maxHeight * easedProgress}px`;

        if (progress < 1) {
            requestAnimationFrame(animationStep);
        } else {
            // Esperar 5 segundos após a animação do quadrado terminar
            setTimeout(() => {
                welcomeText.style.opacity = 1; // Mostrar o texto suavemente
            }, 400);
        }
    }

    requestAnimationFrame(animationStep);
}

moveBackground();
animateQuadrado();
