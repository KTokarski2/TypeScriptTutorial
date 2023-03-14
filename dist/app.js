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
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
    {
        name: "Buy milk",
        done: true,
        category: "general"
    },
    {
        name: "Take dog for a walk",
        done: true,
    },
    {
        name: "Prepare diner",
        done: false,
        category: "general"
    }
];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const id = `task-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);
        const checkBoxElement = document.createElement("input");
        checkBoxElement.type = "checkbox";
        checkBoxElement.name = task.name;
        checkBoxElement.id = id;
        checkBoxElement.checked = task.done;
        checkBoxElement.addEventListener("change", () => {
            task.done = !task.done;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkBoxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ name: taskNameInputElement.value, done: false });
    render();
});
addTask({ name: "Martwy ciąg", category: "gym", done: false });
render();
