import React from 'react';
import './App.css';
import ControlPanel from './components/ControlPanel';
import Header from './containers/Header';
import Footer from './containers/Footer';

import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className='App'>
      <Header />
      <ControlPanel />
      <Footer />
    </div>
    // <Container fluid className='App'>
    //   <Row>
    //     <Col>
    //       <Header />
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col>
    //       <ControlPanel />
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col>
    //       <Footer />
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default App;
