var dc = 6;
var p1Num = p1rGen(dc);
var p2Num = p2rGen(dc);

winWin(p1Num, p2Num);

function p1rGen(dc) {
    var pr1gen = Math.floor(Math.random() * Math.floor(dc)) + 1;
    console.log("Player1 dice: "+pr1gen);
    var pr1genhtml = "images/dice"+pr1gen+".png"
    console.log(pr1genhtml);
    $("#p1Img").attr("src", pr1genhtml);
    return pr1gen;     
}

function p2rGen(dc) {
    var pr2gen = Math.floor(Math.random() * Math.floor(dc)) + 1;
    console.log("Player2 dice: "+pr2gen);
    var pr2genhtml = "images/dice"+pr2gen+".png"
    console.log(pr2genhtml);
    $("#p2Img").attr("src", pr2genhtml);
    return pr2gen; 
}

function winWin(p1Num, p2Num){
    if(p1Num > p2Num){
        console.log("Winner is player 1 " );
        $("h1").html("<ion-icon name='flag'></ion-icon> Player 1 Wins!");
    }else if(p1Num == p2Num){
        console.log("Game is draw " );
        $("h1").text("Draw! Try Again. ");
    }else{
        console.log("Winner is player 2 " );
        $("h1").html("Player 2 Wins! <ion-icon name='flag'></ion-icon>");
    }
}