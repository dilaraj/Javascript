const getDate = new Date();
const day = {day: 'numeric'};
const month = {month: 'long'};
const year = {year: 'numeric'};

const Day = getDate.toLocaleString('en-IN', day);
const Month = getDate.toLocaleString('en-IN', month);
const Year = getDate.toLocaleString('en-IN', year);

const date = document.getElementById("date");
date.innerHTML += Day + " " + Month.toUpperCase() + ", <br>" + Year;

const form = document.querySelector('#create-task');
const input = document.querySelector('#task-name');
const list = document.querySelector('#taskList');

form.addEventListener('submit', e => {
  e.preventDefault();
  const todoItemName = input.value.trim();
  list.appendChild(createTodoItem(todoItemName));
  input.value = '';
}); 

list.addEventListener('click', e => {
  if (e.target.classList.contains('todo-item')) {
    e.target.classList.toggle('strike');
  } 
});

const createTodoItem = value => {
  const div = document.createElement('div');
  div.classList.add('todo-item');
  div.textContent = value;
  return div;
}

/*const form = document.querySelector("#create-task");
const input = document.querySelector("#textBar");
const list = document.querySelector("#taskList");

form.addEventListener('submit', e => {
    e.preventDefault();
    const toDoItemName = input.value.trim();
    list.appendChild(createToDoItem(toDoItemName));
    input.value = "";
});

list.addEventListener('click', e => {
    if (e.target.classList.contains('toDo')) {
        e.target.classList.toggle('strike');
    }
});

const createToDoItem = value => {
    const div = document.createElement('div');
    div.classList.add('toDo');
    div.textContent = value;
    return div;
}*/

/*
~~~~~~ Old Solution ~~~~~~~~
const getDate = new Date();
const day = {day: 'numeric'};
const month = {month: 'long'};
const year = {year: 'numeric'};

const Day = getDate.toLocaleString('en-IN', day);
const Month = getDate.toLocaleString('en-IN', month);
const Year = getDate.toLocaleString('en-IN', year);

const date = document.getElementById("date");
date.innerHTML += Day + " " + Month.toUpperCase() + ", <br>" + Year;

function displayText() {
    let input = document.getElementById("textBar");
    let toDoContainer = document.getElementById("text");

    toDoContainer.innerHTML += "<div class='toDo' onclick='crossOut()'>" + input.value + "</div>";
    toDoContainer.innerHTML += "<br><br><br><br>";
    input.value = "";
}

function crossOut() {
    let toDoContainer = document.getElementById("text");
    toDoContainer.strike();
}*/