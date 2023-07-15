import Badge from "react-bootstrap/Badge";

export default function Anime({title, selectedAnime, setSelectedAnime, image}) {
  if (!title) return;
  
  return (
    <h5 className="Anime">
      <Badge 
        bg={`${selectedAnime.title === title ? 'primary' : 'secondary'}`}
        onClick={() => setSelectedAnime({title, image})}
        className={`${title} ${selectedAnime.title === title && 'selected'}`} 
      >
        {title.slice(0, 25)}
      </Badge>
    </h5>
  );
} 