// function constructor

// var john = {
//     name: "john",
//     birth: 1996,
//     job: "student",
// };

// let Person = function (name, year, job) {
//     this.name = name;
//     this.year = year;
//     this.job = job;
// };

// Person.prototype.cal = function () {
//     console.log(2020 - this.year);
// };

// Person.prototype.lastname = "smith";

// var john = new Person("hi", 1996, "hoho"); // 상속
// john.cal();

// console.log(john);

//object.create

// let personProto = {
//     cal: function () {
//         console.log(2020 - this.year);
//     },
// };

// let john = Object.create(personProto);

// let jane = Object.create(personProto, {
//     name: { value: "jane" },
//     year: { value: 1996 },
//     job: { value: "hoho" },
// });

// jane.cal();
// console.log(jane);

//funcution

// var age = 25;

// var obj = {
//     name: "heeje",
//     city: "seoul",
// };

// function swap(a, b) {
//     a = 30;
//     b.city = "newyork";
// }

// swap(age, obj);

// console.log(age, obj.city);  // age는 안바뀌고 , obj의 city 는 바뀐다.

// //age 는 primitive 이기 때문에 바뀌지 않음.

//////////////////////인자로 함수 전달////

// let years = [1990, 1992, 1994, 1996, 2000];

// function cal(age, fn) {
//     result = [];
//     for (var i = 0; i < age.length; i++) {
//         result.push(fn(age[i]));
//     }

//     return result;
// }

// function cal2(val) {
//     return 2020 - val;
// }

// var ages = cal(years, cal2);
// console.log(ages);

// function interview(job) {
//     if (job === "student") {
//         return function (name) {
//             console.log(name + " hihi");
//         };
//     } else {
//         return function (name) {
//             console.log(name + " byebye");
//         };
//     }
// }

// var val = interview("student")("heeje");

// closure

// function retirement(retireage) {
//     return function (birth) {
//         var a = " hihi";
//         var age2 = 2020 - birth;
//         console.log(retireage - age2 + a);
//     };
// }

// var retireKorea = retirement(60);

// var retireIsland = retirement(67);

// retireKorea(1996);
// retireIsland(1996);

// // var retirementUS = retirement(66)(1996);

// function interview(job) {
//     return function (name) {
//         if (job === "student") {
//             console.log(name + "hihi");
//         } else {
//             console.log(name + "bybye");
//         }
//     };
// }

// var val = interview("student")("heeje");

var john = {
    name: "heeje",
    age: 25,
    job: "student",
    presentation: function (style, day) {
        if (style === "formal") {
            console.log(
                "good moring" + day + "i'm " + this.name + this.job + this.age
            );
        } else if (style === "friendly") {
            console.log(
                "hey what's up?" + this.name + this.job + this.age + day
            );
        }
    },
};

// john.presentation("formal", "morning");

var jane = {
    name: "jane",
    age: 25,
    job: "pro",
};

john.presentation.call(jane, "friendly", "afternoon"); //  call method

let johnFriendy = john.presentation.bind(jane);

johnFriendy("friendly", "moring");
