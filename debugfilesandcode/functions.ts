function add(n1: number, n2: number): number {
    return n1 + n2;
}
console.log(add(10, 80));




let sub = function (n1: number, n2?: number): number {
    if (n2) {
        return n1 - n2;
    }
    else {
        return n1 - 10;
    }

}
console.log(sub(50, 20));
console.log(sub(50));


function print2(message: string, ...names: string[]) {
    for (let n of names)
        console.log(message + " " + n);
}
print2("Hai","Srinivas","Sarat");
print2("Hai");