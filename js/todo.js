let tasks=[];
export function initTodo(){
  const key ="flowstate_tasks";
  function saveTasks(){
    localStorage.setItem(key,JSON.stringify(tasks))

    
  }
}

function loadTasks(){
  const stored = localStorage.getItem(key);
  if(stored){
    tasks=JSON.parse(stored);
  }
}

function addData(){
  const input =document.getElementById("add");
  if(input.value.trim()==="")return;
   const newTask={
    id:Data.now(),
    task:input.value,
    done:false,
   };
   tasks.push(newTask)
   input.value="";
   saveTasks();
   renderTasks();

}

function delData(id){
  tasks=tasks.filter((task) => task.id!==id);
  saveTasks();
  renderTasks();
}
 
function toggleDone(id){
  tasks=tasks.map((task)=>
  task.id ===id ? {...task,done :!task.done} :task);
  saveTasks();
  renderTasks()
}


function renderTasks(){
  const list=document.querySelector(".task-list");
  list.innerHTML="";
  const emptyState=document.querySelector(".empty-state");
  list.innerHTML="";
  if(tasks.length===0){
    emptyState.classList.remove("hidden");
    return;
  }else{
   emptyState.classList.add("hidd")
  }

}
















