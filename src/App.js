import React from 'react';
import './App.css';
import ControlPanel from './components/ControlPanel';
import Header from './containers/Header';
import Footer from './containers/Footer';

import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div fluid className='App'>
      <Header />

      <ControlPanel />

      <Footer />
    </div>
  );
}

export default App;
