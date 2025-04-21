const { fetchData } = require('./api');
const { power } = require('./math');


async function run() {
    const data = await fetchData();
    console.log('Data from API:', data);
    
    const result = power(2, 3);
    console.log('2^3 =', result);
}

run();