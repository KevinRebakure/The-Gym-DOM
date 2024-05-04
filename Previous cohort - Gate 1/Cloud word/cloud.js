// Select the text from the DOM
// Notice the use of innerText instead of textContent --- 👇here ---
const paragraph = document.getElementById("myParagraph").innerText;
// Access the div where the final text will be displayed
const display = document.getElementById("myWordCloud");
// Select all words and remove all signs with regEx
// Look how simple it is to remove all unnecessary signs
const words = paragraph.toLowerCase().match(/\w+/g); // 👈
// Use a set to get single words
const singles = [...new Set(words)];
// Count occurances of each word and add them in the array
const occurances = singles.map((single) => {
  let count = 0;
  words.forEach((word) => {
    if (word == single) count++;
  });
  return { [single]: count };
});
// Sort the occurances array
occurances.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);
// Select the top 12
const selection = occurances.slice(0, 12);
// Add those top 12 words to the DOM and add a little bit CSS styles
let size = 64;
let state = true;
selection.forEach((word) => {
  const p = document.createElement("p");
  p.textContent = Object.keys(word);
  p.style.fontSize = `${size}px`;
  p.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
  p.style.writingMode = state ? "vertical-rl" : "horizontal-tb";
  display.appendChild(p);
  size = size - 4;
  state = !state;
});