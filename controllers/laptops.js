
/*
 * GET courses.
 */

var mongoose = require('mongoose')
  , Laptop = mongoose.model('Laptop');

exports.list = function(req, res) {
  Laptop.find({}, function(err, laptops) {
    res.render('laptops', {
      title: 'Apple Store',
      laptops: laptops
    });
 });
}
exports.jsonlist = function(req, res) {
  Laptop.find({}, function(err, laptops) {
    res.send(laptops);
  });
}
exports.findById = function (req, res) {
  Laptop.findOne({_id : req.params.id}, function(err, laptop) {
      console.log(laptop);
      res.render('laptop', {
      title: 'Laptop Quote',
      brand: laptop.brand,
      model: laptop.model,
      price: laptop.price,
      id: laptop._id,
      screenSize: laptop.screenSize,
      hardDrive: laptop.hardDrive,
      memory: laptop.memory
    });
 });
}

exports.add = function (req, res) {
  var laptop = new Laptop(req.body);

  laptop.save(function (err) {
    if(err) {
      console.log(err)
    } else {
      res.redirect('/laptops');
      console.log(laptop);
    }

  });
}
exports.update = function (req, res) {
  Laptop.findOneAndUpdate({_id : req.params.id}, req.body,

  function(err, laptop) {
      console.log(laptop);
    res.redirect('/laptops');
  });
}