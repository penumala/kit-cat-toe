console.log("Script Connected");
const newGame = document.querySelector('.New');
const reset = document.querySelector('.Reset');
const boxs = document.querySelectorAll('.cell');
const playerDisplay = document.querySelector('#player');
const manageClicks= [];
let winner = false;
const winCombos = [
    [0,1,2], // first parent array number, after go child array index.
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8], 
    [2,4,6], 
    
];
let playerX = [];
let playerO = [];
let filledSquares = [0];
console.log(winCombos.length);
let gameStarted = true;
const player1TurnMessage = " Player1's turn"
const player2TurnMessage = " Player2's turn"
const enableListeners = () => Array.from(document.querySelectorAll('.cell'));

reset.addEventListener('click',(event)=>{     
event.preventDefault()
boxs.innerHTML="";
   
})

    let counter = 0;
    boxs.forEach((box,index) => {      
    
    box.addEventListener('click',(e)=>{ 
        if (manageClicks.includes(index)){
         
     }else{
        if(counter %2 == 0 ){
            box.innerHTML = 'x'
            manageClicks.push(index);
    
            playerX.push(index)
            console.log(playerX)
           console.log(player1TurnMessage);
         }else{
            box.innerHTML = 'o'
            manageClicks.push(index);
            playerO.push(index)
            console.log("playero" + playerO)
            console.log(player2TurnMessage);
         }
         winCombo();
         counter++;
     }
    
    })

})
//==========================Horizontal===============
   function winCombo(){
    if (playerX.includes(winCombos[0][0])&&playerX.includes(winCombos[0][1])&&playerX.includes(winCombos[0][2])){
        console.log("pXwinner");

    }else if (playerO.includes(winCombos[0][0])&&playerO.includes(winCombos[0][1])&&playerO.includes(winCombos[0][2])){
        console.log("pOwinner");

    } else if (playerX.includes(winCombos[1][0])&&playerX.includes(winCombos[1][1])&&playerX.includes(winCombos[1][2])){
        console.log("pXwinner");

    }else if (playerO.includes(winCombos[1][0])&&playerO.includes(winCombos[1][1])&&playerO.includes(winCombos[1][2])){
        console.log("pOwinner");

    } else if (playerX.includes(winCombos[2][0])&&playerX.includes(winCombos[2][1])&&playerX.includes(winCombos[2][2])){
        console.log("pXwinner");

    }else if (playerO.includes(winCombos[2][0])&&playerO.includes(winCombos[2][1])&&playerO.includes(winCombos[2][2])){
        console.log("pOwinner");
        //===========================Vertical========
    } else if (playerX.includes(winCombos[3][0])&&playerX.includes(winCombos[3][1])&&playerX.includes(winCombos[3][2])){
        console.log("pxwinner");

    } else if (playerO.includes(winCombos[3][0])&&playerO.includes(winCombos[3][1])&&playerO.includes(winCombos[3][2])){
        console.log("powinner"); 

    } else if (playerX.includes(winCombos[4][0])&&playerX.includes(winCombos[4][1])&&playerX.includes(winCombos[4][2])){
        console.log("pxwinner");

    } else if (playerO.includes(winCombos[4][0])&&playerO.includes(winCombos[4][1])&&playerO.includes(winCombos[4][2])){
        console.log("powinner"); 
    } else if (playerX.includes(winCombos[5][0])&&playerX.includes(winCombos[5][1])&&playerX.includes(winCombos[5][2])){
        console.log("pxwinner");

    } else if (playerO.includes(winCombos[5][0])&&playerO.includes(winCombos[5][1])&&playerO.includes(winCombos[5][2])){
        console.log("powinner"); 
        //===============================Diagonal========

    } else if (playerX.includes(winCombos[6][0])&&playerX.includes(winCombos[6][1])&&playerX.includes(winCombos[6][2])){
        console.log("pxwinner");

    } else if (playerO.includes(winCombos[6][0])&&playerO.includes(winCombos[6][1])&&playerO.includes(winCombos[6][2])){
        console.log("powinner"); 
    } else if (playerX.includes(winCombos[7][0])&&playerX.includes(winCombos[7][1])&&playerX.includes(winCombos[7][2])){
        console.log("pxwinner");

    } else if (playerO.includes(winCombos[7][0])&&playerO.includes(winCombos[7][1])&&playerO.includes(winCombos[7][2])){
        console.log("powinner"); 


    }

    //console.log(winCombos[5][0],winCombos[5][1],winCombos[5][2]);
/* if (playerX.includes(winCombos[0][0])&&playerX.includes(winCombos[3][0])&&playerX.includes(winCombos[6][0])){
    console.log("pxwinner");
} */





function draw(){
}

function resetGame(){

}
   }