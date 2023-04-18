
function rollDice(){

//Generating a round number
var randNumber1 = Math.random();

var randNumber2 = Math.random();


// To create a whole number of range 1-6
var wholeRandNumber1 = Math.ceil(randNumber1 * 6);
var wholeRandNumber2 = Math.ceil(randNumber2 * 6);

//assign the image sources
 const images=[" ","images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]

 //fetching and setting the image src of players
document.getElementById("player1").setAttribute("src", images[wholeRandNumber1]);

document.getElementById("player2").setAttribute("src", images[wholeRandNumber2]);


if(wholeRandNumber1 > wholeRandNumber2){
    document.querySelector("h1").innerText="🚩 Player 1 Wins!"
}
else if(wholeRandNumber1 < wholeRandNumber2){
    document.querySelector("h1").innerText="🚩 Player 2 Wins!"

}
else{
    document.querySelector("h1").innerText="Draw!!!"

}

}