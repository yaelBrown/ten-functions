"use strict";

function isTrue(bool) {
  return bool === true
}

console.log(isTrue(true));             // true
console.log(isTrue(false));            // false
console.log(isTrue(0));                // false
console.log(isTrue(null));             // false
console.log(isTrue("true"));           // false
console.log(isTrue("Banana"));         // false
console.log(isTrue([1, 2]));           // false




function isFalse(bool) {
  return bool === false;
}

console.log(isFalse(false));             // true
console.log(isFalse(true));              // false
console.log(isFalse(0));                 // false
console.log(isFalse(null));              // false
console.log(isFalse(""));                // false
console.log(isFalse("Banana"));          // false
console.log(isFalse([1, 2]));            // false




function not(input) {
  return !input === true;
}

console.log(not(false));                  // true
console.log(not(0));                      // true
console.log(not(""));                     // true
console.log(not(null));                   // true
console.log(not(NaN));                    // true
console.log(not(undefined));              // true
console.log(not(true));                   // false
console.log(not("something)"));            // false
console.log(not(Infinity));               // false
console.log(not(123));                    // false




function addOne(num) {
  return parseFloat(num) + 1;
}

console.log(addOne(0)       );             // 1
console.log(addOne(2)       );             // 3
console.log(addOne(-5)      );             // -4 
console.log(addOne(5.789)   );             // 6.789
console.log(addOne(Infinity));             // Infinity
console.log(addOne("2")     );             // 3
console.log(addOne("0")     );             // 1
console.log(addOne("banana"));             // NaN
console.log(addOne(true)    );             // NaN
console.log(addOne(NaN)     );             // NaN




function isEven(val) {
  return parseFloat(val) % 2 === 0;
}

console.log(isEven(2)        );           // true
console.log(isEven(-8)       );           // true
console.log(isEven(0)        );           // true
console.log(isEven("42")     );           // true
console.log(isEven(1)        );           // false
console.log(isEven("-3")     );           // false
console.log(isEven(false)    );           // false
console.log(isEven("banana") );           // false




function isIdentical(val, val2) {
  return val === val2;
}

console.log(isIdentical(3, 3)                     ); // true
console.log(isIdentical(false, false)             ); // true
console.log(isIdentical("hello", "hello")         ); // true
console.log(isIdentical(3, 3.0)                   ); // true
console.log(isIdentical(undefined, undefined)     ); // true
console.log(isIdentical(2, "2")                   ); // false
console.log(isIdentical("javascript", "java")     ); // false




function isEqual(val, val2) {
  return val == val2;
}

console.log(isEqual(3, "3")                      ); // true
console.log(isEqual("abc123", "abc123")          ); // true
console.log(isEqual(true, 1)                     ); // true
console.log(isEqual(0, false)                    ); // true
console.log(isEqual(4, -5)                       ); // false
console.log(isEqual("java", "javascript")        ); // false




function or(val, val1) {
  return val || val1;
}

console.log(or(true, true)                    );// true
console.log(or(true, false)                   );// true
console.log(or(false, true)                   );// true
console.log(or(false, false)                  );// false
console.log(or("hello", "world")              );// "hello" (this behavior is non-obvious, research more!)




function and(val, val1) {
  return val && val1;
}

console.log(and(true, true)                    );// true
console.log(and(true, false)                   );// false
console.log(and(false, true)                   );// false
console.log(and(false, false)                  );// false
console.log(and("hello", "world")              );// "world" (this behavior is non-obvious, research more)




function concat(val, val2) {
  return val.toString() + val2.toString();
}

console.log(concat("code", "up")       );         // "codeup"
console.log(concat("connect", 4)       );         // "connect4"
console.log(concat("hello", "world")   );         // "helloworld"
console.log(concat(4, 2)               );         // "42"
console.log(concat(true, true)         );         // "truetrue"


/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
