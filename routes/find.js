var find_module = require('../server_modules/find');

module.exports = function(app){
  app.post("/find_user",function(req,res){
    find_module.getUser(req,function(response){
    res.status(200).json(response);
    });
  });

  app.post("/find_events",function(req,res){
    find_module.getEvent(req,function(response){
    res.status(200).json(response);
    });
  });

  app.post("/find_admissions",function(req,res){
    find_module.getAdmission(req,function(response){
    res.status(200).json(response);
    });
  });

  app.post("/find_process",function(req,res){
    find_module.getProcess(req,function(response){
    res.status(200).json(response);
    });
  });

  app.post("/find_college_information",function(req,res){
    find_module.getCollegeInformation(req,function(response){
    res.status(200).json(response);
    });
  });

  app.post("/find_college_buildings",function(req,res){
    find_module.getCollegeBuilding(req,function(response){
    res.status(200).json(response);
    });
  });
}
