import { renderTimer } from "./timer.js";
import { renderDashboard } from "./ui.js";
import { initTodo } from "./todo.js";

document.addEventListener("click", (e) => {
    if (e.target.closest("#timerBtn")) {
        renderTimer();
    }

    if (e.target.closest("#backBtn")) {
        renderDashboard();
        initTodo();
    }
});

renderDashboard();
initTodo();

console.log("object");
