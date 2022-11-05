const xoBox = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
let player = "x"
let computer = "o"
let mikum = 0
/*
function chooseX(){
    let player = "x"
    let computer = "o" 
}

function chooseO(){
    let player = "o"
    let computer = "x"   
} */

function endGame(){
    document.getElementById("ttt").innerHTML +=""  
    xoBox = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
    for (const i in xoBox) {
        document.getElementById(`box${i+1}`).innerHTML = ""
    }
}

function mecomputer(){ 
    do {mikum = Math.floor(Math.random() * 9) }
    while (xoBox[mikum] !== undefined)
    
    if (xoBox[mikum] === undefined){
       document.getElementById(`box${mikum+1}`).innerHTML = computer
       xoBox[mikum] = computer
    }
        if(
        xoBox[0] === xoBox[1]  &&  xoBox[0] === xoBox[2] && xoBox[0] === computer||
        xoBox[3] === xoBox[4]  &&  xoBox[3] === xoBox[5] && xoBox[3] === computer ||
        xoBox[6] === xoBox[7]  &&  xoBox[6] === xoBox[8] && xoBox[6] === computer||
        xoBox[0] === xoBox[3]  &&  xoBox[0] === xoBox[6] && xoBox[0] === computer||
        xoBox[1] === xoBox[4]  &&  xoBox[1] === xoBox[7] && xoBox[1] === computer||
        xoBox[2] === xoBox[5]  &&  xoBox[2] === xoBox[8] && xoBox[2] === computer||
        xoBox[6] === xoBox[4]  &&  xoBox[6] === xoBox[2] && xoBox[6] === computer||
        xoBox[0] === xoBox[4]  &&  xoBox[0] === xoBox[8] && xoBox[0] === computer){
            document.getElementById("ttt").innerHTML += "computer win"
        } 
    
    
}

function meplayer(){
    if(
        xoBox[0] === xoBox[1]  &&  xoBox[0] === xoBox[2] && xoBox[0] === player||
        xoBox[3] === xoBox[4]  &&  xoBox[3] === xoBox[5] && xoBox[3] === player ||
        xoBox[6] === xoBox[7]  &&  xoBox[6] === xoBox[8] && xoBox[6] === player||
        xoBox[0] === xoBox[3]  &&  xoBox[0] === xoBox[6] && xoBox[0] === player||
        xoBox[1] === xoBox[4]  &&  xoBox[1] === xoBox[7] && xoBox[1] === player||
        xoBox[2] === xoBox[5]  &&  xoBox[2] === xoBox[8] && xoBox[2] === player||
        xoBox[6] === xoBox[4]  &&  xoBox[6] === xoBox[2] && xoBox[6] === player||
        xoBox[0] === xoBox[4]  &&  xoBox[0] === xoBox[8] && xoBox[0] === player){
            document.getElementById("ttt").innerHTML += "you win"
        } 
    else {return mecomputer()}
}


function player1(){
    if (xoBox[0] === undefined){
        xoBox[0] = player
        document.getElementById("box1").innerHTML = player
    return  meplayer();
    } 
    return;
}


function player2(){
    if (xoBox[1] == undefined){
        xoBox[1] = player
        document.getElementById("box2").innerHTML = player
        meplayer();
    }
    return;
}

function player3(){
    if (xoBox[2] == undefined){
        xoBox[2] = player
        document.getElementById("box3").innerHTML = player
        meplayer();
    }
    return;
}

function player4(){
    if (xoBox[3] == undefined){
        xoBox[3] = player
        document.getElementById("box4").innerHTML = player
        meplayer();
    }
    return;
}

function player5(){
    if (xoBox[4] == undefined){
        xoBox[4] = player
        document.getElementById("box5").innerHTML = player
        meplayer();
    }
    return;
}

function player6(){
    if (xoBox[5] == undefined){
        xoBox[5] = player
        document.getElementById("box6").innerHTML = player
        meplayer();
    }
    return ;
}

function player7(){
    if (xoBox[6] == undefined){
        xoBox[6] = player
        document.getElementById("box7").innerHTML = player
        meplayer();
    }
    return;
}

function player8(){
    if (xoBox[7] == undefined){
        xoBox[7] = player
        document.getElementById("box8").innerHTML = player
        meplayer()
    }
}

function player9(){
    if (xoBox[8] == undefined){
        xoBox[8] = player
        document.getElementById("box9").innerHTML = player
        meplayer()
    }
}
