import styled from "styled-components";
import { Card } from "antd";
import { ReactComponent as MagicSvg } from "../../Assets/magic.svg";

export const CardContainer = styled(Card)`
  &.spell-item {
    border-radius: 25px;
    width: 100px;
    height: 100px;

    .ant-card-body {
      padding: 10px;
    }
  }
`;

export const MagicImageContainer = styled(MagicSvg)`
  width: 25px;
  height: 25px;

  path {
    fill: ${({ color }) => color} !important;
  }
`;
