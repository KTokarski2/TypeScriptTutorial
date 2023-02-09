/*

<li>
    <label for="task-1">Buy milk</label>
    <input type="checkbox" id="task-1" name="Buy milk">
</li>

 */
//Buy milk
//Take dog for a walk
//Prepare diner
const tasksContainerElement = document.querySelector(".tasks");
const addButtonElement = document.querySelector("button");
const taskNameInputElement = document.querySelector("#name");
const tasks = ["Buy milk", "Take dog for a walk", "Prepare diner"];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach(task => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(taskNameInputElement.value);
    render();
});
render();
