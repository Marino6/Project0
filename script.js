function colorChange()
{
var body = document.getElementById('body');
var labelColor = document.getElementById('color');
var labelText = labelColor.textContent;

body.style.backgroundColor = "#" +  labelText;
}

var button = document.getElementById('colorChange');

        button.addEventListener('click', handleClick);
