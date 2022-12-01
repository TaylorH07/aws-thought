const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({ apiversion: '2012-08-10' });

AWS.config.update({
    region: 'us-east-2',
});