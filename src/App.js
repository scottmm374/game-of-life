import React from 'react';
import './sass/main.scss';
import ControlPanel from './components/ControlPanel';
import Header from './containers/Header/index';
import Footer from './containers/Footer/index';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <Row>
        <Col>
          <Header />
        </Col>
      </Row> */}
      {/* <Container>
        <Row>
          <Col> */}
      <ControlPanel />
      {/* </Col>
        </Row>
      </Container> */}

      {/* <Row>
        <Col>
          
        </Col>
      </Row> */}
      <Footer />
    </div>
  );
}

export default App;
