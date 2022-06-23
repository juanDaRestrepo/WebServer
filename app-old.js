
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    const persona = {
        id: 1,
        nombre: 'Daniel'
    }
    res.write(JSON.stringify(persona))
    res.end();
})
.listen( 8080 )
console.log('Escuchando en el puerto 8080')