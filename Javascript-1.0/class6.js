// const showRoom = ["audi", "bmw", "ferrari"];

// console.log(showRoom.pop());

// console.log(showRoom[0]="mercedes");
// console.log(showRoom.push("kheyber"));
// console.log(showRoom);

// console.log(showRoom.length);

// console.log(showRoom.toString());

// const audi ={
//     model:"A9",
//     color:"black",
//     year:2020,
//     engine:"V-8",
// }

// const arr = [{},{},{}]

// const showRoom =[
//     {
//         name:"audi",
//         model:"A9",
//         color:"black",
//         year:2020,
//     },
//     {
//         name:"bmw",
//         model:"m5",
//         color:"black",
//         year:2012,
//     },
//     {
//         name:"ferrari",
//         model:"f8",
//         color:"black",
//         year:2022,
//     }
// ]
// console.log(`car name is ${showRoom[0].name} and model is ${showRoom[0].model}`);

let input=parseInt(prompt("enter a number"));
for(let i=1;i<=10;++i){
    
    if (i==5) {
        console.log("take a break");
        continue
    }
    console.log(`${input} x ${i} =${i*input}`);
}

