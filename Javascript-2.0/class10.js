const app=  async()=>{
const prom = await fetch('https://jsonplaceholder.typicode.com/posts')

.then(res => res.json())
.then(data => {
    return data
})

.then(data => document.getElementById("pid").innerHTML=data[0].title)

.catch(err => console.log(err))
}
app()