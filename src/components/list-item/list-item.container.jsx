import { useMutation, gql } from "@apollo/client";

import ListItem from "./list-item.component";

const TOGGLE_SHOW_DETAIL_MODAL = gql`
  mutation ToggleShowDetailModal {
    toggleShowDetailModal @client
  }
`;

const ListItemContainer = ({ ...otherProps }) => {
  const [toggleShowDetailModal] = useMutation(TOGGLE_SHOW_DETAIL_MODAL);
  return (
    <ListItem {...otherProps} toggleShowDetailModal={toggleShowDetailModal} />
  );
};

export default ListItemContainer;
