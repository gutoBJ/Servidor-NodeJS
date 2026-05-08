// importando o módulo nativo HTTP
// esse módulo serve para criar servidor Node
const http = require("http")
const users = require('./mock/users') // armazenando o array de objetos criado na variavel users 

const server = http.createServer( // criando um servidor
    (request, response) => { // ele precisa de uma função como argumento
        // passando a requisição do lado do client
        // e a resposta do servidor

        console.log(`Request Method: ${request.method} | Endpoint: ${request.url}`)

        if (request.url === "/users" && request.method === "GET") {
            response.writeHead(200, { "Content-Type": "application/json" })
            response.end(JSON.stringify(users))
            return // serve para não entrar em outros if 
        }

        if (request.url === "/contacts" && request.method === "GET") {
            response.writeHead(200, { "Content-Type": "text/html" })
            response.end('<h1>Você acessou o endpoint /contacts com o método GET')
            return
        }

        if (request.url === "/" && request.method === "GET") {
            response.writeHead(200, { "Content-Type": "text/html" })
            // passando o status code e o tipo de conteudo da resposta (Body da requisição) no Header da requisição
            response.end('<h1>A turma 10 ama ter aula sexta a noite</h1>')
            // passando o valor do conteúdo (Body da requisição)
        } else {
            response.writeHead(404, {"Content-type": "text/html"})
            response.end("<div>Não encontrado</div>")
        }

    }
)

server.listen(3001, () => console.log("O servidor está online na porta 3001"))
// para que o servidor escute as requisições na porta passada
// o segundo argumento passado é uma função que serve para mostrar uma mensagem
// avisando que o servidor está rodando

// a url do servidor local seria: http://127.0.0.1:3001/