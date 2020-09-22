
//obeject literal
let john = {
    fName : 'John',  // key와 value
    lastName : 'Smith',
    brithYear : 1990, 
    job : 'teacher',
    isMarried : false,
    calcAge : function(){    //method
        this.age = 2020-this.brithYear;  // this 는 현재 object 를 가리킨다. this.age property 추가 
    }
};


john.calcAge();     //propertiy 추가 


console.log(john);


















// console.log(john.firstName);    // . 으로 value 에 접근할 수 있다. 

// console.log(john['isMarried']) // 배열 속 key 값으로도 value 에 접근할 수 있다. 

// let x = 'brithYear';

// console.log(john[x]);


// //mutate obeject

// john.job = "programmer";

// console.log(john.job);


// //new Obeject syntax
// let jane = new Object();  // 새로운 객체 형성. 

// jane.name = 'jane';


