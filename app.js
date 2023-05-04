'use strict';

let userName = prompt('What is your name?');
console.log(userName);
let score = 0;
function welcome() {
let theirName = 'Welcome to my site ' + userName + ' but before we go there, how about we play a guessing game!';
console.log(userName);
alert(theirName);
}

function cat(){
let catQuestion = prompt('Do I have cats? Yes/No?');
console.log('Do I have cats?');
let correctCat = 'That is correct!';
let wrongCat = 'Nope, I have two cats!';
if (catQuestion.toLowerCase() === 'yes' || catQuestion.toLowerCase() === 'y') {
  console.log(catQuestion);
  alert(correctCat);
  score++;
  console.log(score);
} else if (catQuestion.toLowerCase() === 'no' || catQuestion.toLowerCase() === 'n') {
  console.log(catQuestion);
  alert(wrongCat);
  score--;
  console.log(score);
}
}

function gamer() {
let gamerQuestion = prompt('Am I a gamer? Yes/No?');
console.log('Am I a gamer?');
let correctGamer = 'That is correct!';
let wrongGamer = 'Nope, tabletop, video games, I play them all!';
if (gamerQuestion.toLowerCase() === 'yes' || gamerQuestion.toLowerCase() === 'y') {
  console.log(gamerQuestion);
  alert(correctGamer);
  score++;
  console.log(score);
} else if (gamerQuestion.toLowerCase() === 'no' || gamerQuestion.toLowerCase() === 'n') {
  console.log(gamerQuestion);
  alert(wrongGamer);
  score--;
  console.log(score);
}
}

function juggle() {
let juggleQuestion = prompt('Can I juggle? Yes/No?');
console.log('Can I juggle?');
let correctJuggle = 'Correct, no knife tossing for me.';
let wrongJuggle = 'No, I can\'t do everything sheesh!';
if (juggleQuestion.toLowerCase() === 'no' || juggleQuestion.toLowerCase() === 'n') {
  console.log(juggleQuestion);
  alert(correctJuggle);
  score++;
  console.log(score);
} else if (juggleQuestion.toLowerCase() === 'yes' || juggleQuestion.toLowerCase() === 'y') {
  console.log(juggleQuestion);
  alert(wrongJuggle);
  score--;
  console.log(score);
}
}


function music() {
let musicQuestion = prompt('Do I like to make music? Yes/No?');
console.log('Do I like to make music?');
let correctMusic = 'Yes, mostly electronic/ambient music';
let wrongMusic = 'Nope. I do actually.';
if (musicQuestion.toLowerCase() === 'yes' || musicQuestion.toLowerCase() === 'y') {
  console.log(musicQuestion);
  alert(correctMusic);
  score++;
  console.log(score);
} else if (musicQuestion.toLowerCase() === 'no' || musicQuestion.toLowerCase() === 'n') {
  console.log(musicQuestion);
  alert(wrongMusic);
  score--;
  console.log(score);
}
}


let cookQuestion = prompt('Do I like to cook? Yes/No?');
console.log('Do I like to cook?');
let correctCook = 'Correct, maybe my lazy developer mindset is affecting other areas...';
let wrongCook = 'Nope. But I do try!';
if (cookQuestion.toLowerCase() === 'no' || cookQuestion.toLowerCase() === 'n') {
  console.log(cookQuestion);
  alert(correctCook);
  score++;
  console.log(score);
} else if (cookQuestion.toLowerCase() === 'yes' || cookQuestion.toLowerCase() === 'y') {
  console.log(cookQuestion);
  alert(wrongCook);
  score--;
  console.log(score);
}


let correctAnswer = 6;
let attemptsRemaining = 4;
let guessedCorrectly = false;
console.log('Guess a number between 1 and 10?');

while (attemptsRemaining > 0 && !guessedCorrectly) {
  let guess = prompt('Guess a number between 1 and 10?');
  console.log(guess);
  let guessNumber = Number(guess);

  if (guessNumber === correctAnswer) {
    // the guess was correct
    guessedCorrectly = true;
    alert('Congratulations! You guessed the correct number.');
    score++;
    console.log(score);
  } else if (guessNumber > correctAnswer) {
    // the guess was too high
    attemptsRemaining--;
    alert('Too high! You have ' + attemptsRemaining + ' attempts remaining.');
  } else {
    // the guess was too low
    attemptsRemaining--;
    alert('Too low! You have ' + attemptsRemaining + ' attempts remaining.');
  }
}

if (!guessedCorrectly) {
  alert('Sorry, you did not guess the correct number. The correct answer was ' + correctAnswer + '.');
  score--;
  console.log(score);
}


let correctColorAnswer = ['purple', 'green', 'blue'];
console.log('Guess one of my favorite colors?');
let colorAttemptsRemaining = 6;
let guessedColorCorrectly = false;

while (colorAttemptsRemaining > 0 && !guessedColorCorrectly) {
  let guessColor = prompt('Guess one of my favorite colors? Red, blue, green, yellow, purple, pink, white or black?');
  console.log(guessColor);
  let isCorrect = false;
  for (let i = 0; i < correctColorAnswer.length; i++) {
    if (guessColor.toLowerCase() === correctColorAnswer[i]) {
      isCorrect = true;
      break;
    }
  }

  if (isCorrect) {
    // the guess was correct
    guessedColorCorrectly = true;
    alert('Congratulations! You guessed a correct color!');
    score++;
    console.log(score);
  } else {
    // the guess was not right
    colorAttemptsRemaining--;
    alert('Nope! You have ' + colorAttemptsRemaining + ' attempts remaining.');
  }
}

if (!guessedColorCorrectly) {
  alert('Sorry, you did not guess the correct color. The correct answer was ' + correctColorAnswer + '.');
  score--;
  console.log(score);
}

welcome();
cat();
gamer();
juggle();
music();



//final message to named user at end
console.log('YOUR SCORE IS: ' + score);
let theMessage = 'Thanks for playing ' + userName + ' your score is ' + score + '.' + ' Enough of that, let\'s go to my page!';
alert(theMessage);




