function curry(...args1) {
    var curry1 = function (...args2) {
        args1.push(args2);
        return curry1;
    }
    curry1.toString = function () {
      
        return args1.reduce((a, b) => {
            return a + b;
        })
    }
    return curry1;
}

console.log(curry(1, 2, 3));
console.log(curry(1, 2)(3));
console.log(curry(1)(2)(3));
console.log(curry(1)(1)(2)(3));
console.log(curry(1, 2)(1)(2)(3));