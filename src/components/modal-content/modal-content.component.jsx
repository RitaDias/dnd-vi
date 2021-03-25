import SuggestionSection from "../spell-suggestion-section/spell-suggestion-section.component";

const ModalContent = ({ currentOpenItem }) => {
  const {
    name,
    damage_vulnerabilities,
    damage_resistances,
    damage_immunities
  } = currentOpenItem;

  return (
    <div>
      {name}
      <SuggestionSection
        title="Vulnerabilities"
        list={damage_vulnerabilities}
      />
      <SuggestionSection title="Resistances" list={damage_resistances} />
      <SuggestionSection title="Immunities" list={damage_immunities} />
    </div>
  );
};

export default ModalContent;
