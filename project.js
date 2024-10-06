let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msggContainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let mode=document.querySelector("change-btn");


// we are making variable of trun by trun


let turnO=true;
const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
   
];
const resetGame=()=> {
    enableBoxes();
    msggContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("the box was clicked");
        if (turnO) {
         box.innerText="O";
         box.style.color="green"
         turnO=false;
        }
        else {
            box.innerText="x";
            turnO=true;
        }
        box.disabled=true;
        
   checkWinner();
    });
    
    
});
const disableBoxes= ()=> {
    for(let box of boxes) {
        box.disabled=true;
    }
}
const enableBoxes= ()=> {
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}


const showWinner=(winner)=> {
    msg.innerText="congrats winner";
    msggContainer.classList.remove("hide");
    
}

    
const checkWinner=()=> {
for (let pattern of winPatterns) {
     let posval0=boxes[pattern[0]].innerText;
     let posval1=boxes[pattern[1]].innerText;
     let posval2=boxes[pattern[2]].innerText;
    if(posval0!=""&&posval1!=""&&posval2!="") {
        if (posval0===posval1&&posval1===posval2) {
        console.log(" winner",posval0);
        disableBoxes();
        showWinner(posval0);
    
        
        }
    }
}
};
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
//preparing fr changng background



