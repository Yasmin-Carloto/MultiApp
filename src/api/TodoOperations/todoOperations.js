let tasks = JSON.parse(localStorage.getItem("tasks")) || []

export function fetchTasks(){
    return tasks
}

export function saveToLocalStorage(){
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

export function addNewTask(taskTitle){
    let id
    if(tasks.length > 0){
        id = tasks[tasks.length - 1].taskId + 1
    }else{
        id = 1
    }
    const task = {
        taskId: id,
        task: taskTitle
    }

    tasks.push(task)
    saveToLocalStorage()
    return tasks
}

export function removeTask(taskId) {
    const updatedTasks = tasks.filter(task => task.taskId != taskId)
    tasks = updatedTasks
    saveToLocalStorage()
    return tasks
}

export function updatingTask(taskId, taskNewTitle) {
    tasks.forEach(task => {
        if(task.taskId == taskId){
            task.task = taskNewTitle
            saveToLocalStorage()
        }
    })

    return tasks
}