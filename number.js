var a = 0x11;
console.log(a);

console.log(isFinite(15));

console.log(Number.isInteger(1));

console.log(Math.sign('abc'));

// console.log(2 ** 3);

var arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 2, -1);
console.log(arr);

console.log(Object.prototype.toString.call(arr));

for(
let [index, value]
 of[1, 2, 3].entries()) {
console.log(index); // 0, 1, 2
console.log(value); // 1, 2, 3
}