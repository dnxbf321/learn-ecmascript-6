'use strict';

class A {
  constructor() {
    this.a = 'a';
  }
  sayIt() {
    console.log(this.a);
  }
}

class B extends A {
  constructor() {
    super();
    this.a = 'b';
  }
  sayIt() {
    super.sayIt();
  }
}
var b = new B();
b.sayIt();