//how to use this function

// const jeff = {

//     face: "@",
//     features:{
//         hair:"black",
//         eyes:"blue",
//         teeth:"white",
//         nose:"black"
//     },
//     // simple anonymus functioon object ke andr value ko dekhta 
//     whodis: function () {
//         console.log(this.face)
//     },
//     butWhoAmI: () => {
//         //fat arrow fucton obj ke bhr ki value to read karta hai
//         console.log(this.face)
//     }
// }
// console.log(jeff.features.eyes)


//// Since fat arrow functions do not have their own this binding,
//// they can be useful in cases where you want to ensure that this 
//// binding refers to a specific object, regardless of how the function is called.
//// However, it's important to note that using a fat arrow function is not always appropriate, 
//// especially when you need dynamic binding of this 
//// based on the function invocation context.



// function Horse(name) {
//     this.name = name;
//     this.poop = function () {
//         console.log('00');
//         return this
//     }
// }

//// javascript constructor function
// const myHorse = new Horse('Secretariat');
// console.log(myHorse.poop())


// spread syntax
// const array = ["hello", "hye", "bye","cycle"];
// const obj = { ...array}; //copy array

// const dos =[...obj]
// console.log(dos)



// function showFace() {
//     return this.face;
// }
// const jeff = {
//     face: "@"
// }

// let a = showFace.call(jeff)
// console.log(a)


// export const Car=(a,b,c)=>{
// // const obj = {
// //     name: "Car",
// //     details: "car",
// //     price: 10000,
// //     getObj: function () {
// //         return `Your car name is ${obj.name},
// //         your car model is ${obj.details}, 
// //         your car price is ${obj.price}`
// //     }
// // }
// // console.log(obj.getObj())
// a=7
// b=8
// c=9
// }



// Array and multiple objects
const person = [
    {
    name:"jeff",
    face: "@",
    features:{
        hair:"black",
        eyes:"blue",
        teeth:"white",
        nose:"black"
    },
},
{
    name:"john",
    face: "@",
    features:{
        hair:"black",
        eyes:"blue",
        teeth:"white",
        nose:"black"
    },
},
{
    name:"jane",
    face: "@",
    features:{
        hair:"black",
        eyes:"blue",
        teeth:"white",
        nose:"black"
    },
}
]
console.log(person[0].features.name)
