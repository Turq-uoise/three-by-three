import { useState } from "react";

export default function ImageBox({anime, setAnime, selectedAnime, idx}) {
  const [showTitle, setShowTitle] = useState()
  
  let image;
  let title;

  if (!anime[idx]) { 
    image ="https://cdn.discordapp.com/attachments/310454121746661377/1128802251218108446/image.png" // default
    title = "";
  } else {
    image = anime[idx].image;
    title = anime[idx].title;
  }

  return (
    <div 
      className={`ImageBox ${anime[idx]}`}     
      style={{
        backgroundImage: `url(${image})`,
        padding: 50,
        width: "25vmin",
        height: "25vmin",
        border: "1px thick black",
      }}
      onClick={() => setAnime({...anime, [idx]: selectedAnime})}
    >
      <span className="animeTitle">{title}</span>
    </div>
  );
}