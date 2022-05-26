import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import {dobro, soma, tabuada, corprimaria, MaiorNumero, ingressoCinema,} from './se.js'

const server = express();
server.use(cors());
server.use(express.json());

server.get('/dobro/:numero',  (req, resp) => {
    let numero = Number(req.params.numero);

    const d = dobro(numero);

    let resposta = {
        dobro:d
    }
    resp.send(resposta);
})

server.get('/soma', (req, resp) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);

    const x = soma (a,b);

    resp.send({
        soma:x
    })
})

server.get('/tabuada', (req, resp) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);

    let x = tabuada (a,b);

    resp.send({
        tabuada:x
    })
})

server.post('/soma', (req, resp) => {
    const{valores: {a, b} } = req.body;

    const x = soma (a,b);

    resp.send({
        soma:x
    })
    
})

server.post('/dia2/ingressocinema', (req,resp) => {
    const {inteira, meia, diasemana, nacionalidade} = req.body;
    const x = ingressoCinema(inteira,meia,diasemana,nacionalidade);
    resp.send({
        valor: x
    })
})

server.get('/dia2/corprimaria/:cor', (req, resp) => {
    const { cor } = req.params;
    const primaria = corprimaria(cor);
    resp.send({
        primaria: primaria
    })
})

server.post('/dia2/MaiorNumero', (req,resp) => {
    const numeros = req.body;
    const maior = MaiorNumero(numeros);
    resp.send({
        maior: maior
    })
})

server.get ('/dia2/sequencia/:texto/:caracter', (req, resp) => {
    const { texto, caracter } = req.params;
    const freq = frequenciaCaractere (texto, caracter);
    resp.send({
        freq:freq
    })

})



server.listen(process.env.PORT, 
              () => console.log(`API online na porta ${process.env.PORT}`));

