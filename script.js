
function colorChange() {
    var colorInput = document.getElementById('color');
    var colorValue = colorInput.value;
    document.body.style.backgroundColor = "#" + colorValue;
}

console.log("great");

function garbage(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    // Get the moveableButton element
    const moveableButton = document.getElementById('moveableButton');
    
    // Check if the mouse position is different from the current top position of the button
    if (mouseX < parseInt(moveableButton.style.top)) {
        // Update the top position of the button
        moveableButton.style.top = (mouseX + 3) + "px"; // Increment the position by 10 pixels
    } else {
    moveableButton.style.top = (mouseX + -3) + "px"; 
    }
}

// Add event listener for mousemove event
document.addEventListener('mousemove', garbage);

// Call garbage function every 2 seconds
setInterval(garbage, 2000);
