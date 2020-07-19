// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create S3 service object
var s3 = new AWS.S3();

// Call S3 to list the buckets
s3.listBuckets(function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("S3 Buckets in your account: ");
    data.Buckets.forEach(consoleOut);    
  }
});

function consoleOut(value) {
  console.log(value.Name);
}
