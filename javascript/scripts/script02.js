// 자바스크립트에는 정해진 변수 타입이 없다.
// 심지어 변수를 선언하지 않고도 사용할 수 있다.
a = 10;
console.log(a);

a = '김말이';
console.log(a);

// var로 변수를 선언할 수 있지만 같은 이름으로 다시 선언하는 것을 막지 못한다.
var b = 10;
var b = 12;

console.log(b);

// 값을 초기화하지 않으면 undefined라는 것이 들어있다.(값이 없다는 뜻)
var c;
console.log(c);

let d = 123;
// let d = 30; // let은 제대로 중복 선언을 막아준다.
console.log(d);
d = 1111;
console.log(d);
d = '야끼만두';
console.log(d);

const e = 'ABCD';

// e = 'CCCC'; // const로 만들어진 변수에 할당된 값은 변경이 불가능하다.

console.log(e);