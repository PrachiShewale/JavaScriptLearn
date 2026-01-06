//if ,if else 
    //alert =shows msg prompt=
let a = prompt("hello,plz tell us your name...")//prompt takes imput as string
a=Number.parseInt(a)//convert the string to number
console.log(a)
console.log(typeof a)
if(a<18){
    alert("you cannot vote")
}
else if(a>=18 && a<60){
    alert("you are adult you can vote")
}
else{
    alert("you are senior citizen you can vote")
}
let b=(a==18)?alert("you are 18"):alert("you are not 18")
let c=(a<18)?alert("you cant vote"):alert("you can vote")
console.log(b)
console.log(c)

//switch case
switch(a){
    case 18:
        alert("you are 18")
        break;
    case 22:
        alert("you are 22")
        break;
    default:
        alert("you are of age "+a)
}