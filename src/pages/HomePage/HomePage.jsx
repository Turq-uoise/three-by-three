import { useEffect, useState } from "react";
import ThreeByThree from "../../components/ThreeByThree/ThreeByThree";
import * as threeByThreesAPI from "../../utilities/threebythrees-api"
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage({showTitle, setShowTitle}) {
  const [threeByThrees, setThreeByThrees] = useState([])
  const [showAll, setShowAll] = useState(false)

  useEffect(function() {
    async function getThreeByThrees() {
      const allthreeByThrees = await threeByThreesAPI.getAll();
      setThreeByThrees(allthreeByThrees);
    }
    getThreeByThrees();
    if (threeByThrees.length > 0) {
      setShowAll(false)
    } else {
      setShowAll(true)
    }
  }, [])

  return (
    <Container>
      <Row>
        <Col md={9} className="HomePage">
          <h1>Home</h1>
          {showAll ? 
            threeByThrees.map(({items, user, _id, rating}) => (
              <ThreeByThree items={items} user={user} showTitle={showTitle} id={_id} rating={rating}/>
            ))
            :
            <h2>No 3x3s yet, go and <Link to="/create" style={{textDecoration:"none", fontWeight:"bolder"}}>Create one!</Link></h2>
          }
        </Col>
        <Col>
          <Button size="md" variant="info" onClick={() => setShowTitle(!showTitle)}>SHOW TITLES</Button>    
        </Col>
      </Row>
    </Container>
  );
}