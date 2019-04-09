var mongoose = require('mongoose'),
  Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test')

/*var Schema=new Schema({
  name:String,
  binary: Buffer,
  living: Boolean,
  updated:{type:Date, default:Date.now},
  age:{type: Number, min:18, max:65, required:true},
  mixed:Schema.Types.ObjectId,
  array :[],
  ofString :[String],
  nested:{stuff:{type:String, lowercase:true, trim:true}}

});*/

var producto_schema = new Schema({
  nombre: String,
  descripcion: String,
  precio: String
})
prod_model = mongoose.model('producto', producto_schema, 'producto')
module.exports = {
  show: function (req, res) {
    if (req.query._id == null) {
      prod_model.find({}, function (err, items) {
        if (!err) {
          // res.send(items)
          res.render('listarProductos', {data: items})
        }else {
          return console.log(err)
        }
      })
    }else {
      prod_model.findById({_id: req.params._id}, function (err, items) {
        if (!err) {
            console.log('Ingresó a show para update'+req.query_id)
          res.render('updateProducto',  {data: items})
        }else {
          return console.log(err)
        }
      })
    }
  },

  ShowForId: function (req, res) {
    user_model.findById({_id: req.params.id}, function (err, items) {
      if (!err) {
        res.render('updateProducto', {data: items})
      }else {
        return console.log(err)
      }
    })
  },
  create: function (req, res) {
    /*var item = {
      nombre:req.query.nombre,
      descripcion: req.query.descripcion,
      precio:req.query.precio
    };
    var nuevo= new prod_model(item).save();
    res.send(nuevo);
    //console.log('entrando al post producto')
    //console.log(req.body)
    */
   var nuevo = new prod_model(req.body).save((err, store) => {
      if (err) {
        res.status(500).send('Algo salio mal!!!')
      }else{
          
      //  res.send("Producto creado correctamente"),
        res.redirect('/producto')
      }
    })
   
  },
  update: function (req, res) {
    prod_model.findOne({_id: req.query._id}, function (err, producto) {
      ///  res.render('updateProducto')
      producto.nombre = req.query.nombre;
      producto.descripcion = req.query.descripcion;
      producto.precio = req.query.precio;
      producto.save((err, update) => {
        if (err) {
          res.status(500).send('Algo salio mal!!!')
        }else {
          res.redirect('/producto')
        }
      })
    })
  },
  delete: function (req, res) {
    prod_model.findOne({_id: req.query._id}, function (err, producto) {
      producto.remove();
    //  res.send({status: true})
      res.redirect('/producto')
    });
  },
};

