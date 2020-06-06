'use strict'



const formatDbPut = require('../../services/formatDbPut')
const putToDb = require('../../services/putToDb')
const getFromDb = require('../../services/getFromDb')
const validateParams = require('../../services/validateParams')
const returnTool = require('../../services/returnTool')
const { getReturnObject: returnObj, getRawReturnObject: returnRawObj } = returnTool


module.exports.putFish = async (event, context) => {
  const requestBody = JSON.parse(event.body)
  console.log('Body', requestBody)
  const { fullName, size, rarity, price, findLocation, timeOfDay, timeOfYear } = requestBody
  const paramsValidating = validateParams.fish(fullName, size, rarity, price, findLocation, timeOfDay, timeOfYear)
  console.log('Params validating', paramsValidating)

  if (!paramsValidating.isValid) return returnObj(400, 'One or more params wrong', paramsValidating.notValid)
  
  // const fishTemplate = {
  //   timeOfYear: "all year OR month to month OR multiple period month to month",
  //   timeOfDay: "start - end OR all day",
  //   location: "where i can find it",
  //   price: "price to sell",
  //   name: "name of the fish",
  //   length: "length of the fish",
  //   rarity: "ratiry of the fish"
  // }

  const fishFormattedData = formatDbPut.fish(fullName, size, rarity, price, findLocation, timeOfDay, timeOfYear)

  console.log('Fish formatted', fishFormattedData)

  console.log('Attempt to put to DB')

  try {
    const putFishAction = await putToDb.fish(fishFormattedData)

    console.log('putFishAction', putFishAction)

    return returnObj(200, 'Successfuly added fish to DB', {fishId: putFishAction.id})
  } catch (e) {
    console.log(e)
    return returnObj(500, 'Error while trying to add fish to DB')
  }
}

module.exports.getAllFish = async (event, context) => {

  console.log('Entered get all fish')
  try {
    const getAllFishAction = await getFromDb.fish()

    console.log('getAllFishAction', getAllFishAction)

    return returnRawObj(200, getAllFishAction.Items)
  } catch (e) {
    console.log(e)
    return returnObj(500, 'Error while trying to get fish to DB')
  }
}