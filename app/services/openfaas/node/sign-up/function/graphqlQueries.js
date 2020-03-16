const graphql = require('graphql.js')

const client = graphql('http://hasura:8080/v1/graphql', {
  alwaysAutodeclare: true,
  asJSON: true,
  headers: {
    'X-Hasura-Admin-Secret': 'password'
  }
})

const createUser = client.mutate(/* GraphQL */ `
  insert_user_one(object: { email: $email, password: $password }) {
    id
    email
  }
`)

module.exports = { createUser }
