import User from "../model/user";
import { GraphQLObjectType, GraphQLID } from "graphql";
import { UserType } from "./types";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      async resolve(parentValue, args) {
        try {
          const id = [args.id];
          return await User.getById(id[0]);
        } catch (error) {
          console.log("::: RootQueryType Error :::", error);
          throw error;
        }
      }
    }
  }
});

export default RootQuery