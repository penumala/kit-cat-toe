console.log("Script Connected");
const newGame = document.querySelector('.New');
const reset = document.querySelector('button');
const boxs = document.querySelectorAll('.cell');
const inputs = document.querySelectorAll('#game-grid');
const playerDisplay = document.querySelector('.player');
const manageClicks= [];
let winner = false;
const winCombos = [
    [0,1,2], 
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



    function newButton(){
    document.getElementById('player1').innerHTML = 'Player X Go First!';

}

    function resetButton(){
    location.reload();
}
    let counter = 0;
    boxs.forEach((box,index) => {      
    
    box.addEventListener('click',(e)=>{ 
        if (manageClicks.includes(index)){
         
     }else{
        if(counter % 2 == 0 ){
            box.innerHTML = 'x'
            manageClicks.push(index);
            playerX.push(index)
           
           {document.getElementById('player1').innerHTML = 'Player O Turn';
        }
         }else{
            box.innerHTML = 'o'
            manageClicks.push(index);
            playerO.push(index)
            {document.getElementById('player1').innerHTML = 'Player X Turn';
        }
        }

         winCombo();
        
         counter++;
      
         if (counter === 9 ){
             if (winner){
             
             }else{
            console.log("Draw")
            document.getElementById('player1').innerHTML = "It's a Draw !";
           
             
            }
            }               
            }
        
         
    
    })

})

//==========================Horizontal===============
   function winCombo(){
    if (playerX.includes(winCombos[0][0])&&playerX.includes(winCombos[0][1])&&playerX.includes(winCombos[0][2])){
        winner = true
        {document.getElementById('player1').innerHTML = 'Player X Wins!';
        }  
        //resetButton();
    }else if (playerO.includes(winCombos[0][0])&&playerO.includes(winCombos[0][1])&&playerO.includes(winCombos[0][2])){
        winner = true
        {document.getElementById('player1').innerHTML = 'Player O Wins!';
        }
        

    } else if (playerX.includes(winCombos[1][0])&&playerX.includes(winCombos[1][1])&&playerX.includes(winCombos[1][2])){
        winner = true 
        {document.getElementById('player1').innerHTML = 'Player X wins!';
    }
    }else if (playerO.includes(winCombos[1][0])&&playerO.includes(winCombos[1][1])&&playerO.includes(winCombos[1][2])){
        winner = true  
        {document.getElementById('player1').innerHTML = 'Player O Wins!';
        }
    } else if (playerX.includes(winCombos[2][0])&&playerX.includes(winCombos[2][1])&&playerX.includes(winCombos[2][2])){
        winner = true 
       
        {document.getElementById('player1').innerHTML = 'Player X wins!';
    }

    }else if (playerO.includes(winCombos[2][0])&&playerO.includes(winCombos[2][1])&&playerO.includes(winCombos[2][2])){
        winner = true  
        {document.getElementById('player1').innerHTML = 'Player O Wins!';
    }
        //===========================Vertical========
    } else if (playerX.includes(winCombos[3][0])&&playerX.includes(winCombos[3][1])&&playerX.includes(winCombos[3][2])){
        winner = true
       
        {document.getElementById('player1').innerHTML = 'Player X wins!';
    }

    } else if (playerO.includes(winCombos[3][0])&&playerO.includes(winCombos[3][1])&&playerO.includes(winCombos[3][2])){
        winner = true
        {document.getElementById('player1').innerHTML = 'Player O Wins!';
    } 

    } else if (playerX.includes(winCombos[4][0])&&playerX.includes(winCombos[4][1])&&playerX.includes(winCombos[4][2])){
        winner = true
        //resetButton();
        {document.getElementById('player1').innerHTML = 'Player X wins!';
    }

    } else if (playerO.includes(winCombos[4][0])&&playerO.includes(winCombos[4][1])&&playerO.includes(winCombos[4][2])){
        winner = true
        {document.getElementById('player1').innerHTML = 'Player O Wins!';
    }
    } else if (playerX.includes(winCombos[5][0])&&playerX.includes(winCombos[5][1])&&playerX.includes(winCombos[5][2])){
        winner = true   
        {document.getElementById('player1').innerHTML = 'Player X wins!';
    }

    } else if (playerO.includes(winCombos[5][0])&&playerO.includes(winCombos[5][1])&&playerO.includes(winCombos[5][2])){
        winner = true 
     
        {document.getElementById('player1').innerHTML = 'Player O Wins!';
    }
        //===============================Diagonal========

    } else if (playerX.includes(winCombos[6][0])&&playerX.includes(winCombos[6][1])&&playerX.includes(winCombos[6][2])){
        winner = true  
        {document.getElementById('player1').innerHTML = 'Player X wins!';
    }

    } else if (playerO.includes(winCombos[6][0])&&playerO.includes(winCombos[6][1])&&playerO.includes(winCombos[6][2])){
        winner = true  
        {document.getElementById('player1').innerHTML = 'Player O Wins!';
    }
    

    } else if (playerX.includes(winCombos[7][0])&&playerX.includes(winCombos[7][1])&&playerX.includes(winCombos[7][2])){
        winner = true
        {document.getElementById('player1').innerHTML = 'Player X wins!';
    }

    } else if (playerO.includes(winCombos[7][0])&&playerO.includes(winCombos[7][1])&&playerO.includes(winCombos[7][2])){
        winner = true
        {document.getElementById('player1').innerHTML = 'Player O Wins!';
    }

    }    

    }