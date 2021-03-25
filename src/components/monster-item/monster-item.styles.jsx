import styled from "styled-components";
import { ReactComponent as DragonSvg } from "../../Assets/dragon.svg";

export const DragonImageContainer = styled(DragonSvg)`
  path {
    &.dark-background {
      fill: ${({ color }) => color} !important;
    }
    &.body {
      fill: ${({ color }) => color} !important;
      opacity: 0.6;
    }
  }
`;
