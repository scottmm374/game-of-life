import React from 'react';
import './App.scss';
import "./bootstrap.css";
import "./App.scss";
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
