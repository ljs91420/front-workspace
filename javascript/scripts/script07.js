// 함수 선언
function func1() {
    return 10;
}

function func2() {
    console.log(10); // 10
}

// 함수 사용(리턴이 없는 함수의 결과는 undefined)
console.log("func1() result:", func1()); // func1() result:10
console.log("func2() result:", func2()); // func2() result:undefined

// 함수 이름 뒤에 ()를 붙이지 않으면 함수 자체를 값으로 사용
console.log(func1);
console.log(func2);

// 함수를 변수에 담아놓고 나중에 사용할 수도 있다.
let f1 = func1;
let f2 = func2;

console.log(f1()); // 10

// 함수를 매개변수로 전달받아 나중에 실행하게끔 설계할 수도 있다.(아래 예제에서 func3의 a를 callback 함수라고 부른다.)
function func3(a) {
    return a();
}

console.log(func3(func1)); // 10

// 함수 표현식
const add = function myFunctionName(a, b) {
    console.log(`${a}를 전달받았습니다.`); // 10를 전달받았습니다.
    console.log(`${b}를 전달받았습니다.`); // 11를 전달받았습니다.
    console.log(`이제 두 값을 더하겠습니다.`); // 이제 두 값을 더하겠습니다.
    return a + b;
}

console.log(add(10, 11)); // 21

console.log(getAnswer()); // answer
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
console.log(getAge()); // age

// 화살표 함수(함수 표현식을 더 짧고 간편하게 사용)
const getNumber = () => {
    return "number";
};

// 매개변수 사용
const getAvg = (a, b, c) => {
    return (a + b + c) / 3;
}

console.log(getAvg(11, 13, 23)); // 15.666666666666666

// 매개변수가 딱 하나일 때는 ()를 생략할 수 있음
const printHiMessage = name => {
    // console.log(name + '님 안녕하세요!');
    console.log(`${name}님 안녕하세요!`);
};

printHiMessage('김철수'); // 김철수님 안녕하세요!

const printPersonInfo = info => {
    console.log(`${info.name}님 안녕하세요!`); // 최민식님 안녕하세요!
    console.log(`나이: ${info.age}살`); // 나이: 50살
    console.log(`수학점수: ${info.math}점`); // 수학점수: 87점
    info.greeting('두식'); // 안녕! 두식아! 잘 지내니?
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

console.log(getPrice()); // 1500

// 랜덤 색상을 뽑는 함수를 한 줄로 줄일 수 있다.
const colors = ['red', 'orange', 'blue', 'purple'];
const getRandomColor = () => colors[parseInt(Math.random() * colors.length)];

for (let i = 0; i < 10; ++i) {
    console.log(getRandomColor());
}

// 연습: 다음 내용을 화살표 함수로 변경해보기
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// ask(
//     "동의하십니까?",
//     function() { alert("동의하셨습니다."); },
//     function() { alert("취소 버튼을 누르셨습니다."); }
// );

// const ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
// }

// ask(
//     "동의하십니까?",
//     () => alert("동의하셨습니다."),
//     () => alert("취소 버튼을 누르셨습니다.")
// );

/*
    # 다음 함수를 정의하고 올바르게 동작하는지 테스트 해보세요.

        function 버전, arrow function 버전으로 2번씩 만들기
    
        1. 전달한 문자가 알파벳이면 true를 반환, 아니면 false를 반환하는 함수
        2. 전달한 숫자가 3의 배수이면 true를 반환, 아니면 false를 반환하는 함수
        3. 전달한 숫자에 따라 문자열 "짝수입니다." 또는 "홀수입니다."를 반환하는 함수
        4. 숫자를 전달하면 해당 숫자의 모든 약수를 배열로 반환하는 함수
        5. 전달한 정수가 소수라면 true를 반환하고 아니면 false를 반환하는 함수
        6. 메세지와 횟수를 전달하면 해당 메세지를 전달한 횟수만큼 반복하는 함수
*/

// 1. 전달한 문자가 알파벳이면 true를 반환, 아니면 false를 반환하는 함수
function checkAlphabet(ch) {
    return (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z');
}

const checkAlphabet2 = ch => (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z');

const isAllAlphabet = text => {
    for (ch of text) {
        if (!checkAlphabet(ch)) {
            return false;
        }
        return true;
    }
};

console.log(checkAlphabet('a'));
console.log(checkAlphabet2('a'));

let word = 'airplane';
let word2 = 'air플레인';
console.log(`${word}는 영어만으로 된 단어인가요? ${isAllAlphabet(word)}`);
console.log(`${word2}는 영어만으로 된 단어인가요? ${isAllAlphabet(word2)}`);

// 2. 전달한 숫자가 3의 배수이면 true를 반환, 아니면 false를 반환하는 함수
function checkMul3(number) {
    return number % 3 == 0;
}

const checkMul3_2 = number => number % 3 == 0;

console.log(checkMul3(6));
console.log(checkMul3_2(6));

// 3. 전달한 숫자에 따라 문자열 "짝수입니다." 또는 "홀수입니다."를 반환하는 함수
function checkEvenOrOdd(number) {
    number % 2 == 0 ? '짝수입니다.' : '홀수입니다.';
}

const checkEvenOrOdd2 = number => number % 2 == 0 ? "짝수입니다." : "홀수입니다.";

// 번외 : "짝수입니다." 경고창 또는 "홀수입니다." 경고창을 띄워주는 함수
const checkEvenOrOdd3 = number => number % 2 == 0 ? alert("짝수입니다.") : alert("홀수입니다.");

console.log(checkEvenOrOdd(3));
console.log(checkEvenOrOdd2(3));
// checkEvenOrOdd3(3);

// 4. 숫자를 전달하면 해당 숫자의 모든 약수를 배열로 반환하는 함수
function getSubmultipleArr(number) {
    let arr = [];
    let index = 0;
    for (let i = 1; i <= number; ++i) {
        if (number % i === 0) {
            arr[index++] = i;
        }
    }
    return arr;
}

const getSubmultipleArr2 = number => getSubmultipleArr(number);

console.log(getSubmultipleArr(27));
console.log(getSubmultipleArr2(27));

// 5. 전달한 정수가 소수라면 true를 반환하고 아니면 false를 반환하는 함수
function checkPrime(number) {
    return getSubmultipleArr(number).length == 2;
}

const checkPrime2 = number => getSubmultipleArr2(number).length == 2;

console.log(checkPrime(157));
console.log(checkPrime2(157));

// 6. 메세지와 횟수를 전달하면 해당 메세지를 전달한 횟수만큼 반복하는 함수
function printMessages(message, number) {
    for (let i = 0; i < number; ++i) {
        console.log(message);
    }
}

const printMessages2 = (message, number) => {
    for (let i = 0; i < number; ++i) {
        console.log(message);
    }
}

printMessages('Hello', 3);
printMessages2("Hello", 3);