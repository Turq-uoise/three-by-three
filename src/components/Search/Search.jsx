import { useState } from "react";
import Container from "react-bootstrap/Container";

import AnimeQuery from "../AnimeQuery/AnimeQuery"

export default function Search({selectedAnime, setSelectedAnime, anime, setAnime}) {
  const [animeSearch, setAnimeSearch] = useState("");
  const [query, setQuery] = useState();

  function handleSearch(evt) {
    evt.preventDefault();
    setQuery(animeSearch);
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
        <button className='' type="submit">SEARCH</button>
      </form>
      <hr />
      <h4>Results:</h4>
      <Container style={{paddingTop: "1vmin"}}>
        <AnimeQuery query={query} selectedAnime={selectedAnime} setSelectedAnime={setSelectedAnime} anime={anime} setAnime={setAnime}/>
      </Container>
    </div>
  );
}