const graphql_url = `http://localhost:9000/`;

async function fetchGreeting() {
    const response = await fetch(graphql_url, {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify({
            query: `
                query{
                    greeting
                }
            `
        })
    });

    // const responseBody = await response.json();
    // console.log(data)
    const {data} = await response.json();
    return data
}

fetchGreeting()
    .then(({greeting}) => {
        const title = document.querySelector('h1');
        title.textContent = greeting;
    })