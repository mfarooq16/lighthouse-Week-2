const string = "hello there from lighthouse labs";
const linebreak = "\n";
const sentence = string + linebreak;
let time = 1000;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time += 50);
  
}

