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

const moveableDiv = document.getElementById('moveableDiv');
let isMoving = false;

moveableDiv.addEventListener('mousedown', startDrag);
document.addEventListener('mouseup', endDrag);

function startDrag(event) {
    isMoving = true;
    document.addEventListener('mousemove', moveDiv);
}

function endDrag(event) {
    isMoving = false;
    document.removeEventListener('mousemove', moveDiv);
}

function moveDiv(event) {
    if (isMoving) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        moveableDiv.style.left = mouseX + 'px';
        moveableDiv.style.top = mouseY + 'px';
    }
}
