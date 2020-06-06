const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient()



exports.fish = async fish => {
  const fishInfo = {
    TableName: process.env.FISH_TABLE,
    Item: fish,
  }

  console.log('Adding fish to database', fishInfo)

  try {
    const dbPutFish = await dynamoDb.put(fishInfo).promise()

    console.log('Put success', dbPutFish)

    return dbPutFish
  } catch (e) {
    console.error('Put to DynamoDB failed', e)
    throw new Error(e)
  }
}