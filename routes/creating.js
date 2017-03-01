var create_module = require('../server_modules/create');

module.exports = function(app){
  app.post("/create_user",function(req,res){
    res.status(200).json({"message":"successful"});
  });
}
