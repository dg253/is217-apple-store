var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

/**
 * Laptop Schema
 */
var LaptopSchema = new Schema({
  brand: String,
  model: String,
  screenSize: String,
  hardDrive: String,
  memory: String,
  price: Number,
});

mongoose.model('Laptop', LaptopSchema);
