import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Navbar({setUser, user}) {

  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <Container className="NavBar">
      <Row>
        <Link to="/">Home</Link>
      </Row>
      <Row>
        <Link to="/create">Create a 3x3</Link>
      </Row>
      <Row className="user">
        <Col>{user}</Col>
        <Col><Link to="" onClick={handleLogOut}>Log Out</Link></Col>
      </Row>
    </Container>
  );
}