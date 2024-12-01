// import { v4 as uuid } from "uuid";
// import AWS from 'aws-sdk'
const { v4: uuid } = require('uuid');
const AWS = require('aws-sdk');


const dynamodb=new AWS.DynamoDB.DocumentClient()

async function createAuction(event, context) {
  const {title}=JSON.parse(event.body)
  const now=new Date()
  const auction={
    id:uuid(),
    title,
    status:'OPEN',
    createdAt:now.toISOString(),
  }

  try {
    await dynamodb.put({
      TableName:'AuctionsTable',
      Item:auction,
    }).promise()
  
  
    return {
      statusCode: 201,
      body: JSON.stringify(auction),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error creating auction', error: error.message }),
    };
  }
}

module.exports.handler = createAuction;