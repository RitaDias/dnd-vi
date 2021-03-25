import SpellsSection from "../spells-section/spells-section.component";

import "./spell-suggestion-section.styles.scss";

const SuggestionSection = ({ title, description, list }) => {
  return (
    <div className="suggestion-section">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <SpellsSection types={list} />
    </div>
  );
};

export default SuggestionSection;
