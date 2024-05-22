
function colorChange() {
    var colorInput = document.getElementById('color');
    var colorValue = colorInput.value;
    document.body.style.backgroundColor = "#" + colorValue;
}

console.log("great");

function garbage()
{
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
if (mouseX != moveableButton.style.top)
{
moveableButton.style.top = (0.1 + "px" % 1000) ;
}
}
setInterval(garbage, 2000);
