const fs = require('fs');
let data = fs.readFileSync('informaton.json');
let informaton = JSON.parse(data);

console.log(informaton);
