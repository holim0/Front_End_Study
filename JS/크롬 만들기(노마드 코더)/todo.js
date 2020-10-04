const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");

const TODOS_LS = "toDos";
const toDos = [];

function del(e) {}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", de1);
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
    todoInput.value = "";
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
