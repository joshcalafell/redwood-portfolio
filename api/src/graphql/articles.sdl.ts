export const schema = gql`
  type Article {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    articles: [Article!]! @requireAuth
    article(id: Int!): Article @requireAuth
  }

  input CreateArticleInput {
    title: String!
    body: String!
  }

  input UpdateArticleInput {
    title: String
    body: String
  }

  type Mutation {
    createArticle(input: CreateArticleInput!): Article! @requireAuth
    updateArticle(id: Int!, input: UpdateArticleInput!): Article! @requireAuth
    deleteArticle(id: Int!): Article! @requireAuth
  }
`
