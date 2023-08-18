const asynprom = async function () {

    
const PeshawarProm = new Promise((res, rej) => {
    let temp = 30
    if (temp >= 20) { 
        setTimeout(() => {
            res("current Peshawar temp is hot " + temp)
        },4000)
    }
    else {
        rej("current Peshawar temp is cold " + temp) //10
    }
})

        .then((value) => console.log(value))
        .catch((err) => console.log(err))
    const KarachiProm = new Promise((res, rej) => {
        let temp = 20
        if (temp >= 20) { 
            setTimeout(() => {
           res("current Karachi temp is hot " + temp)
                
            },3000)
        }
        else {
            rej("current karachi temp is cold " + temp) //10
        }
    })

        .then((value) => console.log(value))
        .catch((err) => console.log(err))



    
    const karanchi = await KarachiProm
    const Peshawar = await PeshawarProm
    return [karanchi,Peshawar]
}

asynprom()