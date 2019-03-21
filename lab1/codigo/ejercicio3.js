var http=require('http');
fs= require('fs');
parser=require('./funcion_ruta.js'),
p=parser.parse_vars;

var html=fs.readFileSync('./inicio.html');
var html1=fs.readFileSync('./galeria.html');

http.createServer(function(solicitud, respuesta){
  var rpta=p(solicitud),

  parametros=rpta['parametros']
  console.log(rpta);
  console.log(parametros);
  for(var i=0; i<parametros.length;i++){
    if (parametros[i]=='inicio') {
      var mostrar= html
    }
    else if (parametros[i]=='galeria') {
        mostrar=html1
    }
    //html_string=html_string.replace('{'+parametros[i]+'}',valores[i]);
  }
  respuesta.write(mostrar);
  respuesta.end();
}).listen(3000);
