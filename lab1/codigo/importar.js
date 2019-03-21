var http=require('http'),
fs=require('fs'),
parser=require('./parser_vars.js'),
p=parser.parse_vars;
datos=parser.batman;

http.createServer(function(req,res){
  fs.readFile('./form.html',function(err, html){
    var html_string=html.toString();
console.log(datos);
    var respuesta=p(req),

    parametros=respuesta['parametros'],
    valores=respuesta['valores'];
    console.log("estos son los parametros:");
    console.log(parametros);
    console.log("estos son los valores:");
    console.log(valores);
    console.log("/////////////////");
    for(var i=0; i<parametros.length;i++){
      html_string=html_string.replace('{'+parametros[i]+'}',valores[i]);
    }
console.log(respuesta);
console.log("estos son los parametros:");
console.log(parametros);
console.log("estos son los valores:");
console.log(valores);
    html_string=html_string.replace('{identidad}',datos['identidad']);
    html_string=html_string.replace('{poder}',datos['poder']);

    res.writeHead(200,{'Content-type':'text'});
    res.write(html_string);
    res.end();
  });
}).listen(8080);
