var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');

var button1 = document.getElementById('button1');
var displayScore = document.getElementById('displayScore');
var pay = document.getElementById('pay');
var finalMessage = document.getElementById('finalMessage');
var random1 = '';
var random2 = '';
var random2 = '';

var score = 0;
displayScore.innerHTML='Score: ' + score;

var coins = 500;
pay.innerHTML = 'Coins: ' + coins;

function oneFunction(){
random1 = Math.floor((Math.random() * 7) + 1);
one.innerHTML= random1;
}

function twoFunction(){
random2 = Math.floor((Math.random() * 7) + 1);
two.innerHTML= random2;
}

function threeFunction(){
random3 = Math.floor((Math.random() * 7) + 1);
three.innerHTML= random3;
}

function scoreFunction(){
  if(random1 == random2 || random2 == random3 ){
    score = score + 20;
    coins += 60;
    displayScore.innerHTML='Score:' + score;
  }if(random1 == random2 == random3){
    score = score + 100;
    coins = coins + 1000;
  }
}

function payFunction(){
  coins = coins - 50;
  pay.innerHTML ='Coins: ' + coins;
  if(coins >= 1000){
    alert('CONGRATULATIONS YOU WIN!!!');
    document.location.reload();
  }else if(coins < 0){
    alert('YOU LOSE!');
    document.location.reload();
  }
}

function runFunction(){
  oneFunction();
  twoFunction();
  threeFunction();
 scoreFunction();
 payFunction();
}

button1.addEventListener('click', runFunction ,false);
//^I made a more effiecient way to do this in my index file
//if statement that checks to see if random 1 is equal to whatever, then a certain amount of points is given
