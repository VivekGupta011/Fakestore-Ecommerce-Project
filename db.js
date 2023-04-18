const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL,{
  useNewUrlParser : true,
  useUnifiedTopology : true
}).
then(()=>console.log("DB Connected")).
catch(error => console.log(error))