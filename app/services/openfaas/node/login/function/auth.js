const jwt = require('jsonwebtoken')

const HASURA_GRAPHQL_JWT_SECRET = {
  type: process.env.HASURA_JWT_SECRET_TYPE,
  key: process.env.HASURA_JWT_SECRET_KEY
}

const JWT_CONFIG = {
  algorithm: HASURA_GRAPHQL_JWT_SECRET.type
}

function generateJWT(user) {
  const payload = {
    'https://hasura.io/jwt/claims': {
      'x-hasura-allowed-roles': ['user'],
      'x-hasura-default-role': 'user',
      'x-hasura-user-id': user.id.toString()
    }
  }

  return jwt.sign(payload, HASURA_GRAPHQL_JWT_SECRET.key, JWT_CONFIG)
}

module.exports = {
  generateJWT
}
