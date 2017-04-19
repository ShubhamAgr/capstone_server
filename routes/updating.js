var update_module = require('../server_modules/update');

module.exports = function(app){
  app.post("/update_user",function(req,res){
    res.status(200).json({"message":"successful"});
  });

  app.post("/update_events",function(req,res){
    update_module.updateEvents(req,function(response){
      res.status(200).json(response);
    })
  });

  app.post("/update_placement",function(req,res){
    update_module.updatePlacement(req,function(response){
      res.status(200).json(response);
    })
  });

  app.post("/update_process",function(req,res){
    res.status(200).json({"message":"successful"});
  });

  app.post("/update_college_information",function(req,res){
    res.status(200).json({"message":"successful"});
  });

  app.post("/update_college_buildings",function(req,res){
    res.status(200).json({"message":"successful"});
  });
}
