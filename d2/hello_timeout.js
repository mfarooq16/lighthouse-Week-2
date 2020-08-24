


/*
Challenge #1
First let's start with a simple exercise.

Have our file print out these three words 4311o th3r3 w0r1d three seconds after the file is run.

All of the words can appear at the same time.
*/

const say = function(string) {
  console.log(string);
};

const firstWord = (callback) => {
  setTimeout(() => {
    say("4311o");
    callback();
  }, 1000);
  
};

const secondWord = (callback) => {
  setTimeout(() => {
    say("th3r3");
    callback();
  }, 1000);

};

const thirdWord = (allback) => {
  setTimeout(() => {
    say("w0r1d");
  }, 1000);
};

firstWord(() => {
  secondWord(() => {
    thirdWord(() => {

    });
  });
});

setTimeout(() => {
  say("4311o th3r3 w0r1d");
}, 4000);