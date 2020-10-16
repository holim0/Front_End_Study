const startWidth = window.innerWidth;

const colors = ["#924eac", "#eebc10", "#2f8ed6"];

const body = document.querySelector("body");

window.addEventListener("resize", (e) => {
    const cur = e.target.innerWidth;
    if (cur > startWidth + 400) {
        body.style.backgroundColor = colors[1];
    } else if (cur <= startWidth + 400 && cur >= startWidth) {
        body.style.backgroundColor = colors[0];
    } else if (cur < startWidth) {
        body.style.backgroundColor = colors[2];
    }
});
