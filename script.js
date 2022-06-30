document.querySelector('#push').addEventListener('click', () => {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task");
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        const current_tasks = document.querySelectorAll('.delete');
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].addEventListener('click', () => {
                current_tasks[i].parentNode.remove();
            });
        }

        let tasks = document.querySelectorAll('.task');
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].addEventListener('click', () => {
                tasks[i].classList.toggle('completed');
            });
        }

        document.querySelector('#newtask input').value = '';
    }
});
