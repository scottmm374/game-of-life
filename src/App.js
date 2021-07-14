import React from 'react';
import './sass/main.scss';
import { Container, Row, Col } from 'react-bootstrap';
import ControlPanel from './components/ControlPanel';
import Header from './containers/Header/index';
import Footer from './containers/Footer/index';

function App() {
  return (
    <Container fluid className='App'>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>

      <Row>
        <Col>
          <ControlPanel />
        </Col>
      </Row>

      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
