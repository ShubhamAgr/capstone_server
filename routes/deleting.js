var delete_module = require('../server_modules/delete');

module.exports = function(app){
  app.post("/delete_user",function(req,res){
    delete_module.delete_user(req,function(response){
      res.status(200).json(response);
    });
  });

  app.post("/delete_events",function(req,res){
    delete_module.deleteEvents(req,function(response){
      res.status(200).json(response);
    });
  });

  app.post("/delete_process",function(req,res){
    delete_module.deleteProcess(req,function(response){
      res.status(200).json(response);
    });

  });

  app.post("/delete_college_information",function(req,res){
    delete_module.deleteCollegeInformation(req,function(response){
      res.status(200).json(response);
    });
  });

  app.post("/delete_college_buildings",function(req,res){
    delete_module.deleteCollegeBuildings(req,function(response){
      res.status(200).json(response);
    });
  });

  app.post("/delete_admission",function(req,res){
    delete_module.deleteAdmission(req,function(response){
      res.status(200).json(response);
    });
  });
}
