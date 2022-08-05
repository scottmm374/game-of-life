import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ControlPanel from './components/ControlPanel';
import Header from './containers/Header';
import Footer from './containers/Footer';
// eslint-disable-next-line
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <ControlPanel />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
