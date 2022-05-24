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

  input UpdateClientInput {
    id: ID!
    name: String!
    email: String!
  }

  extend type Mutation {
    createClient(input: CreateClientInput!): Client!
    updateClient(input: UpdateClientInput!): Client!
    deleteClient(id: ID!): Client!
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

    updateClient: async (_, { input }) => {
      const clients = await clientRepository.read();
      const currentClient = clients.find((client) => client.id === input.id);
      if (!currentClient) throw new Error(`No client with this id ${input.id}`);
      const updatedClient = {
        ...currentClient,
        name: input.name,
        email: input.email,
      };
      const updatedClients = clients.map((client) => {
        if (client.id === updatedClient.id) return updatedClient;
        return client;
      });
      await clientRepository.write(updatedClients);
      return updatedClient;
    },

    deleteClient: async (_, { id }) => {
      const clients = await clientRepository.read();
      const client = clients.find((client) => client.id === id);

      if (!client) throw new Error(`Cannot delete client with id ${id}`);

      const updatedClients = clients.filter((client) => client.id !== id);

      await clientRepository.write(updatedClients);
      return client;
    },
  },
};
