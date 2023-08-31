//importar o express

const express = require('express')
const app = express()

// GET = Receber informação e POST = enviar informação

app.get('/', (requisicao, resposta) => {
    resposta.send("estou utilizando o Express!")
})