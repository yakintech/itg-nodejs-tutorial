const http = require('http'); 
//nodejs projelerinin default yapılandırmasında import yerine require kullanılır. Require anahtar kelimesi ile modüller projeye dahil edilir.

const server = http.createServer((req, res) => {
    res.end('Hello World');
    }
);


server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    }
);