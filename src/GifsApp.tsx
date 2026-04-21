import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  const [previousSearches, setPreviousSearches] = useState(["dog"]);

  // TODO: Implement search functionality and update previous searches
  const handleSearchClick = (searchTerm: string) => {
    console.log("Search term:", { searchTerm });
  };

  const handleSearch = (query: string) => {
    console.log({ query });
  };
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Search the Gifs"
        description="Find and share your favorite gifs!"
      />
      {/* Search form */}
      <SearchBar
        placeholder="Search for what you want..."
        onSearch={handleSearch}
      />
      {/* Preview search results */}
      <PreviousSearches
        searches={previousSearches}
        onLabelClick={handleSearchClick}
      />
      {/* Gif results */}
      <GifList gifs={mockGifs} />
    </>
  );
};
