var AWS = require('aws-sdk');
var lambda = new AWS.Lambda();

var fnName = 'chelajsHello';
var payload = JSON.stringify({
  "nombre": 'carlos'
});

lambda.invoke({
  FunctionName: fnName,
  Payload: payload
}, (err, data) => {
  if(err){
    console.log(err);
  }

  console.log(data);
});
