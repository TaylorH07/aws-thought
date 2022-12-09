const AWS = require("aws-sdk");
const fs = require("fs");

AWS.config.update({
    region: 'us-east-2',
});

// uses the aws-sdk to create the interface with DynamoDB. We'll also be using the file system package to read the users.json file
const dynamodb = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
});

// uses the fs package to read the users.json file and assign the object to the allUsers constant
console.log('Importing thoughts into DynamoDB. Please wait.');
const allUsers = JSON.parse(
    fs.readFileSync('./server/seed/users.json', 'utf8'),
);


// loop over the allUsers array and create the params object with the elements in the array
allUsers.forEach(user => {
    const params = {
        TableName: "Thoughts",
        Item: {
            "username": user.username,
            "createdAt": user.CreatedAt,
            "thought": user.thought
        }
    }
})