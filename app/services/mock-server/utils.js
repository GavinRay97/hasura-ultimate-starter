const { introspectionQuery } = require('graphql')
const got = require('got')
const axios = require('axios')

async function sendIntrospectionQuery(url) {
  const requestConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }

  const requestData = {
    query: introspectionQuery
  }

  try {
    const introspectionRequest = await axios.post(
      url,
      requestData,
      requestConfig
    )
    const schema = introspectionRequest.data.data
    return schema
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  sendIntrospectionQuery
}
