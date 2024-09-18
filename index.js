// 16-9-24
// ................................................Sychronous  (Line by line show hoga)....................................................
// console.log("one");
// console.log("two");
// console.log("three");

// ......................................Asychronous  (phalay start show hoga phir end hoga then hello world last may show hoga )........................................................................
// console.log("start");
// setTimeout(()=>{
//     console.log("hello world");
// }, 5000);
// console.log("End");

// ......................................................call back  or pyramid of doom ...............................................................
// function sum(a,b) {
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback) {
//     sumCallback(a,b)
// }
// calculator(3,5,sum)


//......................................................Callback hell (data 1 kay 2sec kay baath data 2 ayga)...................................................................................
// function getData(dataId,getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
    
// }
// getData(1,()=>{
//     console.log("loading for data 2");
//     getData(2,()=>{
// console.log("loading for data 3");
//     })
// })

// ......................................................Promises.............................................................................................
// let promise = new Promise((resolve, reject)=>{
//     console.log("This is a promise");
//           resolve("I am resolved")        
// })



// let promise = new Promise((resolve, reject)=>{
//     console.log("This is a promise");
//           reject("Some error caught")        
// })



// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );
  // 18-9-24
  // .....................Asychronous ........................................................................................
  // setInterval(myFunction ,1000);
// function myFunction(){
//   let d = new Date();
//   document.getElementById("demo").innerHTML = 
//   d.getHours() + ":" + 
//   d.getMinutes() + ":" +
//   d.getSeconds() ;
// };

// ........................................promise................................................................
// let complete =true;
// let prom =new Promise((resolve, reject) => {
//   if(complete){
//     resolve("I am success")
//   }
//   else{
//     reject("I am failure")
//   }
// })
// console.log(prom);



// let promise = new Promise((resolve, reject) => {
//   let x = "hellow world";
//   let y = "hellow world";
//   if(x==y){
//       resolve();
//   }
//   else{
//       reject();
//   }
// })
// promise.then(function(){
//   console.log("I am resolve");
// })
// .catch(function(){
//   console.log("I am a failure");
// })


// then -> handle resolve
// reject -> work as a catch

// function prom (complete) {
//   return new Promise(function(resolve,reject){
//    if(complete){
//        resolve("i am resolve");
//    }
//    else{
//        reject("i am failed");
//    }
// });
// }
// let onFulfilment = (result) =>{
//    console.log(result)
//    }
//    let onRejection = (error) =>{
//        console.log(error);
//    }
//    prom(true).then(onFulfilment)
//    prom(true).catch(onRejection)



// function prom (complete) {
//   return new Promise(function(resolve,reject){
//     console.log("Fetching data ,please wait");
//     setTimeout(()=>{
//    if(complete){
//        resolve("i am resolve");
//    }
//    else{
//        reject("i am failed");
//    }
// },4000);
// });
// }
// let onFulfilment = (result) =>{
//    console.log(result)
//    }
//    let onRejection = (error) =>{
//        console.log(error);
//    }
//    prom(true).then(onFulfilment)
//    prom(true).catch(onRejection)




function prom (a,b) {
  return new Promise(function(resolve,reject){
    console.log("Fetching data ,please wait");
    let division= a/b;
    setTimeout(()=>{
   if(a,b){
       resolve("Your answer :" + division);
   }
   else{
       reject("Failed to calculate");
   }
},2000);
});
}
prom(12,9).then((result)=>{
  console.log(result);
})
.catch((error)=>{
  console.log(error);
})




