//mongodb 모듈의 mongoClient를 요청
var MongoClient = require('mongodb').MongoClient;

//mongodb 환경설정
var connectionUrl = 'mongodb://localhost:27017/myproject',
    sampleCollection = 'chapters';

//아래 목차를 몽고DB에 삽입할 것이다.
var chapters = [{
    'Title': 'Snow Crash',
    'Author': 'Neal Stephenson'
},{
    'Title': 'Snow Crash',
    'Author': 'Neal Stephenson'
}];

MongoClient.connect(connectionUrl, function(err, db) {

  console.log("Connected correctly to server");

  // Get some collection
  var collection = db.collection(sampleCollection);

  collection.insert(chapters,function(error,result){
    //here result will contain an array of records inserted
    if(!error) {
      console.log("Success :"+result.ops.length+" chapters inserted!");
    } else {
      console.log("Some error was encountered!");
    }
    db.close();
  });
});
