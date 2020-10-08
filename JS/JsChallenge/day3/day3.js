const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const textValue = document.querySelector("h2");
const superEventHandler = {
    mouseOn: () => {
        textValue.innerHTML = "The mouse is here!";
        textValue.style.color = colors[0];
    },

    mouseLeave: () => {
        textValue.innerHTML = "The mouse is gone!";
        textValue.style.color = colors[1];
    },

    rightClick: () => {
        textValue.innerHTML = "That was a right click!";
        textValue.style.color = colors[4];
    },

    resizeWindow: () => {
        textValue.innerHTML = "You just resized!";
        textValue.style.color = colors[2];
    },
};

textValue.addEventListener("mouseenter", superEventHandler.mouseOn);
textValue.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("contextmenu", superEventHandler.rightClick);
window.addEventListener("resize", superEventHandler.resizeWindow);
