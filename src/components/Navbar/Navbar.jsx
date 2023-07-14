import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Navbar({setUser, user}) {

  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <Container style={{backgroundColor: "lime"}}>
      <Row>
        <Link to="/">Home</Link>
      </Row>
      <Row>
        <Link to="/create">Create a 3x3</Link>
      </Row>
      <Row>
      </Row>
      <Row style={{position: "absolute", bottom: 0}}>
        <span style={{position: "relative", bottom: 20}}>
          {user} 
          <br />
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        </span>
      </Row>
    </Container>
  );
}