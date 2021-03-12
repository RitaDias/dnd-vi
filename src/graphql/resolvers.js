import { gql } from "apollo-boost";

export const typeDefs = gql`
  extend type Monster {
    index: String!
    name: String!
    type: String!
    damage_immunities: [String]!
    damage_resistances: [String]!
    damage_vulnerabilities: [String]!
  }
`;

export const resolvers = {
  Mutation: {}
};
