import SpellsSection from "../spells-section/spells-section.component";

import "./suggestion-section.styles.scss";

const SuggestionSection = ({ title, list }) => {
  return (
    <div className="suggestion-section">
      <div>{title}</div>
      <SpellsSection types={list} />
    </div>
  );
};

export default SuggestionSection;
