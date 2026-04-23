import { useEffect, useState } from "react";

interface SearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
}
export const SearchBar = ({
  placeholder = "Search for gifs...",
  onSearch,
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Debounce the search input to avoid excessive calls to onSearch
    const timeoutId = setTimeout(() => {
      onSearch(query);
    }, 700);

    // Cleanup function to reset query when component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onSearch]);

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyDownEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDownEnter}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
