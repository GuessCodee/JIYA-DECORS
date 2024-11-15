const textArray = ["AJ DECORS: Beautifying Spaces", "Explore our collections.", "Shop with LOVE."];
let textIndex = 0;
let charIndex = 0;

function typeText() {
  const typedTextElement = document.getElementById("typed-text");
  typedTextElement.textContent = textArray[textIndex].substring(0, charIndex);

  if (charIndex < textArray[textIndex].length) {
    charIndex++;
    setTimeout(typeText, 100); // Adjust typing speed here
  } else {
    setTimeout(fadeOutText, 1000); // Fade out text after typing
  }
}

function fadeOutText() {
  const typedTextElement = document.getElementById("typed-text");
  typedTextElement.classList.add("fade-out"); // Add fade-out class for smooth transition

  setTimeout(changeText, 1000); // Wait for fade-out animation to complete before changing text
}

function changeText() {
  textIndex = (textIndex + 1) % textArray.length;
  charIndex = 0;
  const typedTextElement = document.getElementById("typed-text");

  typedTextElement.classList.remove("fade-out"); // Remove fade-out effect
  typedTextElement.textContent = ''; // Clear text
  typeText(); // Start typing the new text
}

typeText(); // Start typing the first text
