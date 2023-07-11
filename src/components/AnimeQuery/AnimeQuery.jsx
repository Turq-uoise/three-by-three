import Jikan from 'jikan4.js' 
import { useEffect, useState } from 'react';

import Anime from './Anime';

export default function AnimeQuery({query}) {

  const client = new Jikan.Client()
  const [searchResult, setSearchResult] = useState(['No Results']);
  console.log("anime: " + query)

  useEffect(function() {
    async function search(searchString) {
      const result = (await client.anime.search(searchString)).map((anime) => {
        return anime.title.default;
      });
      setSearchResult(result.slice(0, 5));
    }
    search(query)
  })


  return (
    <div className="AnimeQuery">
      {searchResult.map((title) => (
        <Anime title={title} />
      ))}
      <br />
      ...
    </div>
  );
}