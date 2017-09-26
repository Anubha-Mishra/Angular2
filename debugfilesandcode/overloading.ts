function f1(x: number): void;
function f1(s: string): void;
function f1(x: number, s: string): void;
function f1(n: any, s?: any): void {
    console.log(`value is ${n}. Type is ${typeof (n)}`); if (s)
        console.log(`Second parameter is ${s}`);
}
f1("Abc");
f1(10);
f1(100, "PQR");

var nextEven = (n: number) => n % 2 == 0 ? n + 2 : n + 1;
console.log(nextEven(17));

var nextOdd = (n: number) => {
    console.log("Before : " + n);
    n = n % 2 != 0 ? n + 2 : n + 1;
    console.log("After : " + n);
}

console.log(nextOdd(21));