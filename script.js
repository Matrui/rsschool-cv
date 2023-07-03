"use strict"
let firstPlayerNumber = 0;
let secondPlayerNumber = 0;
let timer = 100;


function diceRoll() {
		firstPlayerNumber = Math.floor((Math.random() * 6) + 1);
        secondPlayerNumber = Math.floor((Math.random() * 6) + 1);
        document.getElementById("diceImage1");
        diceImage1.src = "images/svg/dice" + firstPlayerNumber + ".svg";
        diceImage1.alt = firstPlayerNumber;

        document.getElementById("diceImage2");
        diceImage2.src = "images/svg/dice" + secondPlayerNumber + ".svg";
        diceImage2.alt = secondPlayerNumber;

        if(firstPlayerNumber > secondPlayerNumber){
            document.getElementById("diceFirstPlayer");
            diceFirstPlayer.style.backgroundColor = "aqua";
            document.getElementById("diceSecondPlayer");
            diceSecondPlayer.style.backgroundColor = "rgba(51, 58, 68, 0.234)";
        }else if(firstPlayerNumber < secondPlayerNumber){
            document.getElementById("diceFirstPlayer");
            diceFirstPlayer.style.backgroundColor = "rgba(51, 58, 68, 0.234)";
            document.getElementById("diceSecondPlayer");
            diceSecondPlayer.style.backgroundColor = "aqua";
        }else{
            document.getElementById("diceFirstPlayer");
            diceFirstPlayer.style.backgroundColor = "aqua";
            document.getElementById("diceSecondPlayer");
            diceSecondPlayer.style.backgroundColor = "aqua";
        }
}

document.getElementById("rollButton").addEventListener("click", diceRoll);

// function diceShaker(){
//         timer = timer + 100;
//         diceRoll();
//         if(timer <= 7000){
//         setTimeout(diceRoll, timer);
//         }
// }
