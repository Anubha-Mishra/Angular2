var marks2 : string[] = ["Srinivas","Sarat","Anubha"];
console.log(marks2.length)
console.log(marks2[2]);

var varname=["Srinivas",20,true]

console.log(varname[0]);
console.log(varname[2]);
console.log(varname.length);
// change an item in tuple 
varname[2] = false;
console.log(varname[2]);

var [i1, i2, i3] = varname;
console.log("Second Item : " + i2);
for (var v of varname)
console.log(v);