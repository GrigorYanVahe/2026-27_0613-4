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

// function Dog(name,breed,age,color){
//     this.name = name
//     this.positionX = 6
//     this.positionY = 10
//     this.breed = breed
//     this.age = age
//     this.color = color
//     this.bark = function(){
//         alert("ruf ruf")
//     }
//     this.walk = function(){
//         this.positionX +=1
//         this.positionY +=0.5
//     }

// }

// function Cat(){

// }

// let dog = new Dog("Rex","Pitbul",4,"black")
// let dog2 = new Dog("Sharik","Gamp", 5,"green")

// let pushok = new Cat()

// let isDog = dog instanceof Dog

// if(pushok instanceof Dog){
//     alert ("Pushoky shun e")
// }

// class Dog {

//     constructor(name,color,breed,){
//         this.name = name
//         this.color = color
//         this.age = age
//         this.breed = breed

//     }

//     move(){

//     }
//     makesound(){
//         alert(this.name)
//     }
//     toWash(){
        
//     }

// }

// let dog1 = new Dog("Hafo", "black", 4, "labrador")
// dog1.makesound()


const output = document.getElementById('output');
const mainMenuBtn = document.getElementById('mainMenuBtn');
const subMenu = document.getElementById('subMenu');


const openSub = document.getElementById('openSub');
const exitSub = document.getElementById('exitSub');

if (openSub) {
    openSub.addEventListener('click', function(e) {
        e.preventDefault();
        if (output) {
            output.innerHTML = "<strong>Մենյուի հաղորդագրություն:</strong> Սեղմվեց «Բացել» ենթամենյուն:";
        }
    });
}

if (exitSub) {
    exitSub.addEventListener('click', function(e) {
        e.preventDefault();
        if (output) {
            output.innerHTML = "<strong>Մենյուի հաղորդագրություն:</strong> Սեղմվեց «Ելք» ենթամենյուն:";
        }
    });
}


window.addEventListener('mousedown', function(e) {
    
    if (mainMenuBtn && !mainMenuBtn.contains(e.target)) {
        let buttonName;
        switch (e.button) {
            case 0: buttonName = "Ձախ"; break;
            case 1: buttonName = "Միջին"; break;
            case 2: buttonName = "Աջ"; break;
            default: buttonName = "Անհայտ";
        }

        if (output) {
            output.innerHTML = `<strong>Մկնիկի հաղորդագրություն:</strong> Սեղմվել է մկնիկի <b>${buttonName}</b> կոճակը (X: ${e.clientX}, Y: ${e.clientY})`;
        }
    }
});


window.addEventListener('keydown', function(e) {
    if (output) {
        output.innerHTML = `<strong>Ստեղնաշարի հաղորդագրություն:</strong> Սեղմվել է <b>${e.key}</b> ստեղնը (Կոդը՝ ${e.code})`;
    }
});