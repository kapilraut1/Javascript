let a = prompt("Enter a number");
let b= prompt("Enter a number");
if(isNaN(a)|| isNaN(b)){
    throw SyntaxError("hola the error is there");
}
let sum= parseInt(a) + parseInt(b);
//console.log(sum);
// alert(sum);
let x=3;
function main(){
try {
    console.log("The sum is", sum*x);
    return true;
} catch (error) {
    console.log("The problem is", error);
    return false;
}
finally{
    console.log("The country is great.")
}
}
let d= main();