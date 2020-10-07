console.log("Script Connected");
const newGame = document.querySelector('.New');
const reset = document.querySelector('.Reset');
const box = document.querySelectorAll('.cell');
//const grid = box;


console.log(box);
const gameOn = true;



reset.addEventListener('click',(event)=>{     
    event.preventDefault()
    console.log("Reset");
    box.innerText="";
   
})


