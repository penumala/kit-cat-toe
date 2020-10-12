console.log("Script Connected");
const newGame = document.querySelector('.New');
const reset = document.querySelector('button');
const boxs = document.querySelectorAll('.cell');
const inputs = document.querySelectorAll('#game-grid');
const playerDisplay = document.querySelector('.player');
let gameIsLive = true;
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
//console.log(winCombos.length);
let gameStarted = true;
const player1TurnMessage = " Player1's turn"
const player2TurnMessage = " Player2's turn"

const enableListeners = () => Array.from(document.querySelectorAll('.cell'));
const handleReset = (e) => {
    console.log(e);
}

reset.addEventListener('click', () => {     
inputs.forEach(input => input.value = '');
   
})
function myButton(){
    location.reload();
}
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
           {document.getElementById('player1').innerHTML = 'Player 2 Turn';
        }
         }else{
            box.innerHTML = 'o'
            manageClicks.push(index);
            playerO.push(index)
            console.log("playero" + playerO)
            console.log(player2TurnMessage);
            {document.getElementById('player1').innerHTML = 'Player 1 Turn';
        }
         }

         function myFunction() {
            document.getElementById("myForm").reset();
          }
         winCombo();
        
         counter++;
       
     }
    
    })

})
//==========================Horizontal===============
   function winCombo(){
    if (playerX.includes(winCombos[0][0])&&playerX.includes(winCombos[0][1])&&playerX.includes(winCombos[0][2])){
       
       alert("Player 1 Wins")
        myButton();
        {document.getElementById('player1').innerHTML = 'Player 1 Wins!';
        }
       
    

        /*
        {document.getElementById('player1').innerHTML = 'Player 1 Wins!';
        document.getElementById('player1').style.display = 'block';
        boxs = document.querySelectorAll('.cell');
        }*/

    }else if (playerO.includes(winCombos[0][0])&&playerO.includes(winCombos[0][1])&&playerO.includes(winCombos[0][2])){
       
        {document.getElementById('player1').innerHTML = 'Player 2 Wins!';
        }

    } else if (playerX.includes(winCombos[1][0])&&playerX.includes(winCombos[1][1])&&playerX.includes(winCombos[1][2])){
        {document.getElementById('player1').innerHTML = 'Player 1 Wins!';
    }
    }else if (playerO.includes(winCombos[1][0])&&playerO.includes(winCombos[1][1])&&playerO.includes(winCombos[1][2])){
        {document.getElementById('player1').innerHTML = 'Player 2 Wins!';
        }
    } else if (playerX.includes(winCombos[2][0])&&playerX.includes(winCombos[2][1])&&playerX.includes(winCombos[2][2])){
        {document.getElementById('player1').innerHTML = 'Player 1 Wins!';
    }

    }else if (playerO.includes(winCombos[2][0])&&playerO.includes(winCombos[2][1])&&playerO.includes(winCombos[2][2])){
        {document.getElementById('player1').innerHTML = 'Player 2 Wins!';
    }
        //===========================Vertical========
    } else if (playerX.includes(winCombos[3][0])&&playerX.includes(winCombos[3][1])&&playerX.includes(winCombos[3][2])){
        {document.getElementById('player1').innerHTML = 'Player 1 Wins!';
    }

    } else if (playerO.includes(winCombos[3][0])&&playerO.includes(winCombos[3][1])&&playerO.includes(winCombos[3][2])){
        {document.getElementById('player1').innerHTML = 'Player 2 Wins!';
    } 

    } else if (playerX.includes(winCombos[4][0])&&playerX.includes(winCombos[4][1])&&playerX.includes(winCombos[4][2])){
        {document.getElementById('player1').innerHTML = 'Player 1 Wins!';
    }

    } else if (playerO.includes(winCombos[4][0])&&playerO.includes(winCombos[4][1])&&playerO.includes(winCombos[4][2])){
        {document.getElementById('player1').innerHTML = 'Player 2 Wins!';
    }
    } else if (playerX.includes(winCombos[5][0])&&playerX.includes(winCombos[5][1])&&playerX.includes(winCombos[5][2])){
        {document.getElementById('player1').innerHTML = 'Player 1 Wins!';
    }

    } else if (playerO.includes(winCombos[5][0])&&playerO.includes(winCombos[5][1])&&playerO.includes(winCombos[5][2])){
        {document.getElementById('player1').innerHTML = 'Player 2 Wins!';
    }
        //===============================Diagonal========

    } else if (playerX.includes(winCombos[6][0])&&playerX.includes(winCombos[6][1])&&playerX.includes(winCombos[6][2])){
        {document.getElementById('player1').innerHTML = 'Player 1 Wins!';
    }

    } else if (playerO.includes(winCombos[6][0])&&playerO.includes(winCombos[6][1])&&playerO.includes(winCombos[6][2])){
        {document.getElementById('player1').innerHTML = 'Player 2 Wins!';
    }

    } else if (playerX.includes(winCombos[7][0])&&playerX.includes(winCombos[7][1])&&playerX.includes(winCombos[7][2])){
       
        {document.getElementById('player1').innerHTML = 'Player 1 Wins!';
    }

    } else if (playerO.includes(winCombos[7][0])&&playerO.includes(winCombos[7][1])&&playerO.includes(winCombos[7][2])){
        {document.getElementById('player1').innerHTML = 'Player 2 Wins!';
    }

    }


    

    


function draw(){

}

function resetGame(){
reset = document.querySelector('.game-buttons');
while(boxs.firstChild){
    boxs.removeChild(div.firstChild);
}
}
   }