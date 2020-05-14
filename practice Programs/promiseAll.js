const pictureOne = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('first picture');
    },6000)    
})

const pictureTwo = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('Second picture');
    },4000)
})

const pictureThree = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('Third picture');
    },2000)
})

Promise.all([
    pictureOne,
    pictureTwo,
    pictureThree
]).then((mesage) => {
    console.log(mesage);
}).catch((message) =>{
    console.log(message)
})


/*pictureOne.then((message) =>{
    console.log(message);
})
pictureTwo.then((message) =>{
    console.log(message);
})
pictureThree.then((message) =>{
    console.log(message);
})

*/