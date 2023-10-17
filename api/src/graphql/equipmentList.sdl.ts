export const schema = gql`
  type Equipment {
    id: Int!
    title: String!
    body: String!
    img: String!
    createdAt: DateTime!
  }

  type Query {
    equipmentList: [Equipment!]! @requireAuth
    equipment(id: Int!): Equipment @requireAuth
  }

  input CreateEquipmentInput {
    title: String!
    body: String!
    img: String!
  }

  input UpdateEquipmentInput {
    title: String
    body: String
    img: String
  }

  type Mutation {
    createEquipment(input: CreateEquipmentInput!): Equipment! @requireAuth
    updateEquipment(id: Int!, input: UpdateEquipmentInput!): Equipment!
      @requireAuth
    deleteEquipment(id: Int!): Equipment! @requireAuth
  }
`
