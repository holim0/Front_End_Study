const form = document.querySelector(".input-form");
const inputVal = form.querySelector("input");
const pending = document.querySelector(".pending");
const finished = document.querySelector(".finished");
const PENDING_TODO = "PENDING";
const FINISHED_TODO = "FINISHED";

let pending_list = [];
let finished_list = [];

function addList(text, dest) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const checkBtn = document.createElement("button");

    const id =
        dest === "pending" ? pending_list.length + 1 : finished_list.length + 1;

    delBtn.addEventListener("click", del);

    if (dest === "pending") {
        checkBtn.addEventListener("click", check);
    } else {
        checkBtn.addEventListener("click", back);
    }

    span.innerText = text;
    delBtn.innerText = "❌";
    if (dest === "pending") {
        checkBtn.innerText = "✅";
    } else {
        checkBtn.innerText = "⏪";
    }

    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
    li.id = id;

    if (dest === "pending") {
        pending.appendChild(li);
    } else {
        finished.appendChild(li);
    }

    const pendObj = {
        text: text,
        id: id,
    };

    if (dest === "pending") {
        pending_list.push(pendObj);
        localStorage.setItem(PENDING_TODO, JSON.stringify(pending_list));
    } else {
        finished_list.push(pendObj);
        localStorage.setItem(FINISHED_TODO, JSON.stringify(finished_list));
    }

    inputVal.value = "";
}

function inputHandel(e) {
    e.preventDefault();
    addList(inputVal.value, "pending");
}

function back(e) {
    const targetBtn = e.target.parentNode;
    const text = targetBtn.firstChild.innerText;
    addList(text, "pending");
    del(e);
}

function del(e) {
    const targetID = e.target.parentNode;
    const delTarget = targetID.parentNode.className;

    if (delTarget === "pending") {
        pending.removeChild(targetID);
        const cleanPending = pending_list.filter((toDo) => {
            return toDo.id !== parseInt(targetID.id);
        });

        pending_list = cleanPending;

        localStorage.setItem(PENDING_TODO, JSON.stringify(pending_list));
    } else {
        finished.removeChild(targetID);
        const cleanFinished = finished_list.filter((toDo) => {
            return toDo.id !== parseInt(targetID.id);
        });

        finished_list = cleanFinished;

        localStorage.setItem(FINISHED_TODO, JSON.stringify(finished_list));
    }
}

function check(e) {
    const targetBtn = e.target.parentNode.firstChild;
    const text = targetBtn.innerText;
    addList(text, "finished");
    del(e);
}

function load() {
    const loadPending = localStorage.getItem(PENDING_TODO);
    const loadFinished = localStorage.getItem(FINISHED_TODO);
    if (loadPending !== null) {
        const JsonPending = JSON.parse(loadPending);
        JsonPending.forEach((todo) => {
            addList(todo.text, "pending");
        });
    }

    if (loadFinished !== null) {
        const JsonFinished = JSON.parse(loadFinished);
        JsonFinished.forEach((todo) => {
            addList(todo.text, "finished");
        });
    }
}

function init() {
    load();
    form.addEventListener("submit", inputHandel);
}
init();
