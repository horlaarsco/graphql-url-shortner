import { ApolloServer } from 'apollo-server-express'
import express, { Application } from 'express'
import dotenv from 'dotenv'
import client from './config/db'
import { redirectController } from './controllers/redirectController'
import { URLTypeDefs } from './models/URL'
import { URLresolvers } from './resolvers/URLresolver'

dotenv.config()
const app: Application = express()
const port = process.env.PORT || 4000

client
  .connect()
  .then(() => console.log('connected'))
  .catch((err) => console.error('connection error', err.stack))

const server = new ApolloServer({
  typeDefs: URLTypeDefs,
  resolvers: URLresolvers,
  playground: true,
  introspection: true,
  context: async (ctx) => ctx,
})

server.applyMiddleware({ app })

app.get('/:slug', redirectController)

app.listen(port, () => {
  console.log(`🚀  Server ready at ${port}`)
})
