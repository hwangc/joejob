import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql"

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLInt },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    username: { type: GraphQLString },
    age: { type: GraphQLInt },
    height: { type: GraphQLInt },
    weight: { type: GraphQLInt },
    mobile_number: { type: GraphQLString },
    profile_photo: { type: GraphQLString },
    registered_dt: { type: GraphQLString },
    modified_dt: { type: GraphQLString }
  }
})
