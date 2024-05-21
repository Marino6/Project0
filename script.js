function colorChange() {
    var colorInput = document.getElementById('color');
    var colorValue = colorInput.value;
    document.body.style.backgroundColor = "#" + colorValue;
}

const moveableButton = document.getElementById('moveableButton');

moveableButton.addEventListener('click', (event) => {
    moveableButton.style.transition = 'none';
    document.removeEventListener('mousemove', moveButton); // Remove the event listener
});

function moveButton(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    moveableButton.style.left = mouseX + 'px';
    moveableButton.style.top = mouseY + 'px';
}
