var mongoose = require('mongoose'),
  Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test')

var user_schema = new Schema({
  email: String,
  pass: String
})
user_model = mongoose.model('user', user_schema, 'user')
module.exports = {
  login: function (req, res) {
    console.log(req.body)
    user_model.findOne({email: req.body.username, pass: req.body.password}, function (err, items) {
      if (!err && items != null) {
        res.send(items)
      } else {
        res.send("Contraseña o email incorrecta")
      }
    })
  },
  create: function (req, res) {
    var item = {
      email:req.query.email,
      pass:req.query.pass
    };
    var nuevo= new user_model(item).save();
    res.send(nuevo);
    //console.log('entrando al post producto')
    //console.log(req.body)
   /* var nuevo = new prod_model(req.body).save((err, store) => {
      if (err) {
        res.status(500).send('Algo salio mal!!!')
      }else{
        res.send("Producto creado correctamente")
      }
    })*/
   
  }

}
