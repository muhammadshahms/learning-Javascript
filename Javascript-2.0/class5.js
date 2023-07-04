//how to use this function

// const jeff = {
//     face: "@",
//     whodis: function () {
//         console.log(this)
//     },
//     butWhoAmI: () => {
//         console.log(this)
//     }
// }
// console.log(jeff.whodis())


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


//// spread syntax
// const array = ["hello", "hye", "bye"];
// const obj = { ...array };
// console.log(obj)



// function showFace() {
//     return this.face;
// }
// const jeff = {
//     face: "@"
// }

// let a = showFace.call(jeff)
// console.log(a)

