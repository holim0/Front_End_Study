///////////////////////////////////////
// Lecture: Hoisting


// calculateAge(1999);   // 함수 선언 전에 함수를 호출 -> hoisting 이 되어 잘 작동한다. 

// function calculateAge(year){  // 함수 선언. 
//     console.log(2020 - year);
// }

// //retirement(1990);   // 작동하지 않는다

// var retirement = function(year) {     // 함수의 선언 방식이 아니기 떄문에 hoisting 되지 않는다. (only work on function declaration)
//     console.log(65- (2020- year));
// }

// //variables

// console.log(age); // 작동은 되지만 undefined로 뜬다. (hoisting) -> js 가 변수가 선언되었는지는 알고 있는 것이다. 

// var age = 50;  //global 

// console.log(age);


// function foo(){
//     var age = 65; //local
//     console.log(age);   //local print
// }

// foo();  
// console.log(age);  // global print













///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


calAge(1996);

function calAge(year){
    console.log(2020-year);
    console.log(this);  // this: global object
}


let john = {
    name: 'john',
    year: 1990,
    cal : function () {
        console.log(this);   // this 는 john object 를 가리킨다. 

        function inner() {
            console.log(this);      // window 를 가리킨다. default object = window. -> method가 아니기 때문이다. 
        }

        inner();
    }
};

john.cal();

let mike ={
    name: 'mike',
    year: '1996',
};

mike.cal = john.cal;  //method borrowing 

mike.cal();













