var create_module = require('../server_modules/delete');

module.exports = function(app){
  app.post("/delete_user",function(req,res){
    res.status(200).json({"message":"successful"});
  });

  app.post("/delete_events",function(req,res){
    res.status(200).json({"message":"successful"});
  });

  app.post("/delete_process",function(req,res){
    res.status(200).json({"message":"successful"});
  });

  app.post("/delete_college_information",function(req,res){
    res.status(200).json({"message":"successful"});
  });

  app.post("/delete_college_buildings",function(req,res){
    res.status(200).json({"message":"successful"});
  });
}
