import addToDb from '../controllers/addToDb'

const URLresolvers = {
  Query: {
    shortenURL: (_, { url }, context) => {
      return addToDb(
        url,
        context.req.protocol +
          '://' +
          context.req.headers.host +
          context.req.path
      )
    },
  },
}

export { URLresolvers }
