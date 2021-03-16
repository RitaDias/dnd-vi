import { useQuery, gql } from "@apollo/client";

import MonsterList from "./monsters-list.component";

const GET_MONSTER_DETAILS = gql`
  {
    monsters(limit: 300) {
      index
      name
      type
      damage_immunities
      damage_resistances
      damage_vulnerabilities
    }
  }
`;

const MonsterListcontainer = () => {
  const { loading, error, data } = useQuery(GET_MONSTER_DETAILS);

  if (loading) return "loading";
  if (error) return "an error occurred";

  return <MonsterList monsterList={data.monsters} />;
};

export default MonsterListcontainer;
