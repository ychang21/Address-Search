// require mongoose
var mongoose = require('mongoose');
// create Schema class
var Schema = mongoose.Schema;

// Create article schema
var AdressSchema = new Schema({
  // title is required
  location: {
    type:String,
    required:true
  },
  // link is required
  address: {
    type:String,
    required:true
  },
  

  
});

// Create the Article model with the ArticleSchema
var Address = mongoose.model('Address', AddressSchema);

// export the model
module.exports = Address;
