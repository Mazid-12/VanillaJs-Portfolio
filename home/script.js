const watchCard = document.querySelector(".watchCard");

watchCard.addEventListener('click', ()=>{
    runBtn = event.target.closest("#runBtn");
    if(runBtn){
        window.location = "../stopWatch/index.html"
    }
})