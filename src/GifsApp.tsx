import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Search the Gifs"
        description="Find and share your favorite gifs!"
      />
      {/* Search form */}
      <SearchBar placeholder="Search for what you want..." />
      {/* Preview search results */}
      <PreviousSearches searches={["Cat", "Dog", "Funny", "Memes"]} />
      {/* Gif results */}
      <GifList gifs={mockGifs} />
    </>
  );
};
