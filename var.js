let a = 1;
{
	let b = 2;
}

function f1() {
  let c = 5;
  if (true) {
    let c = 10;
  }
  console.log(c);
}
// 测试块作用域
f1();

if (true) {
	console.log('d', d);
	var d = 3;
}

if (true) {
	console.log('e', e); // 此处应抛错
	let e = 4;
}