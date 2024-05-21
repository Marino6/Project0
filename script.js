const moveableButton = document.getElementById('moveableButton');
let isMoving = false;

moveableButton.addEventListener('click', () => {
    if (!isMoving) {
        document.addEventListener('mousemove', moveButton);
        isMoving = true;
    } else {
        document.removeEventListener('mousemove', moveButton);
        isMoving = false;
    }
});

function moveButton(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    moveableButton.style.left = mouseX + 'px';
    moveableButton.style.top = mouseY + 'px';
}
