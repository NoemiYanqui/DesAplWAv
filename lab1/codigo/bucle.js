var http=require('http');
var manejador=function(solicitud,respuesta){
  var i=0;
//  console.log(i);
  while(true){
    respuesta.write(i+'-->');
    i++;
  }
};
var servidor=http.createServer(manejador);
servidor.listen(8080);
