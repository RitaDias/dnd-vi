const SuggestionSection = ({ title, list }) => {
  return (
    <div className="suggestion-section">
      <div>{title}</div>
      {list.length > 0 ? list.map((item) => item) : "nothing here :("}
    </div>
  );
};

export default SuggestionSection;
