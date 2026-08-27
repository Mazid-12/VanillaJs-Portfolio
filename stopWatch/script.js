const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const chrono = document.querySelector(".chrono")
let id;
let initialTime;
let isRestarting = false;
let elapsedTime;
let timeNow = 0;
let currentTime;
let lastTime =0;
let stoppingTime = 0;
let PastElapsed =0;

startBtn.addEventListener("click", startChrono);
stopBtn.addEventListener("click", stopChrono);
resetBtn.addEventListener("click", resetChrono);

function startChrono(){
    if(isRestarting === false){
        initialTime = Date.now();
    }
    //else if(isRestarting === true){
    //    stoppingTime = Date.now() - timeNow;
    //}
    //console.log(stoppingTime)
    console.log(isRestarting)
    //stoppingTime = Date.now() - timeNow;
    let outTime = Date.now()
    id = setInterval(() => {
        if(isRestarting === false){
            currentTime = Date.now();
        }
        else if(isRestarting === true){
            currentTime =  Date.now() - (outTime - timeNow);
        }
        elapsedTime = currentTime - initialTime;
        
        let hour = Math.floor(((elapsedTime / 1000)/3600))
        let minute = Math.floor(((elapsedTime/1000)%3600)/60)
        let second = Math.floor(((elapsedTime / 1000)%60))
        
        second = String(second).padStart(2, '0');
        minute = String(minute).padStart(2, '0')
        hour = String(hour).padStart(2, '0')
        let newChrono = `${hour}:${minute}:${second}`;
        chrono.textContent = newChrono;
        
    }, 100);
}

function stopChrono(){
    timeNow = Date.now()
    PastElapsed = elapsedTime;
    console.log('stop');
    clearInterval(id);
    isRestarting = true;
}
function resetChrono(){
    console.log('reset');
    stopChrono()
    chrono.textContent = "00:00:00";
    initialTime = 0;
    isRestarting = false;
}