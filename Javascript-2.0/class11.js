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

// async me .then ki jagah await lagate hain or .then bhi laga skte ho

fetchData();
