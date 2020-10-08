console.log("Script Connected");
const newGame = document.querySelector('.New');
const reset = document.querySelector('.Reset');
const boxs = document.querySelectorAll('.cell');
const playerDisplay = document.querySelector('#player');
let playerXTurn
let playerOTurn
const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const manageClicks= [];
let winner = false;
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];
let gameStarted = true;
let xIsnext = true;

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
         }else{
            box.innerHTML = 'o'
            manageClicks.push(index);
         }
      
         counter++;
     }
    

    })


})

  
function winCombo (){

}
function draw(){

}

function resetGame(){
    
}