// const logText = (text: string): string => {
//     console.log(text);
//     return text;
// };

// logText("hi");

// 인터페이스에 제네릭 선언하는 방법

// interface hi {
//     value: string;
//     selected: boolean;
// }

interface hi<T> {
    value: T;
    selected: boolean;
}

const value: hi<string> = { value: "hi", selected: true };
