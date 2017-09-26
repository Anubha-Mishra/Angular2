class Product {
    protected name: string;
    protected price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    print(): void {
        console.log(this.name);
        console.log(this.price);
    }
}
var per1 = new Product("iPhone7 Plus", 70000);
per1.print();


class TaxProduct extends Product {
    protected tax: number;
    constructor(name: string, price: number, tax: number) {
        super(name, price);
        this.tax = tax;
    }
    print(): void {
        super.print();
        console.log(this.tax);
    }
    getNetPrice(): number {
        return this.price + this.price * this.tax / 100;
    }
}

var tp = new TaxProduct("Dell Laptop", 65000, 12);
tp.print();
console.log("Net Price : " + tp.getNetPrice());


interface Person {
    name: string;
    age: number;
    toString: () => string;
}

interface Student extends Person {
    course: string;
}
let p1: Person = {
    name: "Richards", age: 40,
    toString: function () {
        return this.name + ":" + this.age;
    }
};
console.log(p1.toString());
