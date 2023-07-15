import ImageBox from '../../components/ImageBox/ImageBox';
import Search from '../../components/Search/Search';

import { create } from '../../utilities/threebythrees-api'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function CreatePage({showTitle, setShowTitle}) {
  const [selectedAnime, setSelectedAnime] = useState({
    title: "",
    image: "",
  })
  const [anime, setAnime] = useState([])

  async function sendThreeByThree() {
    await create(Object.values(anime))
    setAnime([]);
  }

  return (
    <>
    <h1 className="CreatePage">
      CreatePage
    </h1>
    <Container className="imageContainer">
      <Row>
        <Col md={9}>
          <Row className="imageRow"> 
            <ImageBox anime={anime} selectedAnime={selectedAnime} setAnime={setAnime}  showTitle={showTitle} idx="1"/>
            <ImageBox anime={anime} selectedAnime={selectedAnime} setAnime={setAnime}  showTitle={showTitle}idx="2" />
            <ImageBox anime={anime} selectedAnime={selectedAnime} setAnime={setAnime}  showTitle={showTitle}idx="3" />
          </Row>
          <Row className="imageRow">
            <ImageBox anime={anime} selectedAnime={selectedAnime} setAnime={setAnime}  showTitle={showTitle}idx="4" />
            <ImageBox anime={anime} selectedAnime={selectedAnime} setAnime={setAnime}  showTitle={showTitle}idx="5" />
            <ImageBox anime={anime} selectedAnime={selectedAnime} setAnime={setAnime}  showTitle={showTitle}idx="6" />
          </Row>
          <Row className="imageRow">
            <ImageBox anime={anime} selectedAnime={selectedAnime} setAnime={setAnime}  showTitle={showTitle}idx="7" />
            <ImageBox anime={anime} selectedAnime={selectedAnime} setAnime={setAnime}  showTitle={showTitle}idx="8" />
            <ImageBox anime={anime} selectedAnime={selectedAnime} setAnime={setAnime}  showTitle={showTitle}idx="9" />
          </Row>
          <Row className="d-grid gap-2">
            <Button size="md" variant="success" onClick={sendThreeByThree} disabled={Object.keys(anime).length < 9}>SAVE</Button>
            <Button variant="secondary" size="md" onClick={() => setAnime([])}>RESET</Button>
          </Row>
        </Col>
        <Col md={2}>
        <br />
         <Search selectedAnime={selectedAnime} setSelectedAnime={setSelectedAnime} anime={anime} setAnime={setAnime}/>
         <button className='btn-sm' style={{marginLeft: "5px"}} onClick={() => setShowTitle(!showTitle)}>SHOW TITLE</button>
        </Col>
      </Row>
    </Container>
    </>
  );
}