let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333333333333335
console.log(parseInt(a / b)); // 몫만 구하고 싶을 때
console.log(a % b); // 1

a = 10, b = "10", c = "11";

// ==은 10과 "10"을 같은 값이라고 생각한다.
console.log(a == b); // true
console.log(a == c); // false

// !=은 10과 "10"을 다르지 않다고 생각한다.(타입이 달라도 같은 10이니까)
console.log(a != b); // false
console.log(a != c); // true

// ===, !==은 10과 "10"이 다른 값이라고 생각한다.(타입이 다르니까)
console.log(a === b); // false
console.log(a !== b); // true