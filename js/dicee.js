console.log("js loaded")

var dc = 6;
var p1Num = p1rGen(dc);
var p2Num = p2rGen(dc);

winWin(p1Num, p2Num);

function p1rGen(dc) {
    var pr1gen = Math.floor(Math.random() * Math.floor(dc)) + 1;
    console.log("Player1 dice: "+pr1gen);
    document.querySelectorAll("img")[0].src="images/dice"+pr1gen+".png";
    return pr1gen;     
}

function p2rGen(dc) {
    var pr2gen = Math.floor(Math.random() * Math.floor(dc)) + 1;
    console.log("Player2 dice: "+pr2gen);
    document.querySelectorAll("img")[1].src="images/dice"+pr2gen+".png";
    return pr2gen; 
}

function winWin(p1Num, p2Num){
    if(p1Num > p2Num){
        console.log("Winner is player 1 " );
        document.querySelector("h1").innerHTML="<ion-icon name='flag'></ion-icon> Player 1 Wins!";
        // "<ion-icon name='flag-outline'></ion-icon>Player 1 Wins!"
    }else if(p1Num == p2Num){
        console.log("Game is draw " );
        document.querySelector("h1").innerText="Draw! Try Again. ";
    }else{
        console.log("Winner is player 2 " );
        document.querySelector("h1").innerHTML="Player 2 Wins! <ion-icon name='flag'></ion-icon>";
    }
}