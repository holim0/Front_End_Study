const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");

const TODOS_LS = "toDos";
let toDos = [];

function del(e) {
    const btn = e.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const cleanToDos = toDos.filter((todo) => {
        return todo.id !== parseInt(li.id);
    });
    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", del);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    todoList.appendChild(li);
    const todoObj = {
        text: text,
        id: newId,
    };

    toDos.push(todoObj);
    saveToDos();
}

function handleSubmit(e) {
    e.preventDefault();
    const curValue = todoInput.value;
    paintToDo(curValue);
    todoInput.value = ""; // text 필드 계속 초기화/
}

function loadTodos() {
    const loadedtoDos = localStorage.getItem(TODOS_LS);

    if (loadedtoDos !== null) {
        const parsedToDos = JSON.parse(loadedtoDos); // Object 로 변환.
        parsedToDos.forEach((toDo) => {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);
}

init();
