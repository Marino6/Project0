function colorChange() {
    var colorInput = document.getElementById('color');
    var colorValue = colorInput.value;
    document.body.style.backgroundColor = "#" + colorValue;
}

if (colorValue == 69420)
{
console.log("what the fuck");
}

function moveButton(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    moveableButton.style.left = mouseX + 'px';
    moveableButton.style.top = mouseY + 'px';
}
const button = document.getElementById("moveableButton");
button.addEventListener("click", moveButton);



