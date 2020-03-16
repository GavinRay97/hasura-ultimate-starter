const bcrypt = require('bcryptjs')
const { findUserByEmail } = require('./graphqlQueries')
const { generateJWT } = require('./auth')

module.exports = async (context, callback) => {
  const { input } = JSON.parse(context)
  const { email, password } = input.user_info

  try {
    const result = await findUserByEmail({ email })
    const user = result.user[0]
    const validPassword = await bcrypt.compare(password, user.password)
    const response = validPassword
      ? { token: generateJWT(user), errors: false }
      : { token: null, errors: 'Invalid password' }
    return callback(undefined, response)
  } catch (err) {
    return callback(undefined, {
      token: null,
      errors: JSON.stringify(err, Object.getOwnPropertyNames(err))
    })
  }
}
