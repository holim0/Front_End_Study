//ES6

// {
//     const a = 1;
//     let b = 2;
//     console.log(a + b);
// }

// //ES5

// (function () {
//     var c = 3;
// })();

// let name = "heeje";

// const age = 25;

// //ES5

// console.log("this " + name + age + " hihi");

// //ES6

// console.log(`this is ${age} , ${name} hihi`);

// const n = `${name} ${age}`;

// console.log(n.startsWith("h"));
// console.log(n.endsWith("0"));
// console.log(n.includes("jj"));

// const year = [1990, 1965, 1996, 2000];

// //ES5

// var ages5 = year.map(function (el) {
//     return 2020 - el;
// });

// //ES6

// let ages6 = year.map((el) => 2020 - el);

// console.log(ages6);

// ages6 = year.map((el, index) => `age : ${index + 1} : ${2020 - el}`);

// console.log(ages6);

//ES5

// var box5 = {
//     color: "green",
//     pos: 1,
//     click: function () {
//         // -> click function 은 box5 object의 method 이기 때문에  this를 가지고 있다.
//         var self = this;
//         document.querySelector(".green").addEventListener("click", function () {
//             var str = "this is box number" + self.pos + self.color;
//             //addEventListener 에 있는 function 은 method가 아니기 때문에 this가 없다.

//             alert(str);
//         });
//     },
// };

// box5.click();

//ES6

// const box6 = {
//     color: "green",
//     pos: 1,
//     click: () => {
//         document.querySelector(".green").addEventListener("click", () => {
//             var str = "this is box number" + this.pos + this.color;
//             // -> arrow function은 click 의 this를 가지고 올 수 있다.
//             alert(str);
//         });
//     },
// };

// box6.click();

//ES5

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.myFriends = function (friends) {
//     var arr = friends.map(
//         function (el) {
//             return this.name + "is friend with" + el;
//         }.bind(this)
//     );

//     console.log(arr);
// };

// var friends = ["solji", "heeje", "bob"];

// new Person("john").myFriends(friends);

//ES6

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.myFriends = function (friends) {
//     var arr = friends.map((el) => {
//         return this.name + "is friend with" + el;
//     });

//     console.log(arr);
// };

// var friends = ["solji", "heeje", "bob"];

// new Person("john").myFriends(friends);

//ES5

// var john = ["john", 26];

// var name = john[0];

// var age = john[1];

// //ES6

// const [name, year] = ["john", 26];

// console.log(name);
// console.log(year);

// const obj = {
//     name: "heeje",
//     age: 25,
// };

// const { name: n, age: a } = obj;

// console.log(n);

// function calcRetire(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 60 - age];
// }

// const [age2, retirement] = calcRetire(1996);

// console.log(age2);

// console.log(retirement);

// const boxes = document.querySelectorAll(".box"); //node list return

// //ES5

// var boxesArr5 = Array.prototype.slice.call(boxes);

// boxesArr5.forEach(function (cur) {
//     cur.style.backgroundColor = "dodgerblue";
// });

// // //ES6

// const boxesArr6 = Array.from(boxes);

// boxesArr6.forEach((cur) => (cur.style.backgroundColor = "dodgerblue"));

//ES5

// for (var i = 0; i < boxesArr5.length; i++) {
//     if (boxesArr5[i].className === "box blue") {
//         continue;
//     } else {
//         boxesArr5[i].textContent = "blue!";
//     }
// }

//ES6

// for (const cur of boxesArr6) {
//     if (cur.className.includes("blue")) {
//         continue;
//     } else {
//         cur.textContent = "blue";
//     }
// }

//ES5

// var ages = [12, 13, 23, 15, 25, 17];

// var full = ages.map(function (cur) {
//     return cur >= 18;
// });

// console.log(full.indexOf(true)); // 조건에 맞는 인덱스를 반환
// console.log(ages[full.indexOf(true)]); // 조건에 맞는 인덱스를 가진 배열 값 반환.

// //ES6

// console.log(ages.findIndex((cur) => cur >= 18));
// console.log(ages.find((cur) => cur >= 18));

// function add(a, b, c, d) {
//     return a + b + c + d;
// }

// //ES5

// var ages = [20, 20, 30, 30];
// var sum1 = add.apply(null, ages);

// console.log(sum1);

// //ES6

// let sum2 = add(...ages);

// console.log(sum2);

// const familySmith = ["John", "Jane", "Mark"];
// const familyMiller = ["Mary", "Bob", "Ann"];
// const bigFamily = [...familySmith, "Lily", ...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector("h1");
// const boxes = document.querySelectorAll(".box");
// const all = [h, ...boxes];

// Array.from(all).forEach((cur) => (cur.style.color = "purple"));
// // ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

//     lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//     nationality === undefined ? nationality = 'american' : nationality = nationality;

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// //ES6
// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

////// Maps

// let recipeMap = new Map([
//     ["cucumber", 500],
//     ["tomatoes", 350],
//     ["onion", 50],
// ]);

// for (let [key, val] of recipeMap.entries()) {
//     // recipeMap.entries()와 동일합니다.
//     console.log(`${key}, ${val}`); // cucumber,500 ...
// }

////Class

//ES6

// class Person {
//     constructor(name, birth, job) {
//         this.name = name;
//         this.birth = birth;
//         this.job = job;
//     }

//     cal() {
//         let age = new Date().getFullYear() - this.birth;

//         console.log(age);
//     }
// }

// const heeje = new Person("heeje", 1996, "student");

// heeje.cal();

// class athlete extends Person {
//     constructor(name, birth, job, game, medal) {
//         super(name, birth, job); // 부모 class 부른다.

//         this.game = game;
//         this.medal = medal;
//     }

//     wonMedal() {
//         this.medal++;
//         console.log(this.medal);
//     }
// }

// const Athlete6 = new athlete("heeje", 1996, "student", 7, 77);

// Athlete6.wonMedal();
// Athlete6.cal();

class User {
    constructor(name) {
        // setter를 활성화
        this.name = name;
    }

    get name() {
        //getter
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("이름이 너무 짧습니다.");
            return;
        }
        this._name = value;
    }
}

let user = new User("John");
console.log(user.name); // John

user = new User(""); // 이름이 너무 짧습니다.
