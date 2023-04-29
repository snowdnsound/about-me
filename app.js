'use strict';

let userName = prompt('What is your name?');
let score = 0;
let theirName = 'Welcome to my site ' + userName + ' but before we go there, how about we play a guessing game!';
console.log(userName);
alert(theirName);


let catQuestion = prompt('Do I have cats? Yes/No?');
let correctCat = 'That is correct!';
let wrongCat = 'Nope, I have two cats!';
if (catQuestion.toLowerCase() === 'yes' || catQuestion.toLowerCase() === 'y') {
  console.log(catQuestion);
  alert(correctCat);
  score++;
} else if (catQuestion.toLowerCase() === 'no' || catQuestion.toLowerCase() === 'n') {
  console.log(catQuestion);
  alert(wrongCat);
  score--;
}


let gamerQuestion = prompt('Am I a gamer? Yes/No?');
let correctGamer = 'That is correct!';
let wrongGamer = 'Nope, tabletop, video games, I play them all!';
if (gamerQuestion.toLowerCase() === 'yes' || gamerQuestion.toLowerCase() === 'y') {
  console.log(gamerQuestion);
  alert(correctGamer);
  score++;
} else if (gamerQuestion.toLowerCase() === 'no' || gamerQuestion.toLowerCase() === 'n') {
  console.log(gamerQuestion);
  alert(wrongGamer);
  score--;
}



let juggleQuestion = prompt('Can I juggle? Yes/No?');
let correctJuggle = 'No, I can\'t do everything sheesh!';
let wrongJuggle = 'Correct, no knife tossing for me.';
if (juggleQuestion.toLowerCase() === 'yes' || juggleQuestion.toLowerCase() === 'y') {
  console.log(juggleQuestion);
  alert(correctJuggle);
  score++;
} else if (juggleQuestion.toLowerCase() === 'no' || juggleQuestion.toLowerCase() === 'n') {
  console.log(juggleQuestion);
  alert(wrongJuggle);
  score--;
}



let musicQuestion = prompt('Do I like to make music? Yes/No?');
let correctMusic = 'Yes, mostly electronic/ambient music';
let wrongMusic = 'Nope. I do actually.';
if (musicQuestion.toLowerCase() === 'yes' || musicQuestion.toLowerCase() === 'y') {
  console.log(musicQuestion);
  alert(correctMusic);
  score++;
} else if (musicQuestion.toLowerCase() === 'no' || musicQuestion.toLowerCase() === 'n') {
  console.log(musicQuestion);
  alert(wrongMusic);
  score--;
}



let cookQuestion = prompt('Do I like to cook? Yes/No?');
let correctCook = 'Nope. But I do try!';
let wrongCook = 'Correct, maybe my lazy developer mindset is affecting other areas...';
if (cookQuestion.toLowerCase() === 'yes' || cookQuestion.toLowerCase() === 'y') {
  console.log(cookQuestion);
  alert(correctCook);
  score++;
} else if (cookQuestion.toLowerCase() === 'no' || cookQuestion.toLowerCase() === 'n') {
  console.log(cookQuestion);
  alert(wrongCook);
  score--;
}

let correctAnswer = 6;
let attemptsRemaining = 4;
let guessedCorrectly = false;

while (attemptsRemaining > 0 && !guessedCorrectly) {
  let guess = prompt('Guess a number between 1 and 10:');
  let parsedGuess = Number(guess);

  if (guess !== null && guess !== '' && parsedGuess === parsedGuess) {
    if (parsedGuess === correctAnswer) {
      guessedCorrectly = true;
      alert('Congratulations! You guessed the correct number.');
    } else if (parsedGuess > correctAnswer) {
      attemptsRemaining--;
      alert('Too high! You have ' + attemptsRemaining + ' attempts remaining.');
    } else if (parsedGuess < correctAnswer) {
      attemptsRemaining--;
      alert('Too low! You have ' + attemptsRemaining + ' attempts remaining.');
    }
  } else {
    alert('Invalid input! Please enter a valid number.');
  }
}

if (!guessedCorrectly) {
  alert('Sorry, you did not guess the correct number. The correct answer was ' + correctAnswer + '.');
}

if (!guessedCorrectly) {
  alert('Sorry, you did not guess the correct number. The correct answer was ' + correctAnswer + '.');
}



console.log('YOUR SCORE IS: ', score);
let theMessage = 'Thanks for playing ' + userName + ' your score is ' + score + '.' + ' Enough of that, let\'s go to my page!';
alert(theMessage);









//final message to named user at end
