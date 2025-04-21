const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

module.exports = { fetchData };