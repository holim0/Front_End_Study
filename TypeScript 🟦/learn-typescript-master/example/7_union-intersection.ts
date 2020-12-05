function logMessage(value: string) {
    console.log(value);
}

logMessage("hi");

// 유니온 타입
const log = (v: string | number) => {
    console.log(v);
};

interface Dev {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}
//공통 속성만 찾을 수 있다.
const someone = (man: Dev & Person) => {};
