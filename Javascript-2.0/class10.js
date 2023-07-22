const promise = fetch('https://jsonplaceholder.typicode.com/todos')
promise.then(res => res.json())
.then(data => {
    console.log('hey',data[0].title);
})
.catch(err => console.log(err))










