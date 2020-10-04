const body = document.querySelector("body");

function paintImg(n) {
    const image = new Image();
    image.src = `/img/${n}.jpg`;
    image.classList.add("bgimg");
    body.appendChild(image);
}

function init() {
    const rand = Math.floor(Math.random() * 4) + 1;
    paintImg(rand);
}

init();
