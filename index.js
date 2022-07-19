const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());
app.use('/api/productos', router);
let productos =[];




router.get('/', (req, res)=>{
    res.json(productos)
});

router.get('/:id', (req, res)=> {
    let id = req.params.id;
    let producto = productos.find(el => el.id == id);
    res.json(producto);
});

router.post('/', (req, res) => {
    let producto = req.body;
    producto.id = productos.length +1;
    productos.push(producto);
    res.json(producto)
})


app.listen(8080, () => console.log('Server Running'))