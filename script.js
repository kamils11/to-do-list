{

    const addNewTaskButton = document.querySelector(".section__button--submit");




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
        const addedTask = document.querySelector(".listOfTasks")
        let htmlString = "";
        for (const task of tasks) {

            htmlString += `
         
        <li ${task.done ? "class= \"doneTask\"" : ""}>
      
            <button class="toggleDoneTaskButton"> ${task.done ? "✔" : ""}</button>
            ${task.content}
            <button class="removeTaskButton">🗑️</button>
         
        </li>
            
        `;
        }
        addedTask.innerHTML = htmlString;

        removeTaskButton();

        toggleDoneTaskButton();


    }


    removeTaskButton = () => {
        const removeButtons = document.querySelectorAll('.removeTaskButton');
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener('click', () => {
                tasks.splice(index, 1);
                render();
            })

        })
    }

    toggleDoneTaskButton = () => {

        const toggleButtons = document.querySelectorAll('.toggleDoneTaskButton');
        toggleButtons.forEach((toggleButton, index) => {
            toggleButton.addEventListener('click', () => {


                tasks[index].done = !tasks[index].done;

                render();
            })

        })




    }

    const addTask = (event) => {

        event.preventDefault();
        const taskToDo = document.querySelector(".section__form__input--newTask");
        taskToDo.focus();


        if (taskToDo.value == "") {

            return false;
        }

        tasks.unshift({
            content: taskToDo.value.trim()
        })
        taskToDo.value = "";

        render();
    }


    const init = () => {
        addNewTaskButton.addEventListener("click", addTask)
        render(tasks);
    }

    init();
}