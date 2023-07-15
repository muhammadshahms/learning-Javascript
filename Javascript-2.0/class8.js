async function app() {
        let KarachiWeather = new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("27 Deg")
                }, 2000)

        }).then((error) => {
                console.error("Error fetching Karachi Weather:", error)
        });

        let LahoreWeather = new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("21 Deg")
                }, 5000)
        })

        console.log("Fetching Karachi Weather Please wait ...")
        let KarachiW = await KarachiWeather
        console.log("Fetched Karachi Weather: " + KarachiW)
        console.log("Fetching Lahore Weather Please wait ...")
        let LahoreW = await LahoreWeather
        console.log("Fetched Lahore Weather: " + LahoreW)
        
}
app()
const app2 = async () => {
        console.log("Hey I am waiting...")
}

const main1 = async () => {
        console.log("Welcome to weather control room")
        let a = await app()
        // let b = await app2()
}
main1()


// callbacks
// function myFirst() {
//         console.log("Hello");
// }

// function mySecond() {
//         console.log("Goodbye");
// }

// myFirst();




// let myPromise = new Promise((res, rej) => {
//     let x = 2;
//     // some code (try to change x to 5)
//     if (x === 0) {
//         res("200: success");
//     } else {
//         rej("404: error");
//     }
// })

//     .then(
//         (value) => {
//             console.log("request Accept " + value);
//         },
//         (error) => {
//             console.log("request rejected " + error);
//         }
//     );



// let Prom = new Promise((res, rej) => {
//         setTimeout(() => {
//                 res("Hello your request has been accepted")
//         }, 2000)
// }).then(
//         (value) => {
//                 console.log(value)
//         }


// )


let arr = [];
let row = 3;
let col = 3;
let h = 0

// Loop to initialize 2D array elements.
// if (row === col && col === row) {
//     for (let i = 0; i < row; i++) {
//         arr[i] = [];
//         for (let j = 0; j < col; j++) {
//             arr[i][j] = h++;
//         }
//     }
//     let arrString = arr.map(row => row.join(' ')).join('\n');
//     console.log(arrString);

// }
// else {
//     console.log("Invalid");
// }



// let a = "aaa , bbb , ccc"
// let c = a.replaceAll(",", " ")
// console.log(c)