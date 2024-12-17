setInterval(() => {
    checkClock();
}, 1000);

let ti = document.getElementById("ti");


function checkClock(){
let d= new Date();
ti.innerHTML= 
d.getHours()+ ":" +
d.getMinutes() + ":" +
d.getSeconds();
}