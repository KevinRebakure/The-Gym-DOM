let start = performance.now();

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

let end = performance.now();

console.log(`The program took ${end - start} to run`)
