const fs = require('fs');

// fs.writeFile('userData.txt', 'Hello, this is a text message!', (err) => {
//     if (err) {
//         console.log('Error Writing File', err);
//     } else {
//         console.log('File written successfully');
//     }
// });

// fs.readFile('userData.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log('Error Reading File', err);
//     } else {
//         console.log('File read successfully', data);
//     }
// });

function writeFilePromise(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('File written successfully');
            }
        });
    });
}

function readFilePromise(fileName, encoding){
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, encoding, (err, data) =>{
            if (err) {
                reject('Error Reading File: ' + err.message);
            } else {
                resolve('Data: ' + data);
            }
        })
    }

    )
}


writeFilePromise('userData.txt', 'Hello, this is a test message!')
    .then((writeMessage) => {
        console.log(writeMessage);
        return readFilePromise('userData.txt', 'utf8');
    })
    .then((readMessage) => {
        console.log(readMessage);
    })
    .catch((error) => {
        console.log(error);
    });