const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient()



exports.fish = async () => {
  let params = {
    TableName: process.env.FISH_TABLE,
    ProjectionExpression: 'id, attributes.fullName, attributes.size, attributes.rarity, attributes.price, attributes.findLocation, attributes.timeOfDay, attributes.timeOfYear'
  }
  console.log('dynamoDb', dynamoDb)
  console.log('Scanning fish from DB', params)

  try {
    const allFish = await dynamoDb.scan(params).promise()

    console.log('Get success', allFish)

    return allFish
  } catch (e) {
    console.error('Get from DynamoDB failed', e)
    throw new Error(e)
  }
}


exports.fishById = async (id) => {
  let params = {
    TableName: process.env.FISH_TABLE,
    ProjectionExpression: 'id, attributes.fullName, attributes.size, attributes.rarity, attributes.price, attributes.findLocation, attributes.timeOfDay, attributes.timeOfYear',
    Key: {
      id
    }
  }
  console.log('dynamoDb', dynamoDb)
  console.log('Getting fish from DB by id', params)

  try {
    const fish = await dynamoDb.get(params).promise()

    console.log('Get success', fish)

    return fish
  } catch (e) {
    console.error('Get from DynamoDB failed', e)
    throw new Error(e)
  }
}