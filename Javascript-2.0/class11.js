
// // let json_data={
// //     title: 'soap',
// //     description: 'silky soap',
// //     price: 200
// // }
// // async function fetchData() {
// //     const response = await fetch('https://fakestoreapi.com/products',
// //         {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json'
// //             },
// //             body: JSON.stringify(json_data)
// //         }
// //     )
// //     const data = await response.json()
// //     console.log(data) 

// // }

// // // async me .then ki jagah await lagate hain or .then bhi laga skte ho

// // fetchData();

// // fetch('https://jsonplaceholder.typicode.com/posts')
// //     .then(res => res.json())
// //     .then(data => {
// //         console.log(data);
// //         console.log(JSON.stringify(data));
// //     })
// //     .catch(err => console.log(err));


// async function promiss(){
// const prom= await fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     header:{
//         'Content-Type':"application/json"
//     },
//     body:JSON.stringify({
//         title:'soap',
//         description:'silky soap',
//         price:200
//     })
// })
// const _data =await prom.json()
// console.log(_data);
// }


// promiss()



const arr = [1,2,3,45,54,35,43,5]
arr.filter((value,index)=>{
    if (value % 2 ==! 0 ){
        console.log("odd numbers...."+value);
    
    }
    else{
    console.log();

}
})