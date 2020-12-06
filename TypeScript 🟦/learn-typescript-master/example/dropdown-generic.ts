// interface Format<T> {
//     value: T;
//     selected: boolean;
// }

// const emails: Format<string>[] = [
//     { value: "naver.com", selected: true },
//     { value: "gmail.com", selected: false },
//     { value: "hanmail.net", selected: false },
// ];

// const numberOfProducts: Format<number>[] = [
//     { value: 1, selected: true },
//     { value: 2, selected: false },
//     { value: 3, selected: false },
// ];

// function createDropdownItem<T>(item: Format<T>) {
//     const option = document.createElement("option");
//     option.value = item.value.toString();
//     option.innerText = item.value.toString();
//     option.selected = item.selected;
//     return option;
// }

// // NOTE: 이메일 드롭 다운 아이템 추가
// emails.forEach(function (email) {
//     const item = createDropdownItem<string>(email);
//     const selectTag = document.querySelector("#email-dropdown");
//     selectTag.appendChild(item);
// });

// const logText = <T>(t: T[]): T[] => {
//     console.log(t.length);
//     return t;
// };

// logText<string>(["hi", "bye"]);

// interface LengthType {
//     length: number;
// }

// const logLength = <T extends LengthType>(text: T): T => {
//     console.log(text.length);
//     return text;
// };

// logLength<string>("hi");

interface item {
    name: string;
    price: number;
    stock: number;
}

const shopping = <T extends item>(option: T): T => {
    console.log(option);
    return option;
};

shopping({ name: "heej", price: 100, stock: 59 });
