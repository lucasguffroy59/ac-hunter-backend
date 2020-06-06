// Get formatted return object
exports.getReturnObject = (status, message, data) => {
  return {
    statusCode: status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(
      {
        message,
        data
      },
      null,
      2
    )
  }
}

// Get raw return object
exports.getRawReturnObject = (status, data) => {
  return {
    statusCode: status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(
      data,
      null,
      2
    )
  }
}