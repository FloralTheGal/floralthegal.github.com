const imgBackground = document.querySelector('.img_background');
let posX = 0;
let posY = 0;
const speed = 1; // Velocidade do movimento diagonal

function moveBackground() {
    posX += speed;
    posY += speed;
    imgBackground.style.backgroundPositionX = posX + 'px';
    imgBackground.style.backgroundPositionY = posY + 'px';
    requestAnimationFrame(moveBackground);
}

moveBackground();