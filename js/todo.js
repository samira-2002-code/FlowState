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




 



























































