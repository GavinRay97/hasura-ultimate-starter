const faker = require('faker')

const defaultMocks = {
  Int: () => faker.random.number({ min: 0, max: 100 }),
  String: () => faker.random.words(5),
  numeric: () => faker.random.number({ min: 0, max: 100, precision: 0.01 }),
  timestamptz: () => {
    const betweenLastWeekAndThisWeek = faker.random.number({
      min: -7,
      max: 7
    })
    return faker.date.recent(betweenLastWeekAndThisWeek)
  }
}

const customMocks = {
  open_game: () => ({
    photo_url: () => faker.image.animals()
  })
}

const mocks = { ...defaultMocks, ...customMocks }

function replacer(key, value) {
  if (key.match(/img|image|url/gi)) {
    return faker.image.sports()
  }
  return value
}

function responseFormatter(response, request) {
  if (request.operationName != `IntrospectionQuery`) {
    const modifiedResultString = JSON.stringify(response.data, replacer)
    const result = JSON.parse(modifiedResultString)
    response.data = result
  }
}


module.exports = {mocks, responseFormatter}