// console.log("My first JS code")
// console.log(45+45)


// let name = "Vahe"
// let surname = "Grigoryan"
// const test = "ggggg"
// console.log(name + "" + surname)
// console.log(test)

// let arajinbajak = "kapuyt"
// let erkrordbajak = "kanach"


// let erordbajak = arajinbajak
// arajinbajak=erkrordbajak
// erkrordbajak = erordbajak



// console.log("first", arajinbajak)
// console.log("second", erkrordbajak)

















// let objectArr = [
//     {
//         name: "Gagik",
//         surname: "Iskandaryan",
//         cars: ["Audi", "Pezho","Toyota"],
//     },
//     {   name:"Felix",
//         surname:"Yexyan",
//         cars:["BMW","Mercedes-Benz","Depal"],
//     },
//     {   name: "Emish",
//         surname: "Karapetyan",
//         cars: ["Dodge","Lada Priora","Lixiang"]

//     }   
// ]

// // info(objectArr)
// //     function  info(object){
// //         for(let i =0; i<objectArr.length;i++){


// //         }
// //         return 1
// //     }

// function info(object){
//     for(let i = 0;i<objects.length;i++){


//     }
// }   



// function makeStack() {
//     let values = []

//     return {
//         push:function(newValue) {
//             values.push(newValue)

//         },
//         pop:function(){
//             return values.pop()
//         },
//         isEmpty:function(){
//             return values.length ==0
//         },
//         count:function(){
//             return  values.length
//                 },
//         includes:function(newValue){
//             return  values.includes(newValue)

//         }       
//     }
// }

// let myStack = makeStack()
// console.log("Stack is empty", myStack.isEmpty())

// myStack.push("Barev")
// myStack.push("Dzez")
// myStack.push("Hajox")
// myStack.push("Lav es")

// console.log("Stack is empty", myStack.isEmpty())
// console.log(myStack.includes("Barev"))
// console.log(myStack.pop())
// console.log(myStack.count())


// let username = ""

// while (true) {
//     username = prompt("Enter your name")

//     if (username == "") {
//         continue;
//     }
//     if (username.toLowerCase() == "exit") {
//         break;
//     }
//     else {
//         console.log(username)
//     }
// // }

// let arr1 = ["gago", 1, 2, 5, "Hasmik", 25, 58, "Husik", 281, "Jozef", "gurgen", 653, "papik"]
// let arr2 = ["Colak", 253, "Soghomon", 542555, "Manvel", 351313131, "Paylak", 65, 65, 65, 65, 654, "Hovhannes"]
// let strings = []
// let numbers = []

// for (let i = 0; i <= arr1.length; i++) {
//     if (typeof arr1[i] == "string") {
        
//         strings.push(arr1[i])
//     }
//     else if (typeof arr1[i]== "number"){
//         numbers.push(arr1[i])
//     }
// }

// for (let i = 0; i <= arr2.length; i++) {
//     if (typeof arr2[i] == "string") {
        
//         strings.push(arr2[i])
//     }
//     else if (typeof arr2[i]== "number"){
//         numbers.push(arr2[i])
//     }
    
// }
// console.log(numbers)
// console.log(strings)




// CLOSURE

// function sum(x){

//     return function(y){
//         return x+y
//     }

// }

// let add1 = sum(2)
// console.log(add1(5));
// console.log(add1(8))

// function makeStack() {
//     let values = []

//     return {
//         push:function(newValue) {
//             values.push(newValue)

//         },
//         pop:function(){
//             return values.pop()
//         },
//         isEmpty:function(){
//             return values.length ==0
//         },
//         count:function(){
//             return  values.length
//                 },
//         includes:function(newValue){
//             return  values.includes(newValue)

//         }       
//     }
// }

// let myStack = makeStack()
// console.log("Stack is empty", myStack.isEmpty())

// myStack.push("Barev")
// myStack.push("Dzez")
// myStack.push("Hajox")
// myStack.push("Lav es")

// console.log("Stack is empty", myStack.isEmpty())
// console.log(myStack.includes("Barev"))
// console.log(myStack.pop())
// console.log(myStack.count())









// function sum(x){
//     console.log(x);

//     if(x<=0){
//         return 1 
//     }

//     else{
//         return x * (sum(x-1))
//     }
    
// }
// console.log(sum(5));





// const person = {
//     cars:{
//         model: "BMW",
//         year: 2007,
//         engine:{
//             litr:1,4
//             hp: 540,
//             brand:"BMW"
//         }


//     }
// }

