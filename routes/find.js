var find_module = require('../server_modules/find');

module.exports = function(app){
  app.post("/find_user",function(req,res){
    find_module.getUser(req.body.range,function(response){
    res.status(200).json(response);
    });
  });

  app.post("/find_events",function(req,res){
    find_module.getEvent(req.body.range,function(response){
    res.status(200).json(response);
    });
  });

  app.post("/find_placement",function(req,res){
    find_module.getPlacement(req.body.range,function(response){
    res.status(200).json(response);
    });
  });

  app.post("/find_admissions",function(req,res){
    find_module.getAdmission(req.body.range,function(response){
    res.status(200).json(response);
    });
  });

  app.post("/find_process",function(req,res){
    find_module.getProcess(req.body.range,function(response){
    res.status(200).json(response);
    });
  });

  app.post("/find_college_information",function(req,res){
    find_module.getCollegeInformation(req.body.range,function(response){
    res.status(200).json(response);
    });
  });

  app.post("/find_college_buildings",function(req,res){
    find_module.getCollegeBuilding(req.body.range,function(response){
    res.status(200).json(response);
    });
  });
}
