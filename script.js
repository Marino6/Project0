 var colorInput = document.getElementById('color');
    var colorValue = colorInput.value;
function colorChange() {
   
    document.body.style.backgroundColor = "#" + colorValue;
}

if (colorValue == 69420)
{
console.log("what the fuck");
}

    let mouseX = event.clientX;
    let mouseY = event.clientY;
    
if (mouseX != moveableButton.style.top)
{
moveableButton.style.top = (0.1 + "px" % 1000) ;
}

const crypto = require('crypto');

// Function to generate random garbage
function generateRandomGarbage() {
    const numBytes = Math.floor(Math.random() * 100) + 1; // Random number of bytes (1 to 100)
    const randomGarbage = crypto.randomBytes(numBytes).toString('hex');
    return randomGarbage;
}

// Function to change the content of the <h1> element to random garbage
function changeH1ContentToRandomGarbage() {
    const h1Element = document.getElementById('blah');
    const randomGarbage = generateRandomGarbage();
    h1Element.textContent = randomGarbage;
}

// Call the function to change the content initially
changeH1ContentToRandomGarbage();

// Change the content of the <h1> element to random garbage every few seconds
setInterval(changeH1ContentToRandomGarbage, 5000); // Change every 5 seconds



