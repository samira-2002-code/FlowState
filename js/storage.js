const KEY ="flowstate_tasks";
export const saveTasks=tasks =>
    localStorage.setItem(KEY,JSON.stringify(tasks));

export const loadTasks = () =>
    JSON.parse(localStorage.getItem(KEY))||[]









