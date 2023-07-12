import Badge from "react-bootstrap/Badge";

export default function Anime({title}) {
  return (
    <h6 className="Anime">
      <Badge bg="secondary">{title.slice(0, 25)}</Badge>
    </h6>
  );
} 