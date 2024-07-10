// 함수 선언
function func1() {
    return 10;
}

function func2() {
    console.log(10);
}

// 함수 사용(리턴이 없는 함수의 결과는 undefined)
console.log("func1() result:", func1());
console.log("func2() result:", func2());

// 함수 이름 뒤에 ()를 붙이지 않으면 함수 자체를 값으로 사용
console.log(func1);
console.log(func2);

// 함수를 변수에 담아놓고 나중에 사용할 수도 있다.
let f1 = func1;
let f2 = func2;

console.log(f1());

// 함수를 매개변수로 전달받아 나중에 실행하게끔 설계할 수도 있다.(아래 예제에서 func3의 a를 callback 함수라고 부른다.)
function func3(a) {
    return a();
}

console.log(func3(func1));

// 함수 표현식
const add = function myFunctionName(a, b) {
    console.log(`${a}를 전달받았습니다.`);
    console.log(`${b}를 전달받았습니다.`);
    console.log(`이제 두 값을 더하겠습니다.`);
    return a + b;
}

console.log(add(10, 11));

console.log(getAnswer());
// console.log(getAge());

// function으로 만든 함수는 코드 아래 부분에서 선언하더라도 위쪽에서 사용할 수 있다.(끌올된다, 호이스팅)
function getAnswer() {
    return "answer";
}

// 함수 표현식으로 만든 함수는 코드 아래 부분에 있으면 사용할 수 없다.(변수의 경우에는 선언만 호이스팅되고 대입은 호이스팅되지 않는다.)
const getAge = function () {
    return "age";
}

// 이러한 문제가 발생하지 않도록 함수의 선언은 소스 코드 맨 위에 두는 것이 바람직하다.
console.log(getAge());

// 화살표 함수(함수 표현식을 더 짧고 간편하게 사용)
const getNumber = () => {
    return "number";
};

// 매개변수 사용
const getAvg = (a, b, c) => {
    return (a + b + c) / 3;
}

console.log(getAvg(11, 13, 23));

// 매개변수가 딱 하나일 때는 ()를 생략할 수 있음
const printHiMessage = name => {
    // console.log(name + '님 안녕하세요!');
    console.log(`${name}님 안녕하세요!`);
};

printHiMessage('김철수');

const printPersonInfo = info => {
    console.log(`${info.name}님 안녕하세요!`);
    console.log(`나이: ${info.age}살`);
    console.log(`수학점수: ${info.math}점`);
    info.greeting('두식');
};

// object의 value로 함수를 사용하여 해당 object의 메서드로 활용할 수 있다.
printPersonInfo({
    name: '최민식', 
    age: 50, 
    math: 87, 
    greeting: function (name) {
        console.log(`안녕! ${name}아! 잘 지내니?`);
    }
});

// 함수의 내용이 return 한 줄 밖에 없는 경우 {}와 return은 생략 가능하다.
const getPrice = () => 1500;

console.log(getPrice());

// 랜덤 색상을 뽑는 함수를 한 줄로 줄일 수 있다.
const colors = ['red', 'orange', 'blue', 'purple'];
const getRandomColor = () => colors[parseInt(Math.random() * colors.length)];

for (let i = 0; i < 10; ++i) {
    console.log(getRandomColor());
}