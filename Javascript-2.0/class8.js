async function app() {
        let KarachiWeather = new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("27 Deg")
                }, 2000)

        }).catch((error) => {
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
        return [KarachiW, LahoreW]
}

const app2 = async () => {
        console.log("Hey I am waiting...")
}

const main1 = async () => {
        console.log("Welcome to weather control room")
        let a = await app()
        let b = await app2()
}
main1()
