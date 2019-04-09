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

//var express = require('express');
//var app = express();
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
app.use(express.static('public'));
app.use(express.static('views'));


app.get('/',function(req,res){
  res.sendFile(__dirname +'/index.html')
})
app.post('/',function(req,res){
  res.send('Llamada post misma url')
})
app.put('/user',function(req,res){
  res.send('Recibimos un PUT en /user :)')
})
app.delete('/user',function(req,res){
  res.send('Recibimos un DELETE en /user')
})
app.listen(3000,function(){
  console.log('Aplicaciones de ejemplo escuchando en el puerto 3000!');
})
