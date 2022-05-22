import { resolvers as clientResolvers } from "./Client/Client";
import { resolvers as demandResolvers } from "./Demand/Demand";

const resolvers = {
  ...clientResolvers,
  ...demandResolvers,

  Query: {
    ...clientResolvers.Query,
    ...demandResolvers.Query,
  },
};

export default resolvers;
