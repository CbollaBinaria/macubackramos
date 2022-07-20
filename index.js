const express = require('express');
const app = express();
const router = express.Router();
const Contenedor = require('./server');
const listado = new Contenedor('./productos.txt');

app.use(express.json());
app.use('', router);
router.use(express.urlencoded({ extended: true }));

//<-------------------------------------------------------Handlebars

const { engine } = require('express-handlebars')


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});
//<--------------------------------------------------------Subida y obtención de productos
let productos = listado.getAll();


router.get('/api/productos', (req, res)=>{
    const response =  listado.getAll()
    res.render('products', {response})
});




router.get('/api/productos/:id', (req, res)=> {
    let id = req.params.id;
    let producto = productos.find(el => el.id == id);
    res.json(producto);
});

router.post('/api/productos/', (req, res) => {
    let producto = req.body;
    listado.saveProduct(producto)
    res.redirect('/api/productos/')
})


app.listen(8080, () => console.log('Server Running'))