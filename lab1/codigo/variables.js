var http=require('http');
var fs=require('fs');
//url=require('url');

var parametros=[],
valores=[];

http.createServer(function(req,res){
  fs.readFile('./form.html',function(err,html){
    var html_string=html.toString();

    if(req.url.indexOf('?')>0){
      var url_data=req.url.split('?');
      arreglo_parametros=url_data[1].split('&');
      console.log("var url_data: "+url_data);
      console.log("var arreglo_parametros: "+arreglo_parametros);
    }

    for(var i=0; i<arreglo_parametros.length; i++){
      var parametro = arreglo_parametros[i];
      var param_data=parametro.split('=');
      parametros[i]=param_data[0];
      valores[i]=param_data[1];
      console.log("var parametros: "+parametros[i]);

    }

    for(var i=0; i<parametros.length; i++){
      html_string=html_string.replace('{'+parametros[i]+'}',valores[i]);
      console.log("var valores posicion["+i+"]: "+valores[i]);
    }

    res.writeHead(200,{'Content-type':'text/html'});
    res.write(html_string);
  //  console.log(req);
  //  console.log(res);
    res.end();
  });
}).listen(3000);
