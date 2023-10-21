const http = require("http")
const port = 3000;

const rotas = {
  '/': 'Table Rise',
  '/regras': 'Regras para jogar D&D',
  '/login': 'Entre no site',
  '/tablemaps': 'Jogue com seus amigos',
  '/sobre': 'Info sobre o projeto'
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(rotas[req.url]);
})

server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})