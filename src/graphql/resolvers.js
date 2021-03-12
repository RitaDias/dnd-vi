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

const GET_SHOW_DETAIL_MODAL = gql`
  {
    showDetailModal @client
  }
`;

export const resolvers = {
  Mutation: {
    toggleShowDetailModal: (_root, _args, { cache }) => {
      const { showDetailModal } = cache.readQuery({
        query: GET_SHOW_DETAIL_MODAL
      });

      cache.writeQuery({
        query: GET_SHOW_DETAIL_MODAL,
        data: { showDetailModal: !showDetailModal }
      });

      return !showDetailModal;
    }
  }
};
