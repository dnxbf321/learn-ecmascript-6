'use strict';

class A {
  constructor() {
    this.a = 'a';
  }
  sayIt() {
    console.log(this.a);
  }
  static sayHi() {
    console.log('hi');
  }
}

A.sayHi();

class B extends A {
  constructor() {
    super();
    this.a = 'b';
  }
  sayIt() {
    super.sayIt();
  }
}

console.log('\nclass B');
B.sayHi();
var b = new B();
b.sayIt();
B.sayHi();