function formato(req){

  var arreglo_parametros=[],
  parametros=[];
 valores=[];

  if(req.url.indexOf('?')>0){
    var url_data=req.url.split('?');
    var arreglo_parametros=url_data[1].split('&');
  }

  for(var i=0 ; i<arreglo_parametros.length;i++){
    var parametro=arreglo_parametros[i];
    var param_data=parametro.split('=');
    parametros[i]=param_data[0];
   valores[i]=param_data[1];
  }


  return{
  parametros:parametros,
   valores:valores,
   //hora2:rpta

  };

}
module.exports.formato = formato;
 module.exports.operados={
 //datoenviado:hora,
//horaformato:valores[0]
 };
