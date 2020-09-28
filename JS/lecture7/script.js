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

function Person(name) {
    this.name = name;
}

Person.prototype.myFriends = function (friends) {
    var arr = friends.map(
        function (el) {
            return this.name + "is friend with" + el;
        }.bind(this)
    );

    console.log(arr);
};

var friends = ["solji", "heeje", "bob"];

new Person("john").myFriends(friends);

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
