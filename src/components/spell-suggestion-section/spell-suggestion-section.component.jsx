import SpellsSection from "../spells-section/spells-section.component";
import NoResult from "../no-result/no-result.component";

import "./spell-suggestion-section.styles.scss";

const SuggestionSection = ({ title, description, list }) => {
  return (
    <div className="suggestion-section">
      <h3>{title}</h3>
      <div className="description">{description}</div>
      {list.length > 0 ? <SpellsSection types={list} /> : <NoResult />}
    </div>
  );
};

export default SuggestionSection;
