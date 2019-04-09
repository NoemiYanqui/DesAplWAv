var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    producto = require('./models/prod'),
    user = require('./models/user')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'jade')

app.get('/', function (req, res) {
    res.send('Hola Mundo');
})
app.get('/producto', producto.show);
app.post('/producto', producto.create);
app.post('/producto/update', producto.update);

app.get('producto/update/:id',producto.ShowForId);
app.post('/producto/delete', producto.delete);
app.get('/producto/delete', producto.delete);
app.get('/producto/create',(req,res)=>{
    res.render('productoCreate')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/', user.create);
app.post('/login', user.login);
app.get('/table', function (req, res) {
    res.render('table')
})

app.listen(9090, function () {
    console.log('Iniciando!')
})
