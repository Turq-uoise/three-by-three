import Jikan from 'jikan4.js' 
import { useEffect, useState } from 'react';

import Anime from './Anime';

export default function AnimeQuery({query, selectedAnime, setSelectedAnime, anime, setAnime}) {

  const client = new Jikan.Client()
  const [searchResult, setSearchResult] = useState(['No Results']);

  useEffect(function() {
    async function search(searchString) {
      const result = (await client.anime.search(searchString, null, null, 5)).map((anime) => {
        return { 
          title: anime.title.default,
          image: anime.image.jpg.large.href
        }
      });
      setSearchResult(result);
    }
    if (query) search(query)
  }, [query])
  
  return (
    <div className="AnimeQuery">
      {searchResult.map((anime, idx) => (
        <Anime title={anime.title} image={anime.image} selectedAnime={selectedAnime} setSelectedAnime={setSelectedAnime} idx={idx}/>
      ))}
      <br />
      ...
    </div>
  );
}