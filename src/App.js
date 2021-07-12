import React from 'react';
import './App.css';
import ControlPanel from './components/ControlPanel';
import Header from './containers/Header/index';
import Footer from './containers/Footer/index';

function App() {
  return (
    <div className='App'>
      <Header />

      <ControlPanel />

      <Footer />
    </div>
  );
}

export default App;
