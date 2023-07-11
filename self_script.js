
function play(){
    var player1 = parseInt(Math.floor(Math.random()*6),10)+1;
    var player2 = parseInt(Math.floor(Math.random()*6),10)+1;
    if(player1 === player2){
        document.getElementById("result").textContent = "There is a Draw"; 
    }
    else if (player1>player2){
        document.getElementById("result").textContent = "Player 1 Wins"; 
    }
    else{
        document.getElementById("result").textContent = "Player 2 Wins"; 
    }
    var img1 = document.querySelector(".p1 img");

    switch(player1){
        case 1:
            img1.setAttribute("src" , "images/dice1.png");
            break;
        case 2:
            img1.setAttribute("src" , "images/dice2.png");
            break;
        case 3:
            img1.setAttribute("src" , "images/dice3.png");
            break;
        case 4:
            img1.setAttribute("src" , "images/dice4.png");
            break;
        case 5:
            img1.setAttribute("src" , "images/dice5.png");
            break;
        case 6:
            img1.setAttribute("src" , "images/dice6.png");
            break;
        default:
            console.log("inside default");
    }

    var img2 = document.querySelector(".p2 img");
    console.log(img2);
    switch(player2){
        case 1:
            img2.setAttribute("src" , "images/dice1.png");
            break;
        case 2:
            img2.setAttribute("src" , "images/dice2.png");
            break;
        case 3:
            img2.setAttribute("src" , "images/dice3.png");
            console.log("in 3");
            break;
        case 4:
            img2.setAttribute("src" , "images/dice4.png");
            break;
        case 5:
            img2.setAttribute("src" , "images/dice5.png");
            break;
        case 6:
            img2.setAttribute("src" , "images/dice6.png");
            break;
    }
}