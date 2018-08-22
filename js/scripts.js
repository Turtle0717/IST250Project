alert('Hello there!');

// Function to return a number from 0 to 255.
const getRandomColorNumber = () => {
    const randomNumber = (Math.random()* 256);
    return randomNumber;
}

// Button on click to change background color to a rgb value.
document.getElementById('colorButton').addEventListener('click', ()=> {
  document.body.style.backgroundColor = "rgb(" + getRandomColorNumber() + "," + getRandomColorNumber() + "," + getRandomColorNumber() + ")";
});
