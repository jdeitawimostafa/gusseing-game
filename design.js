'use strict';

alert('this is a yes or no questions , so you can answeer with yes or y , no or n');

let userName = prompt('what is your name ?');
userName = userName.toLowerCase();
//console.log('welcome' + userName);
alert( 'welcome'+ userName);


let height = prompt('do you think i am short ?');
height = height.toLowerCase();
//console.log(height);
if(height === 'yes' || height === 'y'){
  alert('i am not short dude');
}
else{
  alert('you answered the right');
}

let weight = prompt('do you think i am fat?');
weight = weight.toLowerCase();
//console.log(weight);
if(weight === 'yes' || weight === 'y'){
  alert('my weight is 60kg!!');
}
else{
  alert('i wish get some kg from you');
}

let intelligencelevel = prompt('do you think i am smart ?');
intelligencelevel = intelligencelevel.toLowerCase();
// console.log(intelligencelevel);
if(intelligencelevel === 'yes' || intelligencelevel === 'y'){
  alert('i think so :p');
}
else{
  alert('you made me sad');
}

let color = prompt('do you think i am black ?');
color = color.toLowerCase();
//console.log(color);
if(color === 'yes' || color ==='y'){
  alert('wrong , but i love people with black skin');
}
else{
  alert('i have to get a little of tan');
}

let cooking = prompt('do you think i love chicken ?');
cooking = cooking.toLowerCase();
//console.log(cooking);
if( cooking === 'yes' || cooking === 'y'){
  alert('it is delecious');
}
else{
  alert('i think you have to try it grilled ');
}

alert('welcome' + userName);
//console.log('welcome' + userName);
