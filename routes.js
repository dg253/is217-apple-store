module.exports = function (app) {

var index = require('./controllers/index');
var laptops = require('./controllers/laptops');
var passport = require('passport');
var users = require('./controllers/users');
var admin = require('./controllers/admin');
//var assignments = require('./controllers/assignments');

  app.get('/', index.index);
  app.get('/admin',ensureAuthenticated , admin.main); 
  app.get('/laptops', laptops.list);
  app.get('/api/laptops', laptops.jsonlist);
  app.get('/laptops/:id', laptops.findById);
  app.post('/laptops/add', laptops.add);
  app.post('/laptops/update/:id', laptops.update); 

  app.get('/users/', users.list);
  app.get('/api/users', users.jsonlist);
  app.get('/users/:uid', users.findById);
  app.post('/users/add', users.add);
  app.post('/users/update/:uid', users.update);
  app.get('/login', users.login);
  app.post('/login', passport.authenticate('local'), users.auth);
  app.get('/api', function (req,res) {
    var obj = {
      spam: 'test'
    }
    res.send(obj);
  });
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
     res.cookie('lasturl', req.path);
     res.redirect('/login'); 
}
/*
  app.get('/assignments/:cid/', assignments.list);
  app.get('/assignments/:cid/:aid/', assignments.findOne);
  app.post('/assignments/add/', assignments.add);
*/
}
