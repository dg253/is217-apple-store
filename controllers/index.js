
/*
 * GET home page.
 */

var mongoose = require('mongoose')
  , Laptop = mongoose.model('Laptop');

exports.index = function(req, res) {
  res.render('index', {
      title: 'Apple Store, by David Garcia'
  });
  /*
  Laptop.find({}, function(err, laptops) {
    res.render('index', { 
      title: 'Apple Store, by David Garcia', 
      laptops: laptops 
    });
  });
  */
}
