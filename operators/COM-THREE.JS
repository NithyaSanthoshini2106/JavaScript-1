let a = 10;
let b = 5;
let c = "10";

console.log("a =", a);
console.log("b =", b);
console.log("c =", c); // c is a string

// Equal to (==) – compares values, not types
console.log("a == c →", a == c);  // true (values are equal)

// Strict equal (===) – compares value AND type
console.log("a === c →", a === c); // false (number !== string)

// Not equal (!=) – compares values
console.log("a != b →", a != b);  // true

// Strict not equal (!==) – compares value AND type
console.log("a !== c →", a !== c); // true

// Greater than (>)
console.log("a > b →", a > b);    // true

// Less than (<)
console.log("a < b →", a < b);    // false

// Greater than or equal to (>=)
console.log("a >= 10 →", a >= 10); // true

// Less than or equal to (<=)
console.log("b <= 5 →", b <= 5);  // true
