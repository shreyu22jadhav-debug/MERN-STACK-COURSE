//javascript
//React.js
//node.js

// Synchronous and Asychronous
//callbacks
//promises
// asyn/swait

//1.set Timeout

//console.log(1)
//console.log(11)
//setTimeout(() => {
  //  console.log(2)
//},1000)

//console.log(3)

//1.call backs

const getData = (callbacksfunction) => {
    console.log("Hello Get Data")
    callbacksfunction()
}

 // const callbacksfunction =() => {
   // console.log("call back function called")

 // getData(callbacksfunction)

 getData(()=> console.log("122121"))


 // 2.promises -asynchronous
 // resolve /pending /reject

 const mypromises = new Promise((resolve,reject) => {
    const error = false 
    if(error == true){
        resolve("promise resolved")
    }else{
        reject("promise reject")
    }})
    mypromises.then((res) => console.log(res)).catch((error) => console.log(error))
    
// 3 .async /await
const mypromise = async () => {
    //APT integration
    //DB call -add delete update  get from DB -await
}
