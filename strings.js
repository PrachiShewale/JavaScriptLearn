let name="String";//or 'String'sequence of characters and manipulate text
console.log(name[0]="s");

// template literals use  back ticks `` o define a string instaed of single or double quotes
let a1="value of a1";
let b1="value of b1";
let sentence=`this is ${a1} and this is ${b1}`;
console.log(sentence);
//we can insert variables directly in a string using template literals this is called string inter polation

//escape sequences
// to inset  a special character in a string we use escape sequences
let a='String\'s'
console.log(a);


//string methods
let myName="012345";
console.log(myName.length)//property//will ignore escape sequence charcters
console.log(myName.toUpperCase())
console.log(myName)
console.log(myName.slice(2,4));//prints 2nd and 3rd index
console.log(myName.slice(4))//4 to end
console.log(myName.replace("34","56"))
console.log(myName)
console.log(myName.trim())//removes white spaces
console.log(myName.concat("hihi"))
console.log("hehe"+"wujw")
////string are immutable
console.log(myName[3])

let value="99";
console.log(Number(value)+18);
//if variable is not convertable than js gives and error Not A Number NaN
console.log(typeof NaN)//its basically a number

//type coersion
//happens when js is dealing with two values a t the same time
//basically converting one of the value to type of the other to complete the operstion
console.log('I am a boy ,my age is'+23+' years');
let n='1'+1
n=n-1;
console.log(n)
let m=2+5+'3'+4+'7'
console.log(m)
let k='10'-'3'-'2'+7
console.log(k)
