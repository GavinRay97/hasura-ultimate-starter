const graphql = require('graphql.js')

const client = graphql('http://hasura:8080/v1/graphql', {
  alwaysAutodeclare: true,
  asJSON: true,
  headers: {
    'X-Hasura-Admin-Secret': 'password'
  }
})

const findUserByEmail = client.query(/* GraphQL */ `
  user(where: { email: { _eq: $email } }) {
    id
    password
  }
`)

module.exports = {
  findUserByEmail
}
