/*Timer for the game */
localStorage.clear();
const timer = document.getElementById('countdown');
const starter = document.getElementById('start');
let timeMinute = 10;
let time = timeMinute*60;
const modal = document.getElementById('modal')
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const btn = document.querySelector('#start');
const cells = document.querySelectorAll('.cells')
let arrx = [];
let arrcircle = [];
let p = /^[A-Za-z]+$/;
let x = 'x';
let circle = 'o';
let circleTour;
let a =[];
// Pour le calcule de temps
function counter(){
    const setting = setInterval(function () {
        countDown()
    }, 500); 
}
function reset(){
    clearInterval(setting);
}
function countDown(){
    let minutes = Math.floor(time/60);
    let second = time % 60;
    second = second < 10 ?'0'+ second : second;
    if(minutes<=0 && second <=0){
        timer.innerHTML = "The time is up";
    }else{
        time--;
        timer.innerHTML = `${minutes}:${second} `;
    }
    
}
// fun de fonction calcule de temps
btn.addEventListener('click', function(){
    checkPlayers()
    storing()
})
// Fonction pour validation des inputs + la fermeture du modal
function checkPlayers(){
    if(!player1.value.match(p)||!player2.value.match(p)){
        player1.style.border = 'solid #FF0000';
        player2.style.border = 'solid #FF0000';
        // const text = document.createTextNode('Hello world')
        // const errMsg= document.createElement('p')
        // let newG = errMsg.appendChild(text)
        
        // label = document.getElementById('first').appendChild(newG)
    }else{
        modal.style.display = "none";
    }
}
// Pour le stockage des Joueurs avec leur valeurs x et o 
function storing(){
    // localStorage.setItem(player1,player1.value)
    localStorage.setItem('player1',player1.value);

    localStorage.setItem('player2',player2.value);
    console.log(localStorage.getItem("player1"));
    console.log(localStorage.getItem("player2"));
}
// Fonction pour l'affichage
cells.forEach((cell, index ) => { 
    cell.addEventListener('click', function(){
        // console.log(cell)
       const currentClass = circleTour ? circle : x
       marks(cell,currentClass)
       markStoring(index, currentClass)
       checkWinner(index)

    },{once:true})    

});
//Adding the X or O
function marks(cell, currentClass){
    cell.innerText = currentClass
    switchTurn()
    }
    // Checking the player
    function switchTurn(){
        circleTour=!circleTour
    }
function markStoring(index,currentClass){
    if(currentClass == x){
        arrx.push(index)
        a.push(index)
        console.log(arrx)
    }else{
        arrcircle.push(index)
        a.push(index)
        console.log(arrcircle)
    }
}
function checkWinner(){
    if(!winner()&& a.length==9){
        alert("DRAW")
    }else{
        winner()
    }
}
function winner(){
  if(arrx.includes(0) && arrx.includes(1) && arrx.includes(2) || arrx.includes(3) && arrx.includes(4) && arrx.includes(5)){
    alert('X')
  }else if(arrx.includes(6) && arrx.includes(7) && arrx.includes(8) ||arrx.includes(0) && arrx.includes(3) && arrx.includes(6)){
    alert('Winner')
  }else if(arrx.includes(1) && arrx.includes(4) && arrx.includes(7) || arrx.includes(2) && arrx.includes(5) && arrx.includes(8)){
    alert('Hello');
    console.log(localStorage.getItem('player1'))
  }else if(arrx.includes(0) && arrx.includes(4) && arrx.includes(8) || arrx.includes(2) && arrx.includes(4) && arrx.includes(6)){
    // alert('Fati');
    alert(localStorage.getItem('player1'))
}
if(arrcircle.includes(0) && arrcircle.includes(1) && arrcircle.includes(2) || arrcircle.includes(3) && arrcircle.includes(4) && arrcircle.includes(5)){
    alert('O')
  }else if(arrcircle.includes(6) && arrcircle.includes(7) && arrcircle.includes(8) ||arrcircle.includes(0) && arrcircle.includes(3) && arrcircle.includes(6)){
    alert('Winner O')
  }else if(arrcircle.includes(1) && arrcircle.includes(4) && arrcircle.includes(7) || arrcircle.includes(2) && arrcircle.includes(5) && arrcircle.includes(8)){
    alert(localStorage.getItem('player2'));
    // console.log()
  }else if(arrcircle.includes(0) && arrcircle.includes(4) && arrcircle.includes(8) || arrcircle.includes(2) && arrcircle.includes(4) && arrcircle.includes(6)){
    // alert('Fati');
    alert(localStorage.getItem('player2'))
}
}
