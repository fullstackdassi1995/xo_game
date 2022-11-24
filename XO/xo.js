
const xoBox = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
const game_data = {player: "x" , computer : "o"}


function chooseXO(x , o){
game_data.player = x
game_data.computer = o 
}
 
initGame()

function initGame(){
    for(let i in xoBox){
        xoBox[i] = undefined    }
   chooseXO("x" , "o")
    let mikum = 0
    document.getElementById("ttt").innerHTML = ""  
    
    for (let i = 1 ; i <= 9 ; i++) {
        document.getElementById(`box${i}`).innerHTML = ""
    }
}

function endGame() {
    initGame()
    for (let i = 1 ; i <= 9 ; i++){
    document.getElementById(`box${i}`).disabled = false
    }
    document.getElementById(`play`).disabled = false
}


function check_winn(shape){
    if(
        xoBox[0] === xoBox[1]  &&  xoBox[0] === xoBox[2] && xoBox[0] === shape||
        xoBox[3] === xoBox[4]  &&  xoBox[3] === xoBox[5] && xoBox[3] === shape||
        xoBox[6] === xoBox[7]  &&  xoBox[6] === xoBox[8] && xoBox[6] === shape||
        xoBox[0] === xoBox[3]  &&  xoBox[0] === xoBox[6] && xoBox[0] === shape||
        xoBox[1] === xoBox[4]  &&  xoBox[1] === xoBox[7] && xoBox[1] === shape||
        xoBox[2] === xoBox[5]  &&  xoBox[2] === xoBox[8] && xoBox[2] === shape||
        xoBox[6] === xoBox[4]  &&  xoBox[6] === xoBox[2] && xoBox[6] === shape||
        xoBox[0] === xoBox[4]  &&  xoBox[0] === xoBox[8] && xoBox[0] === shape){
            for (let i = 1 ; i <= 9 ; i++){
                document.getElementById(`box${i}`).disabled = true
                }
                return true
        } 
        eqwel()
        return false 

}

function eqwel(){

    for (let i in xoBox){
        if (xoBox[i] !== undefined && xoBox[i] !== "x" && xoBox[i] !== "o"){
            document.getElementById("ttt").innerHTML = "no one win";
            for (let i = 1 ; i <= 9 ; i++){
                  document.getElementById(`box${i}`).disabled = true
            }
            document.getElementById(`play`).disabled = false
        } 
        else {mecomputer()}
    }  

}


function mecomputer(){ 
    
    do {mikum = Math.floor(Math.random() * 9)}
    while (xoBox[mikum] !== undefined)
    if (xoBox[mikum] === undefined){
       document.getElementById(`box${mikum+1}`).innerHTML = game_data.computer
       xoBox[mikum] = game_data.computer
    }
    
        if(check_winn(game_data.computer)){
            document.getElementById("ttt").innerHTML += "computer win";  
       }   
}

function meplayer(){
    
    if(check_winn(game_data.player)){
        return    document.getElementById("ttt").innerHTML += "you win";
    } 

    
}


function playerClick(x){
    if (xoBox[x-1] === undefined){
        xoBox[x-1] = game_data.player
        document.getElementById(`box${x}`).innerHTML = game_data.player
    return  meplayer();
    } 
    return;
}
