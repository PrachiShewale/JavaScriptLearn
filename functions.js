//separation of logic can be done using functions
//a block of code used to perform a specific task
let a=1;
let b=2;
let c=3;
console.log(average(a,b,c));
function average(a,b,c){
    return (a+b+c)/3;
}

//other way
const avg=(a,b,c)=>{return (a+b+c)/3;};
console.log(average(4,5,6));

//
let marks={
    sam:74,
    ram:85,
    sham:90
};
console.log(marks);
for(let m in marks){
    console.log("The marks for "+m+" are "+marks[m]);
}
for(let i=0;i<=Object.keys(marks).length-1;i++){
    console.log("The marks of "+Object.keys(marks)[i]+" are "+Object.values(marks)[i])
}

//correct 
// let correctNo=8;
// let input;

// while(input!=correctNo){
//         input=prompt("Enter a number");
//     }
   
// alert("You entered the correct number");
//works in browser

const mean =(x,y,z,m,v)=>{
    return (x+y+z+m+v)/5;
};
console.log("The mean of 5 numbers is "+mean(6,4,7,6,8));