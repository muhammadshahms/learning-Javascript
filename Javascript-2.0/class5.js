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


// // simple function
// function app(a,b) {
//     return a+b
// }
// console.log(app(1,6))

// // anonymus function
// const af = function(a,b){
//     return a+b
// }
// console.log(af(4,6))

// // fat arrow function
// const fa = (a,b) => {
//     return a+b
// }
// console.log(fa(4,6))

// const arr = [1,2,3,4];
// const obj = {...arr}
// console.log(obj);


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


// export const arry = [1,2,3,4];


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

// export function add(a,b) {
//     return a + b;
// }
// export let a = "adkajkdjaskdb"
//// Array and multiple objects
// const person = [
//     {
//         name: "jeff",
//         face: "@",
//         features: {
//             hair: "black",
//             eyes: "blue",
//             teeth: "white",
//             nose: "black"
//         },
//     },
//     {
//         name: "john",
//         face: "@",
//         features: {
//             hair: "black",
//             eyes: "blue",
//             teeth: "white",
//             nose: "black"
//         },
//     },
//     {
//         name: "jane",
//         face: "@",
//         features: {
//             hair: "black",
//             eyes: "blue",
//             teeth: "white",
//             nose: "black"
//         },
//     }
// ]
// console.log(person[0].features.hair)

// let cars = [{
//     name: "BMW",
//     model: "X5",
//     engineType: "v8",
//     color: "black",
// },
// {
//     name: "Audi",
//     model: "X3",
//     engineType: "v6",
//     color: "white",
// }
// ]

// const showroom = cars.map((car) => {
//     return `the ${car.name} is ${car.color}`
// })
// console.log(showroom);
// document.getElementById('liid').innerHTML=showroom

const showRoom=[
    {
        name:"Mehran",
        model:"X5",
        engineType:{
            name:"v8",
            description:"jafjkkja"
        }
    },
    {
        name:"ChinChi",
        model:"150",
        engineType:"v6",
    }
]


console.log(showRoom.length);


// console.log(`${showRoom[0].name} engine type ${showRoom[0].engineType.name} `);




for(let i=0;i<=showRoom.length;i++){
    console.log(showRoom[i].name);
}






