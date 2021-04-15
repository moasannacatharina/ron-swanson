import "./searchField.css";

const SearchField = ({ handleClick }) => {
  return (
    <div className="search-field">
      <button onClick={handleClick}>search</button>
    </div>
  );
};

export default SearchField;
