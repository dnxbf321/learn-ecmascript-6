var baz;
// 测试重命名，baz 用 var 声明的，可以再次声明
var {bar:baz} = {
  bar: 1
};
console.log('baz:', baz);

// 测试模式匹配
var node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};

// loc 仅是模式，其不被赋值，start 被匹配
var {loc: {start}} = node;
console.log('start', start);


var obj = {
  p: [
    "Hello",
    {
      y: "World"
    }
  ]
};
var {p: [x, {y:z}]} = obj;
console.log('p:', p);
console.log('z:', z);


var {p} = obj;
console.log('p:', p);


let {toString: s} = 123;
console.log(s.call(456));