async function app() {
    const karachiPromise = new Promise((res, rej) => {
        let temp = 5
        if (temp <= 50) {
            setTimeout(() => {
                res("27 Deg")
            }, 2000)
        } else {
            rej("very hot")
        }
    })

    karachiPromise.then((value) => {
        console.log(value);
    },
        (err) => {
            console.log(err);
        }
    )
    console.log(karachiPromise);

    const lahorePromise = new Promise((res, rej) => {
        let temp = 5
        if (temp <= 50) {
            setTimeout(() => {
                res("21 Deg")
            }, 100)
        } else {
            rej("very hot")
        }
    })
    console.log(lahorePromise);


    lahorePromise.then((value) => {
        console.log(value);
    },
        (err) => {
            console.log(err);
        }
    )
    console.log("fetching Karachi weather");
    let karachiWeather = await karachiPromise
    console.log("fetching Lahore weather");
    let LahoreWeather = await lahorePromise
    return [karachiWeather, LahoreWeather]
}
async function mainn() {
    console.log("weather control");
    
}
async function main() {
    let app2 = await mainn()
    let app1 = await app()
}
main()