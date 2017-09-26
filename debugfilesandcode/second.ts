var g: number = 1;
class Test {
    static sv: number = 2;
    iv: number = 3;
    print(): void {
        var i: number = 4;
        console.log("Local : " + i);
        console.log("Instance variable : " + this.iv);
        console.log("Static variable : " + Test.sv);
        console.log("Global Variable : " + g);
    }
}
var obj = new Test();
obj.print();


var i: number = 1;

while (i <= 20) {
    console.log(i);
    i++;
}

var marks: number[] = [ 10,30,40,80,120 ];
for (var idx in marks) {
    console.log(`Marks for student ${ parseInt(idx)+1} are  ${marks[idx]}`);
    }

    for (let m of marks){
        console.log(m);
        }

    