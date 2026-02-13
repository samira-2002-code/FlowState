let tasks = [];



export function initTodo() {
  const KEY = "flowstate_tasks";

 
  function saveTasks() {
    localStorage.setItem(KEY, JSON.stringify(tasks));
  }

  function loadTasks() {
    const stored = localStorage.getItem(KEY);
    if (stored) {
      tasks = JSON.parse(stored);
    }
  }

  function addData() {
    const input = document.getElementById("add");
    if (input.value.trim() === "") return;

    const newTask = {
      id: Date.now(),
      task: input.value,
      done: false,
    };

    tasks.push(newTask);
    input.value = "";

    saveTasks();
    renderTasks();
  }

  document.getElementById("add").addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
      addData();
    }
  })

 
  function delData(id) {
    tasks = tasks.filter((task) => task.id !== id);
    saveTasks();
    renderTasks();
  }


  function toggleDone(id) {
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    saveTasks();
    renderTasks();
  }

  
function renderTasks() {
  const list = document.querySelector(".task-list");
  list.innerHTML = "";
  const emptyState = document.querySelector(".empty-state");


  list.innerHTML = "";

  if (tasks.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  } else {
    emptyState.classList.add("hidden");
  }

  tasks.forEach((task) => {
    
    const section = document.createElement("section");
    section.className = "bg-pink-100  w-[45vh] md:w-[80vh] mt-2 ml-2 rounded-full flex justify-around items-center h-[10vh]";

  

   
    const p = document.createElement("p");
    p.className = `text-xl cursor-pointer ${task.done ? "line-through text-gray-400" : ""}`;
    p.textContent = task.task;
    p.addEventListener("click", () => toggleDone(task.id));

   
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "bg-red-700 text-white px-2 py-1 rounded-full"; 
    delBtn.addEventListener("click", () => delData(task.id));

    
     
    section.appendChild(p);
    section.appendChild(delBtn);

   
    list.appendChild(section);
  });
}

  document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
    renderTasks();

    const plus = document.getElementById("plus");
    plus.addEventListener("click", addData);
  });
}























