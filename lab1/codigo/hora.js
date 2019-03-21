var http=require('http'),
fs=require('fs'),
parser=require('./module_hora.js'),
p=parser.formato;
datos=parser.operados;


http.createServer(function(req,res){
  fs.readFile('./vista_hora.html',function(err, html){
    var html_string=html.toString();
    var respuesta=p(req),
    datoenviado=respuesta['parametros'],
    valores=respuesta['valores'];
    hora2=respuesta['hora1'];
    // for(var i=0; i<datoenviado.length;i++){
      // html_string=html_string.replace('{'+datoenviado[i]+'}',valores[i]);
    // }
console.log(respuesta);
console.log(valores);
//console.log(hora2);

fecha = new Date();
  hora = fecha.getHours();
  min = fecha.getMinutes();
  seg=fecha.getSeconds();
  min = (min < 10) ? '0' + min :min;
  seg = (seg < 10) ? '0' + seg : seg;
  hora= (hora < 10) ? '0' + hora : hora;
  hora1= hora+":"+min +":"+seg;

if (valores[0]=='12') {
  console.log("entro al if de 12")
if(hora>='00' && hora<'12' ){
hora=hora1+" "+"AM";
}
if(hora>='12' && hora<'24' ){
  hora=hora-12;
  hora= (hora < 10) ? '0' + hora : hora;
  hora=hora+":"+min +":"+seg+" "+"PM"
}
}
else if (valores[0]=='24') {
console.log("entro al if de 24")
hora=hora1;
}
   html_string=html_string.replace('{formato}',valores[0]);
   html_string=html_string.replace('{hora}',hora);
console.log(hora);
    res.writeHead(200,{'Content-type':'text'});
    res.write(html_string);
    res.end();
  });
}).listen(8080);
