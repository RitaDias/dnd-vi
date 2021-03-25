import SpellsSection from "../spells-section/spells-section.component";

import "./spell-suggestion-section.styles.scss";

const SuggestionSection = ({ title, description, list }) => {
  return (
    <div className="suggestion-section">
      <h3>{title}</h3>
      <div className="description">{description}</div>
      <SpellsSection types={list} />
    </div>
  );
};

export default SuggestionSection;
