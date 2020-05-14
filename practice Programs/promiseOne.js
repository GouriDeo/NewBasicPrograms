var name = true;
function samplePromise() {
    return new Promise((resolve, reject) => {
        if (name) {
            resolve('Gouri');
        }
        else {
            reject('Dev');
        }
    })
}
samplePromise().then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
}) 