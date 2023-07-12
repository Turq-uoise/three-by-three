import Jikan from 'jikan4.js' 
import { useEffect, useState } from 'react';

import Anime from './Anime';

export default function AnimeQuery({query}) {

  const client = new Jikan.Client()
  const [searchResult, setSearchResult] = useState(['No Results']);
  console.log("animequery: " + query)

  useEffect(function() {
    console.log("animequery: " + query)
    async function search(searchString) {
      let result = (await client.anime.search(searchString, null, null, 5)).map((anime) => {
        return anime.title.default;
      });

      // if (result.length > 5) result = result.slice(0,5);
      setSearchResult(result);
    }
    if (query) search(query)
  }, [query])


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