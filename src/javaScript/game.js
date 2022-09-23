/*Timer for the game */
localStorage.clear();
clicked = false;
const timer = document.getElementById('countdown');
const starter = document.getElementById('start');
let timeMinute = 10;
let time = timeMinute*60;
const cells = document.querySelectorAll('div');
possiBilities = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6],
];
const circle = 'O';
const x = 'X';
let circleTour;
function counter(){
    const setting = setInterval(function () {
        countDown()
    }, 1000); 
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
// console.log(possiBilities)
// console.log(typeof(cells))
// window.localStorage['fontSize']='20px';
cells.forEach((cell, index )=> { 
        cell.addEventListener('click', function(){
           const currentClass = circleTour ? circle : x
           localStorage.setItem(JSON.stringify(index),currentClass)
           console.log(localStorage)
            marks(cell,currentClass)
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
// function winner(currentClass){
//     return possiBilities.some(posibilite => {
//         return posibilite.every(index =>{
//             return cells[index].cell.contains(currentClass)
//         })
//     })
// }
