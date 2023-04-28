'use strict';

function askName() {
  let userName = prompt('What is your name?');
  let theirName = 'Welcome ' + userName + ' to my site!';
  console.log(userName);
  alert(theirName);
}

function myCats() {
  let catQuestion = prompt('Do I have cats? Yes/No?');
  let Yes.toLowerCase = true;
  let No.toLowercase = false;
  let correctCat = 'That is correct!';
  let wrongCat = 'Nope, I have two cats!';

  if (catQuestion.toLowerCase === catYes){
    console.log(catQuestion);
    alert(correctCat);
  }else if (catQuestion.toLowerCase === catNo) {
    console.log(catQuestion);
    alert(wrongCat);
  }
}



askName();
myCats();
