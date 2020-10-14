const slider = document.querySelector(".slider");
const guessNum = document.querySelector(".guess");
const play = document.querySelector(".btn");
const h2 = document.querySelector("h2");
const result = document.querySelector(".result");
const result1 = document.querySelector(".result1");

function generRandom(maxNum) {
    let randNum = Math.floor(Math.random() * maxNum);

    return randNum;
}

slider.addEventListener("input", (e) => {
    const value = e.target.value;
    h2.innerText = `Generate a number between 0 and ${value}`;
    guessNum.max = value;
});

play.addEventListener("click", () => {
    if (guessNum.value === "") {
        result.innerText = "Please Enter the number!";
        return;
    }
    const num = Number(guessNum.value);
    const target = generRandom(slider.value);

    result.innerText = `You choose ${num}, the machine chose ${target}.`;
    console.log(num, target);
    if (num === target) {
        console.log("correct");
        result1.innerText = "You Win!";
    } else {
        result1.innerText = "You Lost!";
    }
});
