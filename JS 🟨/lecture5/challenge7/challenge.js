// arr = ["hihi", "jheuewhri", "werhwehur"];
// correct = [0, 1, 2];

// function q(idx) {
//     let answer = prompt(
//         arr[idx] + "\n정답은 무엇일까요?",
//         "여기에 입력해주세요"
//     );
//     return answer;
// }

// while (1) {
//     index = Math.floor(Math.random() * 3);
//     let val = q(index);
//     if (val == "exit") {
//         break;
//     } else {
//         if (val == correct[index]) {
//             console.log("correct!");
//         } else {
//             console.log("Wrong");
//         }
//     }
// }

(function () {
    function Question(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }

    Question.prototype.display = function () {
        console.log(this.question);

        for (var i = 0; i < this.answer.length; i++) {
            console.log(i + " : " + this.answer[i]);
        }
    };

    Question.prototype.check = function (ans, callback) {
        let sc;

        if (ans === this.correct) {
            console.log("Correct");
            sc = callback(true);
        } else {
            console.log("Wrong");
            sc = callback(false);
        }

        this.displayScore(sc);
    };

    Question.prototype.displayScore = function (score) {
        console.log(score);
    };

    let q1 = new Question("hihi", ["hihi", "jiojoi"], 0);

    let q2 = new Question("hihi2", ["hihi2", "jiojoi", "qwewqe"], 2);

    let q3 = new Question("hihi2", ["hihi", "jiojoi", "qweqwoeho"], 1);

    let qs = [q1, q2, q3];

    function score() {
        let sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        };
    }

    let keepscore = score();

    function next() {
        let n = Math.floor(Math.random() * qs.length);

        qs[n].display();

        let answer = prompt("정답을 입력해주세요");

        if (answer !== "exit") {
            qs[n].check(parseInt(answer), keepscore);
            next();
        }
    }

    next();
})();
