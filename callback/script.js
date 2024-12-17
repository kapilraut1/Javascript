
// Callback functions
const downStream=(()=>{
    console.log("Kaps calling callback");
})

const upStream= () =>{
    console.log("1");
    downStream();
}

// another example
const displayFlex = (s)=>
    console.log(s);

const calc= (num1, num2, myCallback)=>{
    let sum = num1 + num2;
    myCallback(sum);
}

// calc(1,2,displayFlex);

// in ansynchronous actions

setTimeout(() => {
    callMe();
    console.log("Hola 1");
}, 1000);

function callMe(){
    console.log("Hola");
}

console.log("hola 3");