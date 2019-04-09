// var express = require('express');
// var router = express.Router();
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


var express = require('express')
var app = express()

app.get('/',function(req,res){
  res.send('Hola Mundo! en Express :)NOemi')
})
app.post('/',function(req,res){
  res.send('Llamada post misma url noemi')
})
app.put('/user',function(req,res){
  res.send('Recibimos un PUT en /user :) noemi')
})
app.delete('/user',function(req,res){
  res.send('Recibimos un DELETE en /user noemi')
})
app.listen(3000,function(){
  console.log('Aplicaciones de ejemplo escuchando en el puerto 3000!noemi');
})




// module.exports = router;
