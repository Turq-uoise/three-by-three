import './App.css';
import { useState } from 'react';

import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HomePage from '../HomePage/HomePage';
import AuthPage from '../AuthPage/AuthPage';
import CreatePage from '../CreatePage/CreatePage';
import Navbar from '../../components/Navbar/Navbar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [showTitle, setShowTitle] = useState()

  return (
    <main className="App">
      { user ?
        <Container fluid>
          <Row>
            <Col>
              <Navbar user={user.name} setUser={setUser}/>
            </Col>
            <Col md={10}>
              <Routes>
                <Route path="/create" element={<CreatePage showTitle={showTitle} setShowTitle={setShowTitle}/>} />
                <Route path="/" element={<HomePage showTitle={showTitle} setShowTitle={setShowTitle}/>} />
              </Routes>
            </Col>
          </Row>
        </Container>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
