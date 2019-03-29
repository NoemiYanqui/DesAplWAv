var param_replace=require('tecsup2019yanquicueva');

var objetivo="%test% %answer%! --%test% %answer%!";
var idioma="es";
var reemplazos={
  "en":{
    "test": "TEST",
    "answer":"ANSWER"
  },
  "es":{
    "test": "PRUEBA",
    "answer": "RESPUESTA"
  }
};
var resultado=param_replace.
replace(objetivo,reemplazos[idioma]);
console.log(resultado);

// var nodes=document.getElementByTagName('button');
// for (var i = 0; i < nodes.length; i++) {
//   nodes[i].addEventListener('click',function(){
//     console.log('You clicked element #'+i);
//   });
// }

// function printing(){
//   console.log(1);
//   setTimeout(function(){console.log(2);},1000);
//   console.log(3);
//   setTimeout(function(){console.log(4);},0);
//   console.log(5);
// }
// printing();

// if(persona){
//   var nombre= persona.obtenerNombre();
// }
// var nombre=persona&& persona.obtenerNombre();

function funcionExterna(variable){
  var variableDeLaFuncionExterna=variable;
  return function funcionInterna(){
    return variableDeLaFuncionExterna;
  }
}
var foo=funcionExterna(20);
//foo();
//console.log(foo());

var futbolista={
  "goles":0,
  "anotagol": function(gol){
    if(gol>0) this.goles+=gol;
  }
};

// futbolista.anotagol(5);
// console.log(futbolista.goles);
// futbolista.anotagol(3);
// console.log(futbolista.goles);


var jugador=function(){
  var acumuladorPrivado=0;
  return{
    "obtenerGoles":function(){
      return acumuladorPrivado;
    },
    "anotaGol":function(gol){
      if(gol>0) acumuladorPrivado+=gol;
    }
  };
};

var sergio= new jugador();
// console.log(sergio.acumuladorPrivado);
// console.log(sergio.obtenerGoles());
// sergio.anotaGol(4);
// console.log(sergio.obtenerGoles());


var Persona= function (nombre, edad){
  return{
    nombre:nombre,
    ingresarEdad: function(e){edad:e;},
    obtenerEdad:function(){return edad;}
  };
};

var Programador=function(nombre,edad,especialidad){
  var e=Persona(nombre,edad);
  e.especialidad=especialidad;
  return e;
};

var aurora=new Persona("Aurora",27);
var sergio=new Programador("Sergio",29,"Javascript")
sergio.obtenerEdad();
// console.log(sergio.obtenerEdad());
// console.log(aurora.obtenerEdad());
// console.log(sergio);
// console.log(aurora);

/*(function(){
  var mayor= function(o1,o2){
    if(o1.tamano > o2.tamano){
      console.log(o1+ 'es mayor');
    }else {
      console.log(o2+' es mayor');
    }
  };
  var x=12;
  var y = 15;
  mayor(x,y);
}());
//? console.log(o1+ 'es mayor'):console.log(o2+' es mayor');
*/
/*
(function(){
  var album_favorito=function(coleccion){
    if(coleccion.length===0){
      return;
    }
    var mas_reproducido=coleccion[0].tocado,
    mas_indice=0;
    var tamaño=Object.keys(coleccion).length
    for (var i = 0, len = tamaño; i < len ; i++) {
      if (coleccion[i].tocado > mas_reproducido) {
        mas_reproducido=coleccion[i].tocado;
        //console.log(mas_reproducido)
        mas_indice=i;
      }
    }
    return{play: mas_reproducido, index:mas_indice};
  };
  var music={
    0:{
      nombre: 'music1',
      artista: 'art1',
      tocado: 12
    },
    1: {
      nombres:'music2',
      artista: 'art2',
      tocado: 11
    },
    2:{
      nombres:'music3',
      artista: 'art3',
      tocado: 18
    }

  }
  var fav=album_favorito(music);
  console.log("Tu album favorito fue tocado "+ fav.play+" veces");
}());
*/

/*(function(){
  function Sumar(){
  var nros =[]
  return {
    agregar:function(a){
      nros.push(a)
    },
    obtenerSumaActual:function(){
      if(nros.length === 0){
        return 0
      }else {
        var rpta=0
        for (var i = 0; i < nros.length; i++) {
          rpta += nros[i]
        }
        return rpta
        }
      }
    }
  }
  var s1= Sumar()
  var s2= Sumar()
  var s3= Sumar()
  s1.agregar(10)
  s1.agregar(20)
  s2.agregar(30)
  s2.agregar(5)
  s3.agregar(21)
  s3.agregar(32)
  //imprime 30
  console.log(s1.obtenerSumaActual())

  //imprime 35
  console.log(s2.obtenerSumaActual())
  console.log(s3.obtenerSumaActual())
}());
*/


(function(){
  function MusicBox() {
    var musica=[]
    var favorito=''
    return{
      addAlbum:function(cancion){
        musica.push(cancion)
      },
      favoriteAlbum: function (){
        if (musica.length === 0){
          return null
        }
        var temp = musica[0]
        for (var i = 0; i < musica.length; i++) {
            if(musica[i].reproducciones() > temp.reproducciones()){
              temp = musica[i]
            }
        }
        var rpta=  temp.cancion()
        var r2=temp.autor()
        return rpta+' - ' +r2
      },
      arrayas: function(){
        return musica
      }
    }
  }

  var Album= function(m1 , a1){
    var reprod=0
    return{
      cancion:function(){
        return m1
      },
      autor:function(){
        return a1
      },
      play: function(){
        console.log('Tocando '+ this.cancion()+ ' - '+this.autor())
        reprod++
      },
      reproducciones: function(){
        return reprod
      }
    }
  }
  var box = MusicBox(),
  a1 = Album("The Who","Tommy"),
  a2 = Album("Tom Waits","Closing Time"),
  a3 = Album("John Cale","Paris 1919"),
  favorito;
  box.addAlbum(a1);
  box.addAlbum(a2);
  box.addAlbum(a3);
  a1.play(); //imprime "Tocando the Who -Tommy"
  a2.play(); //imprime "Tocando Tom Waits - Closing Time"
  a3.play(); //imprime "Tocando the Who -Tommy"
  favorito=box.favoriteAlbum();
  // imprime "tu album favorito es The Who - Tommy"
  console.log("tu album favorito es "+favorito);
}())

;(function () {
  function numeroPrimo (n1) {
    var tipo = typeof (n1)
    if (tipo == 'number') {
      var c = 0
      for (let i = 2; i < n1; i++) {
        if (n1 % i == 0)
          return 'El numero ' + n1 + ' no es primo'
      }
      return ' El numero ' + n1 + ' es primo'
    }else if (tipo == 'string') {
      return 'Error!!! Ingresaste un string'
    }else {
      return 'Error!!! Ingresaste un tipo de dato equi'
    }
  }
  console.log(numeroPrimo(15))
}())

;(function () { function Quicksort (A, izq, der) {
    var pivote = A[izq],i = izq,j = der,temp
    while (i < j) {
      while (A[i] <= pivote && i < j) i++
      while (A[j] > pivote) j--
      if (i < j) {
        temp = A[i]
        A[i] = A[j]
        A[j] = temp; }
    }
    A[izq] = A[j]
    A[j] = pivote
        if (izq < j - 1)
      Quicksort(A, izq, j - 1)
    if (j + 1 < der)
      Quicksort(A, j + 1, der)
      return A;
  }
  var A = [12,32,45,67,89,90,1,2,3]
  var izq = 0
  var der = A.length - 1
  console.log(Quicksort(A, izq, der))
}())
