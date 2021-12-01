const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = "todos";

let toDos =[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function completeTodo(event) {
    const span = event.target.parentElement.firstChild;
    span.classList.toggle('strikethrough');
}

function paintToDo(newTodo){
    const list = document.createElement('li');
    list.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const buttonDelete = document.createElement('button');
    const buttonComplete = document.createElement('button');
    buttonDelete.innerText = '✘';
    buttonDelete.addEventListener('click', deleteTodo);
    buttonComplete.innerText = '✔';
    buttonComplete.addEventListener('click', completeTodo);
    toDoList.append(list);
    list.append(span);
    list.appendChild(buttonComplete);
    list.appendChild(buttonDelete);
    
    
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

