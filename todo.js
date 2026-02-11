const tasks=[];
function addData(){
  const add =document.getElementById("add");
  const newTask={              // this is an object
    
    id:new Date,
    tasks:add.value,
    done:false,

  };

  tasks.push(newTask);
  console.log(newTask)
}
const plus=document.getElementById("plus");
plus.addEventListener("click",()=>{
  addData();
})
function delData(id){  /*function for delete*/

  tasks=tasks.filter((task)=>task.id!==id)
}


