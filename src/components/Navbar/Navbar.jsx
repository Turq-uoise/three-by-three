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
      <Row style={{paddingLeft: 10, fontWeight: "bold"}}>{user}</Row>
      <Row>
        <Link to="/" style={{textDecoration:"none", fontWeight:"bolder"}}>Home</Link>
      </Row>
      <Row>
        <Link to="/create" style={{textDecoration:"none", fontWeight:"bolder"}}>Create a 3x3</Link>
      </Row>
      <Row><Link to="" onClick={handleLogOut} style={{textDecoration:"none", fontWeight:"bolder"}}>Log Out</Link></Row>
      
    </Container>
  );
}