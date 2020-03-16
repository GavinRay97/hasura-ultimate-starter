const { buildClientSchema } = require('graphql')
const { ApolloServer } = require('apollo-server')
const { sendIntrospectionQuery } = require('./utils')
const { mocks, responseFormatter } = require('./mocks')
const port = process.env.port || 3000

async function main() {
  const graphqlAPI = 'http://hasura:8080/v1/graphql'
  const introspectionResult = await sendIntrospectionQuery(graphqlAPI)
  const schema = buildClientSchema(introspectionResult)
  const server = new ApolloServer({
    schema,
    mocks,
    mockEntireSchema: false,
    formatResponse: responseFormatter
  })
  server.listen({ port }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  })
}

main()
