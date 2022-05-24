import { gql } from "apollo-server-express";
import * as uuid from "uuid";

import createRepository from "../../../io/Database/createRepository";

const clientRepository = createRepository("client");

export const typeDefs = gql`
  type Client implements Node {
    id: ID!
    name: String!
    email: String!
    disabled: Boolean!
  }

  type ClientList implements List {
    items: [Client!]!
    totalItems: Int!
  }

  extend type Query {
    client(id: ID!): Client
    clients: ClientList
  }

  input CreateClientInput {
    name: String!
    email: String!
  }

  extend type Mutation {
    createClient(input: CreateClientInput!): Client!
  }
`;

export const resolvers = {
  Query: {
    client: async (_, { id }) => {
      const clients = await clientRepository.read();
      return clients.find((client) => client.id === id);
    },
    clients: async () => {
      const clients = await clientRepository.read();
      return {
        items: clients,
        totalItems: clients.length,
      };
    },
  },

  Mutation: {
    createClient: async (_, { input }) => {
      const clients = await clientRepository.read();
      const client = {
        id: uuid.v4(),
        name: input.name,
        email: input.email,
        disabled: false,
      };
      await clientRepository.write([...clients, client]);
      return client;
    },
  },
};
