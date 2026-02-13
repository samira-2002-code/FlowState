let tasks=[];
export function initTodo(){
  const key="flowstate_tasks";

  function saveTasks(){
    localStorage.setItem(KEY,JSON.stringify(tasks))
  }
}

function loadTasks(){
const stored=localStorage.getItem(KEY);
if (stored){
  tasks=JSON.parse(stored);
}
}
function addData(){
  const input=document.getElementById("add");
  if (input.value.trim()==="")return;
  const newTask={
    id:Date.now(),
    task:input.value,
    done:false,
  };
  tasks.push(newTask);
  input.value="";

  saveTasks();
  renderTasks();
}

function delData(id){
  tasks=tasks.filter((task)=>task.id !==id);
  saveTasks();
  renderTasks();
}


function toggleDone(id){
  tasks=tasks.map((task)=>
  task.id === id? { ...task,done:!task.done} : task);
  saveTasks();
  renderTasks();
}




 





  
























































