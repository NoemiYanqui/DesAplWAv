var mongoose=require('mongoose'),
Schema=mongoose.Schema;

mongoose.connect('mongodb://localhost/chat');

var user_schema=new Schema({
  _id: String,
  first_name: String,
  last_name: String,
  timezone: String,
  locale: String,
  profile_pic: String,
  estudia: Boolean
});
//monogosee.model(nombre del modelo , var del eschema)
user_model = mongoose.model('user',user_schema,'users');

module.exports={
  create: function(data,callback){
    var item={
      _id:data._id,
      first_name:data.first_name,
      last_name: data.last_name,
      timezone: data.timezone,
      locale:data.locale,
      profile_pic:data.profile_pic,
      estudia: data.estudia
    };
    var nuevo = new user_model(item).save();
    callback(item);
  },
  show: function(callback){
    user_model.find({},function(err,items){
      if(!err){
        callback(JSON.stringify(items));
      }else{
        return console.log(err);
      }
    });    
    },
    update: function(data,callback){
      user_model.findOne({_id: data._id},function(err, item){
        item.first_name = data.first_name;
        item.last_name = data.last_name;
        item.timezone = data.timezone;
        item.locale= data.locale;
        item.profile_pic= data.profile_pic;
        item.estudia= data.estudia
        item.save();
        callback(item);
      });
  },
  delete: function(_id , callback){
    user_model.findOne({_id: _id},function(err,post){
      post.remove();
      callback(_id);
    });
  }
};
