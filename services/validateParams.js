// Validate put fish input
exports.fish = (fullName, size, rarity, price, findLocation, timeOfDay, timeOfYear) => {
  let notValid = []

  if (typeof fullName !== 'string') notValid.push({fullName, type: 'string'})
  if (typeof size !== 'string') notValid.push({size, type: 'string'})
  if (typeof rarity !== 'string') notValid.push({rarity, type: 'string'})
  if (typeof price !== 'number') notValid.push({price, type: 'number'})
  if (typeof findLocation !== 'string') notValid.push({findLocation, type: 'string'})
  if (typeof timeOfDay !== 'string') notValid.push({timeOfDay, type: 'string'})
  if (typeof timeOfYear !== 'string') notValid.push({timeOfYear, type: 'string'})

  if (notValid.length) return { isValid: false, notValid }
  return { isValid: true }
}