import { useEffect, useState } from "react";
import ThreeByThree from "../../components/ThreeByThree/ThreeByThree";
import * as threeByThreesAPI from "../../utilities/threebythrees-api"
import { Container, Row, Col, Button } from "react-bootstrap";

export default function UserPage({showTitle, setShowTitle}) {
  const [threeByThrees, setThreeByThrees] = useState([])

  useEffect(function() {
    async function getThreeByThrees() {
      const threeByThrees = await threeByThreesAPI.getAll();
      setThreeByThrees(threeByThrees);
    }
    getThreeByThrees();
  }, [])

  return (
    <Container>
      <Row>
        <Col md={9} className="UserPage">
          <h1>User</h1>
          {threeByThrees.map(({items, user}) => (
            <ThreeByThree items={items} user={user} showTitle={showTitle}/>
          ))}
        </Col>
        <Col>
          <Button size="md" variant="info" onClick={() => setShowTitle(!showTitle)}>SHOW TITLES</Button>    
        </Col>
      </Row>
    </Container>
  );
}