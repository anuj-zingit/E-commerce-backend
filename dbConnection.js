const mongoose = require('mongoose');
const db_link='mongodb://localhost:27017/fisrt_db'
  mongoose.connect(db_link).then(function(db){
   // console.log(db)
    console.log('db connected')
  }).catch(function(err)
  {
   console.log(err+"err")
  })