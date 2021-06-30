const cards=document.querySelectorAll(".card"); 
const resetButton = document.querySelector("#reset_button");
// console.log(resetButton);

cards.forEach(card=>{
  card.addEventListener("click",flip);
})

resetButton.addEventListener("click",restartGame);

var isFlipped = false;
var firstCard;
var secondCard;
var successCount = 0;

function flip(){
  if(!this.classList.contains("flip")){
    this.classList.add("flip");//change class to flip
  
  if(!isFlipped){
    isFlipped=true;
    firstCard = this;
  } else{
    secondCard = this;
    checkIt();
  }
}
}

function checkIt(){
  if(firstCard.dataset.image === secondCard.dataset.image){
    success();
  }
  else{
    fail();
  }
}

function fail(){
  setTimeout(()=>{
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reeset();
  },500);
  
  console.log("Fail!");
}

function success(){
  // alert("You Won!");
  successCount++;
  firstCard.removeEventListener("click",flip); //no more need to be clicked
  secondCard.removeEventListener("click",flip);
  reeset();
  console.log("Success!");
  if(successCount===(cards.length/2)){
    setTimeout(()=>{alert("You Won!")},500);
  }
}

function reeset(){
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

function shuffle(){
  cards.forEach((card)=>{
    var index = Math.floor(Math.random()*16);
    card.style.order = index;
  })
}
shuffle();

function restartGame(){
  cards.forEach((card)=>{
    if(card.classList.contains("flip")){
      card.classList.remove("flip");
    }
    card.addEventListener("click",flip);
  })
  reeset();
  shuffle();
}
