const btn = document.querySelectorAll("button");
const output = document.querySelector("h1");

let num = [];
let oper = [];

let flag = false;
btn.forEach((val) => {
    val.addEventListener("click", (e) => {
        const cur = e.target.innerText;

        if (Number(cur) >= 0 && Number(cur) < 10) {
            if (oper[oper.length - 1] !== "" && oper.length !== 0 && !flag) {
                output.innerText = "";
                flag = true;
            } else {
                if (output.innerText === "0") {
                    output.innerText = "";
                }
            }
            output.innerText += cur;
        } else {
            if (cur === "C") {
                num = [];
                oper = [];
                output.innerText = "0";
                flag = false;
            } else if (cur === "=") {
                const val = Number(output.innerText);
                const newNum = num.pop();
                const newOper = oper.pop();
                output.innerText = cal(newNum, val, newOper);
            } else {
                const val = Number(output.innerText);
                flag = false;

                if (oper.length === 0) {
                    num.push(val);
                    oper.push(cur);
                } else {
                    const newNum = num.pop();
                    const newOper = oper.pop();
                    output.innerText = cal(newNum, val, newOper);
                    num.push(cal(newNum, val, newOper));
                    oper.push(cur);
                }
            }
        }
    });
});

function cal(n1, n2, oper) {
    switch (oper) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "/":
            return n1 / n2;
        case "*":
            return n1 * n2;

        default:
            break;
    }
}
