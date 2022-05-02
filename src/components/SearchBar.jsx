import { useState } from "react";
import { SearchContext } from "../context/SearchContext";

const SearchBar = (props) => {
  const  [term, setTerm] = useState('');

  return (
    <form onSubmit={(e) => props.handleSearch(e, term)}>
      <input onChange ={(e) =>setTerm(e.target.value)}  type="text" placeholder="Search Here" />
      <button>
        Submit
      </button>
    </form>
  );
};

export default SearchBar;
