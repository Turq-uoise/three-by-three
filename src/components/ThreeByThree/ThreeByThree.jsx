import { Container, Row } from "react-bootstrap";
import ImageBox from "../ImageBox/ImageBox";
import StarRating from "../StarRating/StarRating";
import { useEffect, useState } from "react";

export default function ThreeByThree({items, user, showTitle, id, rating}) {
  const [average, setAverage] = useState(0.0)

  useEffect(() => {
    function calcAvg() {
      let totalRating = 0;

      rating.forEach((ratingItem) => {
        totalRating += ratingItem.rating;
      });

      setAverage((totalRating / rating.length).toFixed(1));
    }

    calcAvg();
  }, [rating]);

  
  return (
    <Container className="ThreeByThree">
      <h4>"{items[9].title}" by {user.name}</h4>
      <div className="Rating"><StarRating id={id} user={user}/> <span className="average">{average} <span className="on">&#9733;</span></span></div>
      <Row className="imageRow"> 
        <ImageBox anime={items} clickEnabled={false} showTitle={showTitle} idx="0" />
        <ImageBox anime={items} clickEnabled={false} showTitle={showTitle} idx="1" />
        <ImageBox anime={items} clickEnabled={false} showTitle={showTitle} idx="2" />
      </Row>
      <Row className="imageRow">
        <ImageBox anime={items} clickEnabled={false} showTitle={showTitle} idx="3" />
        <ImageBox anime={items} clickEnabled={false} showTitle={showTitle} idx="4" />
        <ImageBox anime={items} clickEnabled={false} showTitle={showTitle} idx="5" />
      </Row>
      <Row className="imageRow">
        <ImageBox anime={items} clickEnabled={false} showTitle={showTitle} idx="6" />
        <ImageBox anime={items} clickEnabled={false} showTitle={showTitle} idx="7" />
        <ImageBox anime={items} clickEnabled={false} showTitle={showTitle} idx="8" />
      </Row>
      <br />
    </Container>
  );
} 