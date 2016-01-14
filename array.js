for(
let val
 of[2, 3, 4]) {
console.log(val);
}

// 测试 Array.from
function f() {
  var args = arguments;
  var args2 = Array.from(args);
  console.log(args);
  console.log(args2);
}
f(1, 2, 3);

// 测试有第二个参数的情况
var arrFrom = Array.from({0: -1, 1: -2, length: 2}, function(v) {
	return v.toFixed(2, 10);
});
console.log(arrFrom);

// 测试 Array.of
var arrOf = Array.of(1, 2, 3, [3, 4], 5);
console.log(arrOf);