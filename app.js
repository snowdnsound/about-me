'use strict';

function askName() {
  let userName = prompt('What is your name?');
  let theirName = 'Welcome ' + userName + ' to my site!';
  console.log(userName);
  alert(theirName);
}

askName();
