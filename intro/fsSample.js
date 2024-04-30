const fs = require('fs');
const http = require('http');
//fs modülü dosya okuma ve yazma işlemleri yapmamızı sağlar. fs modülü nodejs'in default modüllerinden biridir.


//koala resmini oku ve http://localhost:3000/koala adresine gönder
const server = http.createServer((req, res) => {
    fs.readFile('./koala.jpg', (err, data) => {
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}
);