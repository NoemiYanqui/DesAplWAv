// var express = require('express');
// var app = express();
//
// app.get('/',function(req,res){
//   res.send('Hola mundo! en Express :)')
// });
//
// app.listen(3000,function(){
//   console.log('Aplicacion de ejemplo escuchando en el puerto 3000!')
// })

var express = require('express');
var app = express();
//app.use(express.static('public'))
//app.use('/static',express.static('public'));
app.use(express.static('public/views'));
//app.use(express.static('views'));


app.get('/',function(req,res){
 // res.send('Hola Mundo! en Express :)Miapp')
 res.sendFile(__dirname +'/index.html')
})
app.post('/',function(req,res){
  res.send('Llamada post misma url Miapp')
})
app.put('/user',function(req,res){
  res.send('Recibimos un PUT en /user :) Miapp')
})
app.delete('/user',function(req,res){
  res.send('Recibimos un DELETE en /user Miapp')
})

app.use(function(req,res){
  res.status(404).sendFile(__dirname+'/error.html')
})

app.use(function(err,req,res,next){
  console.error(err.stack)
  res.status(500).send('Algo salió mal!')
})
app.listen(3000,function(){
  console.log('Aplicaciones de ejemplo escuchando en el puerto 3000! Miapp');
})



