import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQueryAction } from "./gifs/actions/get-gif-by-query.actions";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  // TODO: Implement search functionality and update previous searches
  const handleSearchClick = (searchTerm: string) => {
    console.log("Search term:", { searchTerm });
  };

  const handleSearch = async (query: string) => {
    {
      // Normalizar el query para evitar problemas de mayúsculas y espacios
      query = query.trim().toLowerCase();

      // Validar que el query no esté vacío
      if (!query) return;

      // Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms ( si existe, no hacer nada )
      if (previousSearches.includes(query)) return;

      // Actualizar previousTerms agregando el nuevo término al inicio y limitando a 8 elementos máximo, es decir no puede ser un arreglo de más de 8.
      setPreviousSearches((prev) => [query, ...prev.slice(0, 7)]);
      console.log("----- handleSearch -----");

      const gifsResponse = await getGifsByQueryAction(query);
      setGifs(gifsResponse);
    }
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
      <GifList gifs={gifs} />
    </>
  );
};
