const { Router } = require('express');

const express = require('express')
const app = express();

const routerMascotas = Router();
const routerPersonas = Router();

app.use('/mascotas', routerMascotas);
app.use('/personas', routerPersonas);

routerMascotas.use(express.json());
routerPersonas.use(express.json());
routerMascotas.use(express.urlencoded({extended : true}));
routerPersonas.use(express.urlencoded({extended : true}))

app.use(express.static('files'));

const mascotas = [];

routerMascotas.get('/listar', (req, res) => {
    res.json(mascotas)
})

routerMascotas.post('/guardar', (req, res) => {
    
    mascotas.push(req.body);
    res.json(req.body)
})



const PORT = 8080;
const server = app.listen(PORT, ()=> {
    console.log('Server escuchando')
});

server.on('error', error => console.log(error))

















// const frase = "Hola Mundo como estan"

// app.get('/api/frase', (req, res) => {
//     res.send(frase)
// })

// app.get('/api/letras/:num', (res,req)=>{
//     const num = parseInt(req.params.num);

//     if (isNaN(num)){
//         return res.send({error: 'El parametro no es un numero'})
//     }
//     if (num < 1 || num > frase.length) {
//         return res.send({error: 'Fuera de rango'})
//     }

//     res.send(frase[num - 1])
// })

// app.get('/api/palabras/:num', (req, res) => {
//     const num = parseInt(req.params.num)

//     if (isNaN(num)){
//         return res.send({error : 'El parametro ingresado no es un numero'})
//     }
//     const palabras = frase.split(' ');
//     if (num < 1 || num > palabras.length){
//         return res.send({error: 'Está fuera de rango'})
//     }

//     res.send(palabras[num -1])
// })