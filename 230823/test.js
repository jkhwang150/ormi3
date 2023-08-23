/* 실습은 chrome 개발자 도구 콘솔창에서 진행함. */
/* window.alert('hello world!'); */

/* var a;
let b;
const c=0; */

/* 타입 체크 - 원시 타입*/
let str1 = 'hello';
let str2 = str1;
console.log(str2); 

str1 = 'world';
console.log(str2); // str2에 할당된 값은 여전히 'hello' 입니다.

/* 문자열 */

let mypw = "qwer123";
console.log(mypw.length); // 문자열 길이
mypw[0] = 1; // 불변의 성질로 인해 문자열 변경 x
console.log(mypw);

let mypw2 = "mkmk";
console.log(mypw+mypw2); // 문자열 연산자

/* 문자열 메소드 - indexOf, lastIndexOf */

let text = "Next Level";
console.log(text.indexOf("Next"))
console.log(text.indexOf("Level")) // 특정 문자열의 인덱스를 검색하여 반환
console.log(text.lastIndexOf("Next"))
console.log(text.lastIndexOf("Level"))// 검색의 순서가 반대이지만 인덱스의 번호는 그대로임.

/* 문자열 메소드 - match */

console.log("Naevis 우리 ae, ae들을 불러봐".match(/ae/));
// g 플래그가 없는 경우 : ["ae"]와 일치하는 하나의 문자열을 배열의 형태로 반환

console.log("Naevis 우리 ae, ae들을 불러봐".match(/ae/g));
// g 플래그가 있는 경우 : ["ae", "ae", "ae"]와 일치하는 모든 문자열을 배열의 형태로 반환

console.log("Naevis 우리 ae, ae들을 불러봐".match(/[a-zA-Z]\w+/g));
// w+ => 하나 이상의 문자로 이루어진 단어를 찾습니다 : ["Naevis", "ae", "ae"]

/* 문자열 메소드 - replace + slice*/

console.log("제껴라 제껴라 제껴라 huh!".replace("제껴라", "check it out"));// 하나만 바꾸기
console.log("제껴라 제껴라 제껴라 huh!".replace(/제껴라/g, "check it out"));// 일치하는 모든 문자열 바꾸기
console.log("중심을 잃고 목소리도 잃고".slice(7)); // 7번째 인덱스부터 
console.log("중심을 잃고 목소리도 잃고".slice(7, 14)); // 7~14번째 인덱스
console.log("중심을 잃고 목소리도 잃고".slice(-3)); // -3번째 인덱스부터 14이므로 11부터
console.log("중심을 잃고 목소리도 잃고".slice(-3, 13)); // -3(11)~13번째 인덱스

/* 문자열 메소드 - split + trim + padStart*/

console.log("La la la la la la".split(" "));
// ["La", "la", "la", "la", "la", "la"] 공백으로 구분

console.log("La la la la la la".split(""));
// ["L", "a", " ", "l", "a", " ", "l", "a", " ", "l", "a", " ", "l", "a", " ", "l", "a"] 한문자씩 구분

console.log("La-la-la-la-la-la".split("-", 3));
// ["La", "la", "la"] -으로 구분

console.log("         abc  ".trim());
// "abc" 공백제거

let str = '99'
console.log(str.padStart(5, '0')); // '99'를 5자리 채웁니다. 부족한 부분은 0으로 채웁니다.
// "00099"

/* 문자열 메소드 - toLowerCase + toUpperCase*/

console.log("What's the name? Black mamba".toLowerCase());
// "what's the name? black mamba" 소문자로 전환

console.log("Watch me while I make it out".toUpperCase());
// "WATCH ME WHILE I MAKE IT OUT" 대문자로 전환









