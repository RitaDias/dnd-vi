import { useQuery, useMutation, gql } from "@apollo/client";

import MonsterList from "./monsters-list.component";

const GET_MONSTER_DETAILS = gql`
  {
    monsters {
      index
      name
      type
      damage_immunities
      damage_resistances
      damage_vulnerabilities
    }
  }
`;

const TOGGLE_SHOW_DETAIL_MODAL = gql`
  mutation ToggleShowDetailModal {
    toggleShowDetailModal @client
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

const MonsterListcontainer = () => {
  const { loading, error, data } = useQuery(GET_MONSTER_DETAILS);
  const abc = useQuery(GET_SHOW_DETAIL_MODAL);
  const abc1 = useQuery(GET_CURRENT_OPEN_ITEM);
  const [toggleShowDetailModal] = useMutation(TOGGLE_SHOW_DETAIL_MODAL);

  if (loading) return "loading";
  if (error) return "an error occurred";

  return (
    <MonsterList
      monsterList={data.monsters}
      showDetailModal={abc.data.showDetailModal}
      currentOpenItem={abc1.data.currentOpenItem}
      toggleShowDetailModal={toggleShowDetailModal}
    />
  );
};

export default MonsterListcontainer;
