var create_module = require('../server_modules/create');

module.exports = function(app){
  app.post("/create_user",function(req,res){
    create_module.createUser(req,function(response){
    res.status(200).json(response);
    });
  });

  app.post("/create_events",function(req,res){
    create_module.createEvents(req,function(response){
    res.status(200).json(response);
    });
  });

  app.post("/create_admissions",function(req,res){
    create_module.createEvents(req,function(response){
    res.status(200).json(response);
    });
  });

  app.post("/create_process",function(req,res){
    create_module.createProcess(req,function(response){
    res.status(200).json(response);
    });
  });

  app.post("/create_college_information",function(req,res){
    create_module.createCollegeInformation(req,function(response){
    res.status(200).json(response);
    });
  });

  app.post("/create_college_buildings",function(req,res){
    create_module.createCollegeBuildings(req,function(response){
    res.status(200).json(response);
    });
  });
}
