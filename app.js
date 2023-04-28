'use strict';

let userName = prompt('What is your name?');
function askName() {
  let theirName = 'Welcome to my site ' + userName + ' but before we go there, how about we play a guessing game!';
  console.log(userName);
  alert(theirName);
}

function myCats() {
  let catQuestion = prompt('Do I have cats? Yes/No?');
  let correctCat = 'That is correct!';
  let wrongCat = 'Nope, I have two cats!';
  if (catQuestion.toLowerCase() === 'yes' || catQuestion.toLowerCase() === 'y'){
    console.log(catQuestion);
    alert(correctCat);
  }else if (catQuestion.toLowerCase() === 'no' || catQuestion.toLowerCase() === 'n'){
    console.log(catQuestion);
    alert(wrongCat);
  }
}

function gamer() {
  let gamerQuestion = prompt('Am I a gamer? Yes/No?');
  let correctGamer = 'That is correct!';
  let wrongGamer = 'Nope, tabletop, video games, I play them all!';
  if (gamerQuestion.toLowerCase() === 'yes' || gamerQuestion.toLowerCase() === 'y'){
    console.log(gamerQuestion);
    alert(correctGamer);
  }else if (gamerQuestion.toLowerCase() === 'no' || gamerQuestion.toLowerCase() === 'n'){
    console.log(gamerQuestion);
    alert(wrongGamer);
  }
}

function juggler () {
  let juggleQuestion = prompt('Can I juggle? Yes/No?');
  let correctJuggle = "No, I can't do everything sheesh!";
  let wrongJuggle = 'Correct, no knife tossing for me.';
  if (juggleQuestion.toLowerCase() === 'yes' || juggleQuestion.toLowerCase() === 'y'){
    console.log(juggleQuestion);
    alert(correctJuggle);
  }else if (juggleQuestion.toLowerCase() === 'no' || juggleQuestion.toLowerCase() === 'n'){
    console.log(juggleQuestion);
    alert(wrongJuggle);
  }
}

function musicMaker () {
  let musicQuestion = prompt('Do I like to make music? Yes/No?');
  let correctMusic = 'Yes, mostly electronic/ambient music';
  let wrongMusic = 'Nope. I do actually.';
  if (musicQuestion.toLowerCase() === 'yes' || musicQuestion.toLowerCase() === 'y'){
    console.log(musicQuestion);
    alert(correctMusic);
  }else if (musicQuestion.toLowerCase() === 'no' || musicQuestion.toLowerCase() === 'n'){
    console.log(musicQuestion);
    alert(wrongMusic);
  }
}

function cook () {
  let cookQuestion = prompt('Do I like to cook? Yes/No?');
  let correctCook = 'Nope. But I do try!';
  let wrongCook = 'Correct, maybe my lazy developer mindset is affecting other areas...';
  if (cookQuestion.toLowerCase() === 'yes' || cookQuestion.toLowerCase() === 'y'){
    console.log(cookQuestion);
    alert(correctCook);
  }else if (cookQuestion.toLowerCase() === 'no' || cookQuestion.toLowerCase() === 'n'){
    console.log(cookQuestion);
    alert(wrongCook);
  }
}

function finalMessage() {
  let theMessage = 'Thanks ' + userName + " enough of that, let's go to my page!";
  alert(theMessage);
}

askName();
myCats();
gamer();
juggler();
musicMaker();
cook();
finalMessage();


//final message to named user at end
