module.exports = function(MongoClient,url){
  console.log("Checking for database and collections");
  MongoClient.connect(url,function(err,db){
    // console.log(database);
    db.collection('users',{ },function(err,coll){
    if(err != null) {
      db.createCollection("users",function(err,result){
        assert.equal(null,err);
        db.close();
      });
    }
    });
    db.collection("events",{ },function(err,coll){
    if(err != null) {
      db.createCollection("events",function(err,result){
        assert.equal(null,err);
        db.close();
      });
    }
    });
    db.collection("college_buildings",{ },function(err,coll){
    if(err != null) {
      db.createCollection("college_buildings",function(err,result){
        assert.equal(null,err);
        db.close();
      });
    }
    });
    db.collection("college_information",{ },function(err,coll){
    if(err != null) {
      db.createCollection("college_information",function(err,result){
        assert.equal(null,err);
        db.close();
      });
    }
    });
    db.collection("college_activites",{ },function(err,coll){
    if(err != null) {
      db.createCollection("college_activites",function(err,result){
        assert.equal(null,err);
        db.close();
      });
    }
    });
    db.collection("process",{ },function(err,coll){
    if(err != null) {
      db.createCollection("process",function(err,result){
        assert.equal(null,err);
        db.close();
      });
    }
    });
  });

}
