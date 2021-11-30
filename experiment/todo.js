let Oldtask = [];

function submitHandler() {
    event.preventDefault();


    let task = document.getElementById('newTask').value;

    Oldtask.push(task);

    let tasks = "";
    for (let i = 0; i < Oldtask.length; i++) {
        let maintask = "<li>" + Oldtask[i] + "</li>";
        tasks = tasks + maintask;

    }

    let ulTag = document.getElementById("taskLists");
    ulTag.innerHTML = tasks;


}