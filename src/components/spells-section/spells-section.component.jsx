import { default as SpellsList } from "../spells-list/spells-list.container";

import "./spells-section.styles.scss";

const SpellsSection = ({ types }) => {
  return (
    <div className="spells-section">
      {types.map((type) => (
        <SpellsList key={type} type={type} />
      ))}
    </div>
  );
};

export default SpellsSection;
