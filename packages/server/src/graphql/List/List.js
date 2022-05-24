import { gql } from "apollo-server-express";

export const typeDefs = gql`
  interface List {
    items: [Node!]!
    totalItems: Int!
  }
`;

export const resolvers = {
  List: {
    __resolveType: () => null,
  },
};
