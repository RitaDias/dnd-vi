import SuggestionSection from "../suggestion-section/suggestion-section.component";

const ModalContent = ({ currentOpenItem }) => {
  const { name, damage_immunities } = currentOpenItem;

  return (
    <div>
      {name}
      <SuggestionSection title="Immunities" list={damage_immunities} />
    </div>
  );
};

export default ModalContent;
