async function myDisplay() {
    let check = new Promise(function(resolve, reject) {
      resolve("I love You !!");
    });
    document.getElementById("demo").innerHTML = await check;
    let data=await check;
    console.log(data);
  }

  myDisplay();