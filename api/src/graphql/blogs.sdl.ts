export const schema = gql`
  type Blog {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    blogs: [Blog!]! @requireAuth
    blog(id: Int!): Blog @requireAuth
  }

  input CreateBlogInput {
    title: String!
    body: String!
  }

  input UpdateBlogInput {
    title: String
    body: String
  }

  type Mutation {
    createBlog(input: CreateBlogInput!): Blog! @requireAuth
    updateBlog(id: Int!, input: UpdateBlogInput!): Blog! @requireAuth
    deleteBlog(id: Int!): Blog! @requireAuth
  }
`
