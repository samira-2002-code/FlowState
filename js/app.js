import { renderDashboard } from "./ui";

document.addEventListener("click",(e)=>{
    if(e.target.closest("#timerBtn")){
        renderTimer();
    }
})











