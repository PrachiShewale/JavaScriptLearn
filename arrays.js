let arr=[1,4,3,5,2];
console.log(arr);
console.log(arr[3])
//undefined
console.log(arr[7])
console.log(arr.length)
arr[6]=7
console.log(arr)//[ 1, 4, 3, 5, 2, <1 empty item>, 7 ] ....element got added at 6th position and inserted empty item at 5
///arrays are mutable
//arrays are objects basically
console.log(typeof arr)
for(let a of arr){
    console.log(a)
}
for(let b in arr){
    console.log(b)
}