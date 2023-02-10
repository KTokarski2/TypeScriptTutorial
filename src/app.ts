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

const tasks: {
    name: string;
    done: boolean;
}[] = [
    {
    name: "Buy milk",
    done: true
    },
    {
    name: "Take dog for a walk",
    done: false
    },
    {
    name: "Prepare diner",
    done: false
    }
];




const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement: HTMLElement = document.createElement("li");
        const id: string = `task-${index}`;
        const labelElement: HTMLElement = document.createElement("label");
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);
        const checkBoxElement: HTMLInputElement = document.createElement("input");
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

const addTask = (task: string) => {
    tasks.push({name: task, done: false});
};

addButtonElement.addEventListener("click", (event:Event) => {
    event.preventDefault();
    addTask(taskNameInputElement.value);
    render();
});

render();