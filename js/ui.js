export const renderDashboard = () => {
    const app = document.getElementById("app");
    app.innerHTML = ` <main class="h-[140vh]">

      <header>
        <section class="flex justify-between mt-4">
          <img class="w-10 ml-4" src="images/burger.png" alt="menu" />
          <h1 class="ml-4 mr-[36vh] text-xl font-bold">BE PRO</h1>
          <img class="w-10 h-10" src="images/notification.png" alt="notification" />
        </section>

        <p class="mt-4 font-bold text-xl ml-8 p-4">
          GOOD MORNING ,SAMIRA
        </p>
      </header>

      <section class="bg-pink-100 p-2 flex justify-center items-center">
        <div class="bg-white w-[50vh] h-[19vh] rounded-full mr-20 flex justify-center items-center">
          <p class="font-bold text-3xl">50%</p>
        </div>
        <p class="text-xl font-bold">
          BOOST UP YOUR ENERGIE AND START AGAIN TO ACHIVE
        </p>
      </section>

      <section
  class="card todo-module 
         w-full 
         max-w-md 
         md:max-w-lg 
         lg:max-w-xl 
         mx-auto 
         mt-8 
         rounded-3xl 
         bg-pink-300 
         p-6 
         shadow-lg">

  <h2 class="text-xl font-semibold mb-4 text-gray-700">
    Today Tasks
  </h2>

  <div class="add-task flex items-center gap-3">
    <input
      id="add"
      class="bg-white flex-1 h-10 rounded-full px-4 
             focus:outline-none focus:ring-2 focus:ring-pink-300"
      type="text"
      placeholder="New task..."
    />
    <button
      id="plus"
      class="bg-white w-10 h-10 rounded-full 
             flex items-center justify-center
             text-lg font-bold 
             hover:bg-pink-200 transition">
      +
    </button>
  </div>

  <p class="empty-state hidden mt-4 text-gray-500 text-sm">
    No tasks yet. Add one to start.
  </p>

  <ul class="task-list mt-4 space-y-2"></ul>

</section>

 

    </main>

    <nav class="fixed bottom-0 left-0 right-0 bg-pink-100 h-20 flex justify-around items-center">
      <button class="w-10 h-10">
        <img src="images/home.png" alt="home" />
      </button>

      <button class="w-10 h-10">
        <img src="images/calendar.png" alt="" />
      </button>

      <button class="w-10 h-10">
        <img src="images/plus.png" alt="plus" />
      </button>

      <button  class="w-10 h-10">
        <img id="timerBtn" src="images/time-left.png" alt="crono" />
      </button>

      <button class="w-10 h-10">
        <img src="images/user.png" alt="user" />
      </button>
    </nav>
  `;
};
