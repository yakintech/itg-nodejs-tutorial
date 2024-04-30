//ornek.txt dosyasına yazı yazma işlemi

const fs = require('fs');

fs.writeFile('ornek.txt', 'Hello World', (err) => {
    if (err) {
        console.log(err);
    } else {
       console.log('File is written successfully');
    }
});