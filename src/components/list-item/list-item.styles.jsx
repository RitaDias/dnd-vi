import styled from "styled-components";
import MONSTER_TYPES from "../../helper/monster-types";

export const CardItem = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  height: 200px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 15px;
  width: 200px;
  border: 4px solid transparent;
  border: ${({ monsterType }) => `4px solid ${MONSTER_TYPES[monsterType]}`};
`;
