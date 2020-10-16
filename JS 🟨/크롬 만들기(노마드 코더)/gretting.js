const form = document.querySelector(".js-form");
const input = form.querySelector("input");

const greeting = document.querySelector(".js-greetings");

const USER_LS = "curUsr";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(e) {
    e.preventDefault();
    const curValue = input.value;
    paintGreeting(curValue);
    saveName(curValue);
}

function askForName() {
    form.classList.add("showing");
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove("showing");
    greeting.classList.add("showing");
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const cur = localStorage.getItem(USER_LS);

    if (cur === null) {
        console.log("hihi");
        askForName();
    } else {
        paintGreeting(cur);
    }
}

function init() {
    loadName();
}

init();
