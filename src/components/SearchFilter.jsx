import PropTypes from "prop-types";
import { useState } from "react";

function SearchFilter({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search profiles..."
        className="w-full max-w-lg p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
        onChange={handleSearch}
        value={query}
      />
    </div>
  );
}

SearchFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchFilter;
