const promise = fetch('https://jsonplaceholder.typicode.com/posts')

promise.then(res => res.json())

.then(data => {
    return data
})
.then(data => console.log('hey',data[0].title))
.catch(err => console.log(err))