// //get method
// const promise = fetch('https://jsonplaceholder.typicode.com/todos')
// promise.then(res => res.json())

//     .then(data => {
//         return data
//     })
//     .then(data => console.log('hey', data[0].title))
//     .catch(err => console.log(err))

try{
    throw new Error('404 page not found')
    asbdkasdjsafmsafk
}
catch(err){
    console.log(err)
}




// const requestData = {
//     username: 'john_doe',
//     password: 'secure_password'
// };

// fetch('https://jsonplaceholder.typicode.com/todos', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(requestData)
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));