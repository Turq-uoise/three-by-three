import ImageBox from '../../components/ImageBox/ImageBox';
import Search from '../../components/Search/Search';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CreatePage() {

  return (
    <>
    <h1 className="CreatePage">
      CreatePage
    </h1>
    <Container className="imageContainer">
      <Row>
        <Col md={9}>
          <Row className="imageRow"> 
            <ImageBox />
            <ImageBox />
            <ImageBox />
          </Row>
          <Row className="imageRow">
            <ImageBox />
            <ImageBox />
            <ImageBox />
          </Row>
          <Row className="imageRow">
            <ImageBox />
            <ImageBox />
            <ImageBox />
          </Row>
        </Col>
        <Col>
        <br />
         <Search />
        </Col>
      </Row>
    </Container>
    </>
  );
}