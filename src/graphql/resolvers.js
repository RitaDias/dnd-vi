import { gql } from "apollo-boost";

export const typeDefs = gql`
  extend type DamageType {
    name: String!
  }

  extend type Damage {
    damage_type: DamageType
  }

  extend type Filter {
    damage: Damage
  }
`;

const GET_SHOW_DETAIL_MODAL = gql`
  {
    showDetailModal @client
  }
`;

const GET_CURRENT_OPEN_ITEM = gql`
  {
    currentOpenItem @client
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
    },
    updateCurrentOpenItem: (_root, { item }, { cache }) => {
      cache.writeQuery({
        query: GET_CURRENT_OPEN_ITEM,
        data: { currentOpenItem: item }
      });

      return item;
    }
  }
};
