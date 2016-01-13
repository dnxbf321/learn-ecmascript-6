var baz;
var {bar:baz} = {
  bar: 1
};
console.log(baz);

var node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};

var {loc: {start}} = node;
console.log(start);


var obj = {
  p: [
    "Hello",
    {
      y: "World"
    }
  ]
};
var {p: [x, {y:z}]} = obj;
// var {p} = obj;
console.log(z);
// console.log(p);


let {toString: s} = 123;
console.log(s);