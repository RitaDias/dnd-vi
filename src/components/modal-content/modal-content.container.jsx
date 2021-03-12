import { useQuery, gql } from "@apollo/client";

import DetailModal from "./modal-content.component";

const GET_CURRENT_OPEN_ITEM = gql`
  {
    currentOpenItem @client
  }
`;

const DetailModalContainer = () => {
  const {
    data: { currentOpenItem }
  } = useQuery(GET_CURRENT_OPEN_ITEM);

  return <DetailModal currentOpenItem={currentOpenItem} />;
};

export default DetailModalContainer;
