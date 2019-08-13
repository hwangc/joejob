import graphql, { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";
import User from "../model/user";
import { UserType } from "./types";

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    addUser: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        username: { type: GraphQLString },
        age: { type: GraphQLInt },
        height: { type: GraphQLInt },
        weight: { type: GraphQLInt },
        mobile_number: { type: GraphQLString }
      },
      async resolve(parentValue, args) {
        try {
          const newUserEmail = await User.addUser(args.email, args.password, args.username, args.age, args.height, args.weight, args.mobile_number)
          return newUserEmail
        } catch (error) {
          console.log("::: RootMutationType error :::", error);
          throw error 
        }
      }
    }
  }
});

export default RootMutation