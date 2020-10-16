const canvas = document.getElementById("jsCanvas");
const context = canvas.getContext("2d");
const colors = document.getElementsByClassName("JsColor");
const fill = document.getElementById("jsMode");
const range = document.getElementById("jsRange");
const saveBtn = document.getElementById("jsSave");

let defaultColor = "black";
canvas.width = 700;
canvas.height = 700; // 실제 사이즈를 설정해줘야 한다.

context.fillStyle = "white";
context.fillRect(0, 0, 700, 700);
context.strokeStyle = defaultColor; // 선의 색 설정.
context.lineWidth = 2.5;
context.fillStyle = defaultColor;
let painting = false;
let filling = false;

function stopPaint() {
    painting = false;
}

function start() {
    painting = true;
}

if (canvas) {
    canvas.addEventListener("mousemove", (event) => {
        const x = event.offsetX;
        const y = event.offsetY;
        if (!painting) {
            context.beginPath(); //path 는 선.
            context.moveTo(x, y); // 시작점 옮기기.
        } else {
            context.lineTo(x, y); // 전에 있던 선과 현재 위치를 연결해준다.
            context.stroke(); // 선을 이어준다.
        }
    });

    canvas.addEventListener("mousedown", (e) => {
        // 마우스 클릭.
        start();
    });

    canvas.addEventListener("mouseup", (e) => {
        stopPaint();
    });

    canvas.addEventListener("mouseleave", stopPaint);

    canvas.addEventListener("click", () => {
        if (filling) {
            context.fillRect(0, 0, 700, 700);
        }
    });
}

Array.from(colors).forEach((color) =>
    color.addEventListener("click", (e) => {
        const color = e.target.style.backgroundColor;
        context.strokeStyle = color;
        context.fillStyle = color;
    })
);

if (range) {
    range.addEventListener("input", (e) => {
        context.lineWidth = e.target.value;
    });
}

fill.addEventListener("click", () => {
    if (filling === true) {
        filling = false;
        fill.innerText = "fill";
    } else {
        filling = true;
        fill.innerText = "paint";
    }
});

if (saveBtn) {
    saveBtn.addEventListener("click", () => {
        const image = canvas.toDataURL(); // png 가 default.
        const link = document.createElement("a");
        link.href = image;
        link.download = "hihi";
        link.click();
    });
}
