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