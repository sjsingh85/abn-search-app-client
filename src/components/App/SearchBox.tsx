import React, { useState, useEffect } from "react";
import useDebounce from "../../utility/hooks/useDebounce";

interface SearchBoxProps {
  onSearchHandler: (searchText: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearchHandler }) => {
  const [searchText, setSearchText] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    setSearchText(searchText);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //no submit button action as results are supposed to be
    //displayed as soon as user types in something
    event.preventDefault();
  };

  const debouncedSearchText = useDebounce(searchText, 400);

  useEffect(() => {
    onSearchHandler(debouncedSearchText);
  }, [onSearchHandler, debouncedSearchText]);

  return (
    <div className="search-box">
      <form onSubmit={onSubmit}>
        <div>
          <label>Search for ABN/Company Name: </label>
          <input
            name="search-input"
            type="text"
            data-testid="search-input"
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
