/* 증감연산자 */
let num = 3; // 증감연산자는 할당연산자를 통해 할당된 값에만 사용 가능합니다.
console.log("증감연산 : ", ++num); // 4
console.log("증감연산 : ", num++); // 5 (출력하고 나서 연산을 합니다!)
console.log("증감연산 : ", --num); // 4
console.log("증감연산 : ", num--); // 3 (출력하고 나서 연산을 합니다!)

/* 비교연산자(값은 boolean으로 반환됩니다.) */
console.log("비교연산 : ", 2 > 3); // false
console.log("비교연산 : ", 2 >= 3); // false
console.log("비교연산 : ", 2 < 3); // true
console.log("비교연산 : ", 2 <= 3); // true
console.log("비교연산 : ", 2 == 3); // false
console.log("비교연산 : ", 2 === 3); // false

/* 숫자형 메소드 - parseInt 문자열을 정수형으로 변환 */
document.write(`parseInt(false) : ${parseInt('30')} <br>`); //30
document.write(`parseInt('hello') : ${parseInt('hello')} <br>`); //NaN
document.write(`parseInt('30b') : ${parseInt('30b')} <br>`);// 30
document.write(`parseInt('b30') : ${parseInt('b30')} <br>`); //NaN
document.write(`parseInt('33.33') : ${parseInt('33.33')} <br>`); //33

/* 숫자형 메소드 - toString 정수형을 문자형으로 변환 */
let num = 5;
document.write(`num.toString() : ${typeof num.toString()} <br>`); //string
document.write(`num.toString() : ${(3).toString()} <br>`); // 3
document.write(`num.toString(2) : ${(3).toString(2)} <br>`); // 11

/* 논리 자료형(Boolean) */

let x = 5;
let y = 10;
let z = 5;

console.log(x > y); // false
console.log(x < y); // true
console.log(x >= z); // true
console.log(x <= z); // true
console.log(x === z); // true
console.log(x !== y); // true