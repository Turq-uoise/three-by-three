import { Container, Row } from "react-bootstrap";
import ImageBox from "../ImageBox/ImageBox";

export default function ThreeByThree({items, user, showTitle}) {
  return (
    <Container className="ThreeByThree">
      <h4>3x3 by {user.name}</h4>
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