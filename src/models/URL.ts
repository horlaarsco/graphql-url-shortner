import { gql } from 'apollo-server-express'

const URLTypeDefs = gql`
  type URL {
    source: String
    destination: String
  }

  type Query {
    shortenURL(url: String!): URL
  }
`

export { URLTypeDefs }
