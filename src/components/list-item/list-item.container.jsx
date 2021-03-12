import { useMutation, gql } from "@apollo/client";

import ListItem from "./list-item.component";

const TOGGLE_SHOW_DETAIL_MODAL = gql`
  mutation ToggleShowDetailModal {
    toggleShowDetailModal @client
  }
`;

const UPDATE_CURRENT_OPEN_ITEM = gql`
  mutation UpdateCurrentOpenItem($item: item) {
    updateCurrentOpenItem(item: $item) @client
  }
`;

const ListItemContainer = ({ ...otherProps }) => {
  const [toggleShowDetailModal] = useMutation(TOGGLE_SHOW_DETAIL_MODAL);
  const [updateCurrentOpenItem] = useMutation(UPDATE_CURRENT_OPEN_ITEM);
  return (
    <ListItem
      {...otherProps}
      toggleShowDetailModal={toggleShowDetailModal}
      updateCurrentOpenItem={(item) => {
        updateCurrentOpenItem({ variables: { item } });
      }}
    />
  );
};

export default ListItemContainer;
