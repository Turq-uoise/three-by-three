import ImageBox from '../../components/ImageBox/ImageBox';
import Search from '../../components/Search/Search';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

export default function CreatePage() {
  const [selectedAnime, setSelectedAnime] = useState({
    title: "",
    image: "",
  })
  const [anime, setAnime] = useState([])

  return (
    <>
    <h1 className="CreatePage">
      CreatePage
    </h1>
    <Container className="imageContainer">
      <Row>
        <Col md={9}>
          <Row className="imageRow"> 
            <ImageBox anime={anime} selectedAnime={selectedAnime} setAnime={setAnime} idx="1"/>
            <ImageBox anime={anime} selectedAnime={selectedAnime} setAnime={setAnime} idx="2" />
            <ImageBox anime={anime} selectedAnime={selectedAnime} setAnime={setAnime} idx="3" />
          </Row>
          <Row className="imageRow">
            <ImageBox anime={anime} selectedAnime={selectedAnime} setAnime={setAnime} idx="4" />
            <ImageBox anime={anime} selectedAnime={selectedAnime} setAnime={setAnime} idx="5" />
            <ImageBox anime={anime} selectedAnime={selectedAnime} setAnime={setAnime} idx="6" />
          </Row>
          <Row className="imageRow">
            <ImageBox anime={anime} selectedAnime={selectedAnime} setAnime={setAnime} idx="7" />
            <ImageBox anime={anime} selectedAnime={selectedAnime} setAnime={setAnime} idx="8" />
            <ImageBox anime={anime} selectedAnime={selectedAnime} setAnime={setAnime} idx="9" />
          </Row>
        </Col>
        <Col>
        <br />
         <Search selectedAnime={selectedAnime} setSelectedAnime={setSelectedAnime} anime={anime} setAnime={setAnime}/>
        </Col>
      </Row>
    </Container>
    </>
  );
}