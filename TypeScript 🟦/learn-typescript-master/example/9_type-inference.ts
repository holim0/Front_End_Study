import { extends } from "../quiz/2_address-book/.eslintrc";

var a = "a";

function logA(a = "a") {
    var b = 10;
    return b;
}

interface Dropdown<T> {
    value: T;
    title: string;
}

interface Detailed<K> extends Dropdown<K>{
    message: string;
    tag :K;
}
const items: Dropdown<string> = {
    value: "10",
    title: "a",
};
const item2 : Detailed<string>{
    
}

