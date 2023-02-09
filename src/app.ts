/*

<li>
    <label for="task-1">Buy milk</label>
    <input type="checkbox" id="task-1" name="Buy milk">
</li>

 */

//Buy milk
//Take dog for a walk
//Prepare diner

const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");

const tasks: string[] = ["Buy milk", "Take dog for a walk", "Prepare diner"];

const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach(task => {
        const taskElement: HTMLElement = document.createElement("li");
        taskElement.innerText = task;
        tasksContainerElement.appendChild(taskElement);
    });
};

const addTask = (task: string) => {
    tasks.push(task);
};

addButtonElement.addEventListener("click", (event:Event) => {
    event.preventDefault();
    addTask(taskNameInputElement.value);
    render();
});

render();