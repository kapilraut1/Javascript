async function test(){
   let x= await fetch('https://jsonplaceholder.typicode.com/todos/1');
   let data = await x.json();
          console.log(data);
          return "44";
}

async function main(){
    let watch = test();
    console.log("watch");

}
 