var __create = require('./routes/creating');
var __update = require('./routes/updating');
var __search = require('./routes/searching')
var __delete = require('./routes/deleting');
var __find = require('./routes/find');
module.exports = function(app) {
  __create(app);
  __update(app);
  // __search(app);
  __delete(app);

  __find(app);
  app.get('/',function(req,res){
    res.status(200).send("This request is for Home Page");
  });
  app.post('/',function(req,res){
    res.status(401).send("Unauthenticated");
  });
  app.get('*',function(req,res){
    res.status(404).send("Page Not Found");
  });
  app.post('*',function(req,res){
    res.status(404).send("Page Not Found");
  });
}
