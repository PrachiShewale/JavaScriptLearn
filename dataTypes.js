//primitive data types-normal variavle like int char in java -nn bb ss u -->null number boolean bigint string symbol undefined 
let a="Harry"
console.log(typeof a)

//non primitive -objects in java script --key value pairs
const obj={
    "a":12,"b":13
}
console.log(obj)
console.log(obj["a"])
console.log(obj["x"])
console.log(obj.a)


// falsey value-value that can become false if we try to convert them to boolean--- 0,''empty string,unidentified,null,NaN
//  truthy values-value that can become true if we try to convert to boolean----all oters are thruthy
console.log(Boolean(0))
console.log(Boolean(5))


let val=0
if(val){
    console.log("boolean converted to true")
}else{
    console.log("boolean converted to false")
}
let max;
if(max){
    console.log("max is defined")
}else{
    console.log("max is undefined")
}