var express = require('express'),
app = express(),
http = require('http').Server(app),
port = process.env.PORT || 3000;
io=require('socket.io')(http)
user= require('./models/user');


app.set('view engine','jade');
app.use('/static', express.static('public'));
app.get('/',function (req,res) {
  res.render('main');
});

io.on('connection',function(socket){
  console.log('Usuario conectado!');

  socket.on('crear',function(data){
    user.create(data,function(rpta){
      io.emit('nuevo',rpta);
    });
    console.log(data);
  })
  socket.on('disconnect',function(){
    console.log('Usuario desconectado!')
  })
})
user.show(function(data){
  io.emit(´'listar',data);
});
http.listen(port, function(){
  console.log('Servidor conectado en *:'+ port);
})
