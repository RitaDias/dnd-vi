import DAMAGE_TYPE from "../../helper/damage-type";
import { Tag } from "antd";

import "./suggestion-section.styles.scss";

const SuggestionSection = ({ title, list }) => {
  return (
    <div className="suggestion-section">
      <div>{title}</div>
      {list.length > 0
        ? list.map((item) => (
            <Tag key={item} color={DAMAGE_TYPE[item]} className="type">
              {item}
            </Tag>
          ))
        : "nothing here :("}
    </div>
  );
};

export default SuggestionSection;
