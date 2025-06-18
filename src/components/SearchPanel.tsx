import { type ChangeEvent } from "react";
import "../styles/searchPanel.css";

type SearchPanelProps = {
  inputValue: string;
  selectedValue: string;
  title?: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SearchPanel = ({
  onInputChange,
  onOptionChange,
  title = "Search",
  inputValue,
  selectedValue,
}: SearchPanelProps) => {
  return (
    <div className="search-panel">
      <h3>{title}</h3>
      <input
        value={inputValue}
        className="search-bar"
        name="search-bar"
        type="text"
        placeholder="Search ..."
        onChange={onInputChange}
      />

      <select
        value={selectedValue}
        className="search-drop-down"
        name="search-by"
        onChange={onOptionChange}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="year">Year</option>
      </select>
    </div>
  );
};

export default SearchPanel;
