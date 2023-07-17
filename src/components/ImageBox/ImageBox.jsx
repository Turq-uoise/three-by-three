export default function ImageBox({anime, setAnime, selectedAnime, idx, showTitle, clickEnabled}) {
  let image;
  let title;
  if (clickEnabled===undefined) clickEnabled=true;

  if (!anime[idx]) { 
    image ="https://cdn.discordapp.com/attachments/310454121746661377/1128802251218108446/image.png" // default
    title = "";
  } else {
    image = anime[idx].image;
    title = anime[idx].title;
  }

  return (
    <div 
      className="ImageBox"     
      style={{
        backgroundImage: `url(${image})`,
        width: "31.5%",
        height: "25vmin",
      }}
      onClick={clickEnabled ? () => setAnime({ ...anime, [idx]: selectedAnime }) : undefined}
    >
      {showTitle ? <span className="animeTitle">{title}</span> : ''}
    </div>
  );
}