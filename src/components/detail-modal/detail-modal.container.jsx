import { useQuery, useMutation, gql } from "@apollo/client";

import DetailModal from "./detail-modal.component";

const TOGGLE_SHOW_DETAIL_MODAL = gql`
  mutation ToggleShowDetailModal {
    toggleShowDetailModal @client
  }
`;

const GET_CURRENT_OPEN_ITEM = gql`
  {
    currentOpenItem @client
  }
`;

const DetailModalContainer = () => {
  const abc1 = useQuery(GET_CURRENT_OPEN_ITEM);
  const [toggleShowDetailModal] = useMutation(TOGGLE_SHOW_DETAIL_MODAL);

  return (
    <DetailModal
      currentOpenItem={abc1.data.currentOpenItem}
      toggleShowDetailModal={toggleShowDetailModal}
    />
  );
};

export default DetailModalContainer;
