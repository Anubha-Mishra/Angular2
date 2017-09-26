var marks2 = ["Srinivas", "Sarat", "Anubha"];
console.log(marks2.length);
console.log(marks2[2]);
var varname = ["Srinivas", 20, true];
console.log(varname[0]);
console.log(varname[2]);
console.log(varname.length);
// change an item in tuple 
varname[2] = false;
console.log(varname[2]);
var i1 = varname[0], i2 = varname[1], i3 = varname[2];
console.log("Second Item : " + i2);
for (var _i = 0, varname_1 = varname; _i < varname_1.length; _i++) {
    var v = varname_1[_i];
    console.log(v);
}
