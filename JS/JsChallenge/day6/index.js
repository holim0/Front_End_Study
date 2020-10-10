const select = document.querySelector("select");
const body = document.querySelector("body");
const USR_SELECT = "usrSelect";
select.addEventListener("change", (e) => {
    const cur = e.target.value;
    localStorage.setItem(USR_SELECT, cur);
    back(cur);
});

function back(name) {
    const image = new Image();
    image.src = `/img/${name}.jpg`;
    image.classList.add("bgimg");
    body.appendChild(image);
}

function init() {
    const savedCountry = localStorage.getItem(USR_SELECT);
    if (savedCountry != null) {
        select.value = savedCountry;
        back(savedCountry);
    }
}
init();
