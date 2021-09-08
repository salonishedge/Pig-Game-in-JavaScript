'use strict';
let player1_sum = 0;
let player2_sum = 0;
let first = true;

function rollDice() {
  let num = Math.floor(Math.random() * 6) + 1;
  console.log(num);
  document.querySelector('.dice').src = 'dice-' + num + '.png';
  if (num == 1) {
    if (first == true) {
      first = false;
      player1_sum = 0;
      document.getElementById('current--0').innerHTML = 0;
      document.getElementById('om').classList.add('player--active');
      document.getElementById('sal').classList.remove('player--active');
    } else {
      first = true;
      player2_sum = 0;
      document.getElementById('current--1').innerHTML = 0;
      document.getElementById('sal').classList.add('player--active');
      document.getElementById('om').classList.remove('player--active');
    }
  } else {
    if (first == true) {
      player1_sum = player1_sum + num;
      document.getElementById('current--0').innerHTML = player1_sum;
    }
    if (first == false) {
      player2_sum = player2_sum + num;
      document.getElementById('current--1').innerHTML = player2_sum;
    }
  }
}

function hold() {
  if (first == true) {
    first = false;
    console.log(first);
    let p1 = document.getElementById('current--0').innerHTML;
    let p12 = document.getElementById('score--0').innerHTML;
    document.getElementById('score--0').innerHTML = Number(p1) + Number(p12);
    document.getElementById('current--0').innerHTML = 0;
    player1_sum = 0;
    document.getElementById('om').classList.add('player--active');
    document.getElementById('sal').classList.remove('player--active');
  } else {
    first = true;
    console.log(first);
    let p2 = document.getElementById('current--1').innerHTML;
    let p22 = document.getElementById('score--1').innerHTML;
    document.getElementById('score--1').innerHTML = Number(p2) + Number(p22);
    document.getElementById('current--1').innerHTML = 0;
    player2_sum = 0;
    document.getElementById('sal').classList.add('player--active');
    document.getElementById('om').classList.remove('player--active');
  }
}

function newGame() {
  location.reload();
}
