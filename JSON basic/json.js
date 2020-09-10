
//1. obeject to json

const rabbit ={

    name: 'tori',
    color: 'white',
    size : null,
    birth : new Date(),

};


json = JSON.stringify(rabbit, (key, value) =>
{
    console.log(`key : ${key}, value : ${value}`);
    return value;
});

console.log(json);


//2. json to object

console.clear();

json = JSON.stringify(rabbit);

const obj = JSON.parse(json, (key, value) =>{
    return key=== 'birth' ? new Date(value) : value;
});

console.log(obj.birth);