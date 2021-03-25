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
        description="If a creature or an object has vulnerability to a damage type, damage of that type is doubled against it."
        list={damage_vulnerabilities}
      />
      <SuggestionSection
        title="Resistances"
        description="If a creature or an object has resistance to a damage type, damage of that type is halved against it. "
        list={damage_resistances}
      />
      <SuggestionSection
        title="Immunities"
        description="If a creature or an object has immunity to a damage type, damage of that type is completely avoided."
        list={damage_immunities}
      />
    </div>
  );
};

export default ModalContent;
