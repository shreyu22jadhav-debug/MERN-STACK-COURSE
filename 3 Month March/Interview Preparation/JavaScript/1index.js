console.log("we using javaScript") ///see msg print

// variables
const name="Hoc" //fix value we can not change 
var surname="tech" //globle we can change anywhere in file
let middIename="solutions" //we can use in block schop

//functions 
//normal function
function getMyName(){
    console.log("function 1")
}


getMyName()
 // Arrow function
 const getYourName = () =>{
    console.log("function 2")
 }

 getMyName()

 //parameter
 const getMyFullName = (data ="No Name") => {
    console.log("My Full Name",data)
 }
 const MyName ="shreya jadhav"
 
 getMyFullName(MyName)

 const test ="shrutika patil"
 getMyFullName(test)

 getMyFullName()

 //Array  index     0        1         2        3
 const items =["  test 1 ,  test 2,   test 3,  test 4"]
 console.log(items,"Full item print")
 console.log(items[0],"print only index 0 -(First value)")



 //object  -key value paire
 const studentDetails ={
//  key  -  value
    Name : "shreya jadhav",
    city : "karad"
 }
 console.log(studentDetails," => studentDetails Full object")
 console.log(studentDetails," => studentDetails name only")
