
function colorChange() {
    var colorInput = document.getElementById('color');
    var colorValue = colorInput.value;
    document.body.style.backgroundColor = "#" + colorValue;
}

console.log("great");
function garbage(event) {
    // Check if the event is a mouse move event
    if (event.type === 'mousemove') {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        // Get the moveableButton element
        const moveableButton = document.getElementById('moveableButton');
        
        // Get the current top position of the button relative to the viewport
        const buttonTop = moveableButton.getBoundingClientRect().top;
        
        // Check if the mouse position is different from the current top position of the button
        if (mouseY < buttonTop) {
            // Update the top position of the button to move it downward
            moveableButton.style.top = (buttonTop + 3) + "px"; // Increment the position by 3 pixels
        } else {
            // Update the top position of the button to move it upward
            moveableButton.style.top = (buttonTop - 3) + "px"; // Decrement the position by 3 pixels
        }
    }
}

// Add event listener for mousemove event
document.addEventListener('mousemove', garbage);

// Call garbage function every 2 seconds
setInterval(garbage, 2000);
