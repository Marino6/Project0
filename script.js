
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
    
    // Get the current left position of the button relative to the viewport
    const buttonLeft = moveableButton.getBoundingClientRect().left;
    
    // Check if the mouse position is to the left of the button
    if (mouseX < buttonLeft) {
        // Update the top position of the button to move it downward
        moveableButton.style.top = (mouseY + 3) + "px"; // Move downward
    } else {
        // Update the top position of the button to match the mouse position
        moveableButton.style.top = mouseY + "px";
    }
}

// Add event listener for mousemove event
document.addEventListener('mousemove', garbage);

// Call garbage function every 2 seconds
setInterval(garbage, 2000);
