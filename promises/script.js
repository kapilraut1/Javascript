    let p1= new Promise((resolve, reject)=>{
        let x=0;
        if(x==1){
            resolve("success 1");
        }
        else{
            reject("Failed");
        }
    })



    let p2= new Promise((resolve, reject)=>{
        let x=1;
        if(x==0){
            resolve("success 2");
        }
        else{
            reject("Failed");
        }
    })

//Promise.resolve
let p4= Promise.reject(124);

p4.then((value) => {
    console.log(value);
    // Expected output: 123
  }).catch((err)=>
console.log(err))
  

   //let p3= Promise.all([p1,p2]);
   // let p3= Promise.allSettled([p1,p2]);
   // let p3= Promise.race([p1,p2]);
   //let p3= Promise.any([p1,p2]); // whichever resolves first
 //p3.then((a)=>
    //console.log(a)
    //).catch((err)=>
    //console.log("No wor"));

