import GraphQLJSON from 'graphql-type-json'


export default {
  JSON: GraphQLJSON,

  Query: {
    hello: (root, { name }) => `Hello ${name || 'World'}!`,
  },

  Mutation: {
    taxiOrder: (root, { input }) => {
      return input;
    },
  },
}
