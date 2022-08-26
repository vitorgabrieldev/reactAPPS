// ============= Imports styleSheets ================

import './App.css';

// ============= Import Components Pages ============

import HeaderPage from './components/page/HeaderPage';
import Content from './components/page/Content';
import FooterPage from './components/page/FooterPage';

// ============= React BootStrap Import =============

import React from 'react';
import { Button } from 'reactstrap';

function App() {
  return (
    <div className="AppIndex">
      <Button color="danger">Danger!</Button>
      <HeaderPage />
      <Content />
      <FooterPage /> 
    </div>
  );
}

export default App;
