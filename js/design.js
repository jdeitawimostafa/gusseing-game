'use strict';
let userPoint = 0 ;
let userName = prompt('what is your name ?');
userName = userName.toLowerCase();
//console.log('welcome' + userName);
alert( 'welcome'+ userName);

alert('this is a yes or no questions , so you can answeer with yes or y , no or n');


let height = prompt('do you think i am short ?');
height = height.toLowerCase();
//console.log(height);
while(height !== 'yes' && height !== 'y' && height !== 'no' && height !== 'n'){
  height = prompt ('do you think i am short ? ');
}
if(height === 'yes' || height === 'y'){
  alert('i am not short dude');
} else{
  alert('you answered the right , i am 175 cm ');
  userPoint = userPoint+1;
}

let weight = prompt('do you think i am fat?');
weight = weight.toLowerCase();
//console.log(weight);
while(weight !== 'yes' && weight !== 'y' && weight !== 'no' && weight !== 'n'){
  weight = prompt ('do you think i am fat ? ');
}
if(weight === 'yes' || weight === 'y'){
  alert('my weight is 60kg , i am not fat !!');
}
else{
  alert('it is a correct answer , i wish get some kg from you');
  userPoint = userPoint+1;
}

let intelligencelevel = prompt('do you think i am smart ?');
intelligencelevel = intelligencelevel.toLowerCase();
// console.log(intelligencelevel);
while(intelligencelevel !== 'yes' && intelligencelevel !== 'y' && intelligencelevel !== 'no' && intelligencelevel !== 'n'){
  intelligencelevel = prompt(' do you think i am smart ? ');
}
if(intelligencelevel === 'yes' || intelligencelevel === 'y'){
  alert('i think so :p');
  userPoint = userPoint+1;
}
else{
  alert('you made me sad');
}

let color = prompt('do you think i am black ?');
color = color.toLowerCase();
//console.log(color);
while(color !== 'yes' && color !== 'y' && color !== 'no' && color !== 'n'){
  color = prompt ('do you think i am black ? ');
}
if(color === 'yes' || color ==='y'){
  alert('wrong , but i love people with black skin');
}
else{
  alert('it is a correct answer , i have to get a little of tan');
  userPoint = userPoint+1;
}

let cooking = prompt('do you think i love chicken ?');
cooking = cooking.toLowerCase();
//console.log(cooking);
while(cooking !== 'yes' && cooking !== 'y' && cooking !== 'no' && cooking !== 'n'){
  cooking = prompt ('do you think i love chicken ? ');
}
if( cooking === 'yes' || cooking === 'y'){
  alert('it is a correct answer , it is delecious');
  userPoint = userPoint+1;
}
else{
  alert('incorrect , i think you have to try it grilled ');
}

alert('welcome' + userName);
alert(userPoint);
//console.log('welcome' + userName);

