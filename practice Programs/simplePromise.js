
    let g = new Promise((resolve, reject) => {
        let a = 1 + 1;
        if (a == 2) {
            resolve('success');
        }
        else {
            reject('failed');
        }
    })
    g.then((message) => {
        console.log('This is in then: ' +message);
    }).catch((message) => {
        console.log('This is in catch: ' + message);
    })