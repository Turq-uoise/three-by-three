import { useState } from "react";
import Container from "react-bootstrap/Container";

import AnimeQuery from "../AnimeQuery/AnimeQuery"

export default function Search() {
  const [animeSearch, setAnimeSearch] = useState("");
  const [query, setQuery] = useState();

  function handleSearch(evt) {
    evt.preventDefault();
    setQuery(animeSearch);
    console.log("search query: " + query)
  }

  return (
    <div className="Search">
      <form onSubmit={handleSearch}>
        <input
          value={animeSearch}
          onChange={(evt) => setAnimeSearch(evt.target.value)}
          placeholder="Anime"
          required
          pattern=".{4,}"
        />
        <button type="submit">SEARCH</button>
      </form>
      <hr />
      Search Results:
      <Container>
        <AnimeQuery query={query}/>
      </Container>
    </div>
  );
}