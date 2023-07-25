// const requestData = {
//   username: 'john_doe',
//   password: 'secure_password'
// };

// fetch('https://api.example.com/login', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(requestData)
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error));


fetch('https://fakestoreapi.com/products')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

async function fetchData() {
    const response = await fetch('https://fakestoreapi.com/products',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'soap',
                description: 'silky soap',
                price: 200
            })
        }
    )
    const data = await response.json()
    console.log(data) 
  
}

fetchData();
