/*Timer for the game */
clicked = false;
const timer = document.getElementById('countdown');
const starter = document.getElementById('start');
let timeMinute = 10;
let time = timeMinute*60;
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
