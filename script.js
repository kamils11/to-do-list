{

    const addNewTaskButton = document.querySelector(".section__button--submit");

    const addedTask = document.querySelector(".listOfTasks")



    let tasks = [{
            content: "done",
            done: false
        },
        {
            content: "done",
            done: true
        }

    ];

    const render = () => {

        let htmlString = "";
        for (const task of tasks) {

            htmlString += `
        
        <li ${task.done ? "style= \"text-decoration: line-through\"" : ""}>

            <button class="toggleDoneTaskButton"> O</button>
            ${task.content}
            <button class="removeTaskButton"> U</button>

        </li>

        `;
        }
        addedTask.innerHTML = htmlString;

    }

    const addTask = (event) => {

        event.preventDefault();


        const taskToDo = document.querySelector(".section__form__input--newTask");

        if (taskToDo.value == "") {
            return false;
        }

        tasks.unshift({
            content: taskToDo.value.trim()
        })
        taskToDo.value = "";
        taskToDo.focus();
        render();
    }


    const init = () => {
        addNewTaskButton.addEventListener("click", addTask)
        render(tasks);
    }

    init();
}