import { createTestClient } from 'apollo-server-testing'
import { ApolloServer, gql } from 'apollo-server-express'
import client from '../config/db'
import { URLTypeDefs } from '../models/URL'
import { URLresolvers } from '../resolvers/URLresolver'

const server = new ApolloServer({
  typeDefs: URLTypeDefs,
  resolvers: URLresolvers,
})

const { query } = createTestClient(server)

beforeAll(async () => {
  await client.connect()
})

afterAll(async () => {
  await client.end()
})

describe('URL Shortner', () => {
  it('shortenURL', async () => {
    const SHORTEN_URL = gql`
      query getDevice($url: String!) {
        shortenURL(url: $url) {
          source
          destination
        }
      }
    `

    const { data } = await query({
      query: SHORTEN_URL,
      variables: {
        url: 'https://horla.dev/',
      },
    })

    expect(data.shortenURL).toMatchObject({
      destination: expect.any(String),
      source: expect.any(String),
    })
  })
})
