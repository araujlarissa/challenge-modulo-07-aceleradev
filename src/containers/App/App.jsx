import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Topbar from '../../components/Topbar';

import Routes from '../../routes';

import './App.scss';

const App = () => (
  <div className="app" data-testid="app">
     <BrowserRouter>
      <Topbar />
      <Routes />
    </BrowserRouter>
  </div>
);

export default App;
