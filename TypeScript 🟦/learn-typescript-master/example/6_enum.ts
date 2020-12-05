enum Shoes {
    nike = "yes",
    Adidas = "no",
}

const value = Shoes.nike;

console.log(value);

const ask = (q: string) => {
    if (q === "yes") {
        console.log("정답");
    } else {
        console.log("오답");
    }
};

ask(Shoes.nike);
