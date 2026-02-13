export const renderTasks=()=>{
    const app=document.getElementById("app");
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

}







