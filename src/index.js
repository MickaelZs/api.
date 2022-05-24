import 'dotenv/config'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());

server.get('/ping', (req, resp) => {
    resp.send('pong');

})

server.get('/dobro/:numero',  (req, resp) => {
    let numero = Number(req.params.numero);
    let dobro = numero * 2;

    let resposta = {
        dobro:dobro
    }


    resp.send(resposta);

})

server.get('/soma', (req, resp) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);

    let x = a + b;

    resp.send({
        soma:x
    })
})

server.get('/tabuada', (req, resp) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);

    let x = a * b;

    resp.send({
        tabuada:x
    })
})


server.get('/corprimaria/:cor', (req,resp) => {
    let primaria = cor1 == "Azul" || cor1 == "Amarelo" || cor1 == "Vermelho" (req.query.primaria);


    resp.send({
        primaria: x
    })


})



server.listen(process.env.PORT, 
              () => console.log(`API online na porta ${process.env.PORT}`));

