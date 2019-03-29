var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


var express = require('express')
var app = express()
fs= require('fs')

app.get('/Tecnologia',function(req,res){
  var html=fs.readFileSync('inicio.html');
  //res.writeHead(200,{'Content-type':'text/html'});
//  res.write(html);
//  res.render(html);
res.send(html)

})
app.get('/contacto',function(req,res){
  res.send('Llamada post misma url TI')
})
app.put('/user',function(req,res){
  res.send('Recibimos un PUT en /user :) noemiTI')
})
app.delete('/user',function(req,res){
  res.send('Recibimos un DELETE en /user noemiTI')
})
app.use(function(req, res, next) {
  //console.error(err.stack);
  res.status(404).send("Página no encontrada o no existe")
});

app.listen(3000,function(){
  console.log('Aplicaciones de ejemplo escuchando en el puerto 3000!noemiTI');
})











module.exports = app;
