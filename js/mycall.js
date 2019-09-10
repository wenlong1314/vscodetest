Function.prototype.MyCall = function (context) {
    context = context || window;
    let args = [...arguments].slice(1);
    context.fn = this;
    let result = context.fn(...args);
    delete context.fn;
    return result;
};
let Person = {
    name1: "person",
    age: "18",
    sayHello() {
        return `hello ${this.name1}`;
    },
    sayHello1() {
        console.log(`hello ${this.age}`);
    }
};
let Person1 = {
    name1: "Person1",
    age: "12",
};
//帶返回值的方法
console.log(Person.sayHello()); //不改变this
console.log(Person.sayHello.call(Person1)); //用系统方法改变this
console.log(Person.sayHello.MyCall(Person1, Person1)); //用自己方法改变this
//不帶返回值的方法
Person.sayHello1(); //不改变this
Person.sayHello1.call(Person1); //用系统方法改变this
Person.sayHello1.MyCall(Person1, Person1); //用自己方法改变this
