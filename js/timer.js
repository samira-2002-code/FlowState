export const renderTimer = () => {
  const app = document.getElementById("app");

  app.innerHTML = `
    <main class="flex flex-col items-center justify-center h-screen bg-pink-100">
      <h1 class="text-2xl font-bold mb-6">Pomodoro</h1>
      <div id="time" class="text-5xl font-bold mb-6">25:00</div>
      <div class="flex gap-4">
        <button id="startBtn" class="bg-white px-6 py-3 rounded-full">
          Start
        </button>
        <button id="stopBtn" class="bg-red-400 px-6 py-3 rounded-full text-white">
          Stop
        </button>
      </div>
      <button id="backBtn" class="mt-4 text-sm underline">
        Back
      </button>
    </main>
  `;

  
  const timeDisplay = document.getElementById("time");
  const startBtn = document.getElementById("startBtn");
  const stopBtn = document.getElementById("stopBtn");
  const backBtn = document.getElementById("backBtn");

 
  const WORK_DURATION = 25 * 60; 
  const BREAK_DURATION = 5 * 60; 

  let timer = WORK_DURATION; 
  let intervalId = null;
  let isWork = true; 

  
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };


  timeDisplay.textContent = formatTime(timer);

  
  const startTimer = () => {
    if (intervalId) return;

    intervalId = setInterval(() => {
      timer--;
      timeDisplay.textContent = formatTime(timer);

      if (timer <= 0) {
        clearInterval(intervalId);
        intervalId = null;
        isWork = !isWork; 
        timer = isWork ? WORK_DURATION : BREAK_DURATION;
        startBtn.textContent = isWork ? "Start Work" : "Start Break";
        timeDisplay.textContent = formatTime(timer);
        alert(isWork ? "Back to work!" : "Time for a break!");
      }
    }, 1000);
  };

 
  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

 
  startBtn.addEventListener("click", startTimer);
  stopBtn.addEventListener("click", stopTimer);

  backBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    isWork = true;
    timer = WORK_DURATION;
    timeDisplay.textContent = formatTime(timer);
    startBtn.textContent = "Start";
  });
};