const uuid = require('uuid')

exports.fish = (fullName, size, rarity, price, findLocation, timeOfDay, timeOfYear) => {
  const timestamp = new Date().getTime();
  const info = {
    id: uuid.v1(),
    attributes: {
      fullName,
      size,
      rarity,
      price,
      findLocation,
      timeOfDay,
      timeOfYear
    },
    submittedAt: timestamp,
    updatedAt: timestamp,
  }
  return info
}