var assert = require('assert');
var util=require('util');
module.exports = function(MongoClient,url){
  console.log("Checking for database and collections");
  MongoClient.connect(url,function(err,db){
    // console.log(database);
    db.collection('users',{ },function(err,coll){
      if(err) {
        console.log(err);
      }else{
        console.log("not err");
        db.createCollection("users",function(err,result){
          // assert.equal(null,err);
          db.collection("users").createIndex({'$**':"text"},function(err,o){
            if(err){
              console.log(err);
            }else{
              console.log(o);
            }
          });
          db.close();
      });
    }
    });
    db.collection("events",{ },function(err,coll){
    if(err) {
      console.log(err);
    }else{
      console.log("not err");
      db.createCollection("events",function(err,result){
        // assert.equal(null,err);
        db.collection("events").createIndex({'$**':"text"},function(err,o){
          if(err){
            console.log(err);
          }else{
            console.log(o);
          }
        });
        db.close();
      });
    }
    });
    db.collection("college_buildings",{ },function(err,coll){
      if(err) {
        console.log(err);
      }else{
        console.log("not err");
        db.createCollection("college_buildings",function(err,result){
          // assert.equal(null,err);
          db.collection("college_buildings").createIndex({'$**':"text"},function(err,o){
            if(err){
              console.log(err);
            }else{
              console.log(o);
            }
          });
          db.close();
      });
    }
    });
    db.collection("college_information",{ },function(err,coll){
      if(err) {
        console.log(err);
      }else{
        console.log("not err");
        db.createCollection("college_information",function(err,result){
          // assert.equal(null,err);
          db.collection("college_information").createIndex({'$**':"text"},function(err,o){
            if(err){
              console.log(err);
            }else{
              console.log(o);
            }
          });
          db.close();
      });
    }
    });
    db.collection("college_activites",{ },function(err,coll){
      if(err) {
        console.log(err);
      }else{
        console.log("not err");
        db.createCollection("college_activites",function(err,result){
          // assert.equal(null,err);
          db.collection("college_activites").createIndex({'$**':"text"},function(err,o){
            if(err){
              console.log(err);
            }else{
              console.log(o);
            }
          });
          db.close();
      });
    }
    });

    db.collection("admissions",{ },function(err,coll){
      if(err) {
        console.log(err);
      }else{
        console.log("not err");
        db.createCollection("admissions",function(err,result){
          // assert.equal(null,err);
          db.collection("admissions").createIndex({'$**':"text"},function(err,o){
            if(err){
              console.log(err);
            }else{
              console.log(o);
            }
          });
          db.close();
      });
    }
    });

    db.collection("process",{ },function(err,coll){
      if(err) {
        console.log(err);
      }else{
        console.log("not err");
        db.createCollection("process",function(err,result){
          // assert.equal(null,err);
          db.collection("process").createIndex({'$**':"text"},function(err,o){
            if(err){
              console.log(err);
            }else{
              console.log(o);
            }
          });
          db.close();
      });
    }
    });
  });

}
