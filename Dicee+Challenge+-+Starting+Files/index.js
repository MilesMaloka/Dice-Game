

//Player 1
var randomNumber1 = Math.floor(Math.random()*6)+1;
if(randomNumber1===1){
      document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
if(randomNumber1===2){
      document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
if(randomNumber1===3){
      document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
if(randomNumber1===4){
      document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
if(randomNumber1===5){
      document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
if(randomNumber1===6){
      document.querySelector(".img1").setAttribute("src","images/dice6.png");
}

// Player 2
var randomNumber2 = Math.floor(Math.random()*6)+1;
if(randomNumber2===1){
      document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
if(randomNumber2===2){
      document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
if(randomNumber2===3){
      document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
if(randomNumber2===4){
      document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
if(randomNumber2===5){
      document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
if(randomNumber2===6){
      document.querySelector(".img2").setAttribute("src","images/dice6.png");
}
//Decision Making
if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").innerHTML=" 🚩 Player 1 Wins ";  
}
else if(randomNumber1<randomNumber2){
    document.querySelector(".container h1").innerHTML=" Player 2 Wins 🚩 ";  
}
else if(randomNumber1===randomNumber2){
    document.querySelector(".container h1").innerHTML=" Draw";  
}

function refreshPage() {
      location.reload();
}