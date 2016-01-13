var obj = {a: 1, b: 2}

function f() {
	this.a = '01';
	this.b = '02';
}

f.prototype = {
	c: '03'
}

console.log(Object.assign(obj, new f()));