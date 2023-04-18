const jwtoken = require('jsonwebtoken');
const USER = require('./models/Users');

const Authenticate = async (req, res, next)=>{
  let token = req.cookies.jwtoken;
  
  if(!token){
    req.authorized = false;
    return next();
  }
  
  let verified = await jwtoken.verify(token,process.env.SECRET_KEY);
  
  if(!verified){
    req.authorized = false;
    return next();
  }
  
  let user = await USER.findOne({
    _id:verified._id,
    token
  });
  
  if(!user){
    req.authorized = false;
    return next();
  }
  
  req._id = user._id;
  req.user = user;
  req.authorized = true;
  next();
}
module.exports = Authenticate;