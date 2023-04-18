const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  phone:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  itemsInCart:[{
    id:{
      type:String,
      required:true
    },
    count:{
      type:String,
      required:true
    }
  }],
  token:{
    type:String
  }
})

const USER = mongoose.model('user',UserSchema);
module.exports = USER;