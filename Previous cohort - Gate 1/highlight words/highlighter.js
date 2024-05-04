const element = document.getElementById("myParagraph");

// get top 5 occuring words
const text = element.innerText.toLowerCase();
const words = text.match(/\w+/g);
const singles = [...new Set(words)];
const occurances = singles.map((single) => {
  let count = 0;
  words.forEach((word) => {
    if (word == single) count++;
  });
  return { [single]: count };
});
occurances.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);
const sliced = occurances.slice(0, 5);
const top5 = sliced.map((instance) => Object.keys(instance)[0]);

// hight words
const TEXT = element.innerText;
const WORDS = TEXT.match(/\S+/g)
  .map((word) => {
    if (top5.includes(word.toLowerCase().match(/\w+/g)[0])) {
      if (word[0].match(/[A-Z]/)) {
        return `<span style='display: inline-block; background-color: hsla(60, 100%, 50%, 0.562); padding: 1px 5px; border-radius: 5px; text-decoration: underline;'>${word}</span>`;
      } else {
        return `<span style='display: inline-block; background-color: hsla(60, 100%, 50%, 0.562); padding: 1px 5px; border-radius: 5px;'>${word}</span>`;
      }
    } else {
      return word;
    }
  })
  .join(" ");

element.innerHTML = WORDS;
