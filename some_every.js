var arrayOne = [43, 51, 31, 71]

const condition = (x)=>x > 40
console.log('Every - greater than 40: '+arrayOne.every(condition));

const even = (y) => y % 2 === 0
console.log('For Some Values: '+arrayOne.some(even));
