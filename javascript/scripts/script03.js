let num1 = 123;
let num2 = 123.123;

console.log('num1의 타입:', typeof num1);
console.log('num2의 타입:', typeof num2);

let str1 = '문자열';
let str2 = "string";

console.log('str1의 타입:', typeof str1);
console.log('str2의 타입:', typeof str2);

// 배열은 []를 사용한다.
let arr1 = [1, 2, 3, 4, 5, 6];
// 배열에 여러 종류의 값을 넣어서 사용하더라도 에러가 발생하지 않는다.
let arr2 = [1, '김말이', 10, 123.123];

console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);

for (let i = 0; i < arr1.length; ++i) {
    console.log('arr1[' + i + ']=', arr1[i]);
}

for (let i = 0; i < arr2.length; ++i) {
    console.log(`arr2[${i}]=${arr2[i]}`); // javascript의 format string 문법
}

console.log(arr2[99]); // 없는 index에 접근해도 에러 대신 undefined가 나온다.

let complete = true;

console.log(`complete의 타입 ${typeof complete}`);

// javascript object : {}를 사용한다, 값이 key: value로 되어 있다.
let person = {
    name: "홍길동",
    age: 22,
    eng: 80,
    avg: 77.77
};

// object에 들어있는 값을 꺼내 쓸 때 2가지 방법을 모두 사용할 수 있다.
console.log(`person.name=${person.name}`);
console.log(`person['name']=${person['name']}`);
console.log(`person["name"]=${person["name"]}`);

// 반복문(for...in)으로 object 타입 꺼내기
for (let key in person) {
    console.log(`key=${key}, value=${person[key]}`);
}

// 배열은 for...in을 쓰면 index값이 나온다.
for (let index in arr2) {
    console.log(`arr2의 ${index}번째 값: ${arr2[index]}`);
}

// 배열의 값을 꺼낼 때는 for...of를 쓰면 편하다
// (for...of는 하나씩 순서대로 꺼낼 수 있는 개체들에만 사용할 수 있다. == iterable 인터페이스가 구현된 객체들에 사용할 수 있다.)
for (let value of arr2) {
    console.log(value);
}