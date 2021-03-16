import { useQuery, gql } from "@apollo/client";

import { capitalize } from "../../helper/string";
import SpellsList from "./spells-list.component";

const GET_SPELLS_LIST = gql`
  query($type: String) {
    spells(limit: 300, filter: { damage: { damage_type: { name: $type } } }) {
      index
      name
    }
  }
`;

const SpellsListContainer = ({ type }) => {
  const { loading, error, data } = useQuery(GET_SPELLS_LIST, {
    variables: {
      type: capitalize(type)
    }
  });

  if (loading) return "loading";
  if (error) return "an error occurred";

  return <SpellsList spells={data.spells} type={type} />;
};

export default SpellsListContainer;
