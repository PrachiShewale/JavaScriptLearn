//if ,if else 
    //console.log =shows msg prompt=
let a = console.log("hello,plz tell us your name...")//prompt takes imput as string
a=Number.parseInt(a)//convert the string to number
console.log(a)
console.log(typeof a)
if(a<18){
    console.log("you cannot vote")
}
else if(a>=18 && a<60){
    console.log("you are adult you can vote")
}
else{
    console.log("you are senior citizen you can vote")
}
let b=(a==18)?console.log("you are 18"):console.log("you are not 18")
let c=(a<18)?console.log("you cant vote"):console.log("you can vote")
console.log(b)
console.log(c)

//switch case
switch(a){
    case 18:
        console.log("you are 18")
        break;
    case 22:
        console.log("you are 22")
        break;
    default:
        console.log("you are of age "+a)
}
let x=45;
let y=(x===18)?"its 18":"its not";
console.log(y)

let ya='18'
console.log(ya==18)

//=== checks if both sides are exactly the same both value and type
// == (Loose Equality): Checks if two values are equivalent, even if they are different types. It uses Type Coercion to convert the values to a common type before comparing.
// === (Strict Equality): Checks if two values are identical in both value and type. It does not perform type conversion; if the types differ, it immediately returns false.
//similarly != and !==

// logical operators && || !

//expressions --produce values
//statements are full sentenses that are translated to actions

//a template literal is a expression
//we cannot insert statement in it

//this can be done with ternary operation ...exception
let lit=`I am ${ya>=18?"Older than or equal to 18 years":"I am younger than 18 years"} old`
console.log(lit)