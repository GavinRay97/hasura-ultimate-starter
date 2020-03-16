const bcrypt = require('bcryptjs')
const { createUser } = require('./graphqlQueries')

module.exports = async (context, callback) => {
  const { input } = JSON.parse(context)
  const { email, password } = input.user_info
  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const result = await createUser({ email, password: hashedPassword })
    return callback(undefined, { success: true })
  } catch (err) {
    return callback(undefined, {
      success: false,
      errors: JSON.stringify(err, Object.getOwnPropertyNames(err))
    })
  }
}
