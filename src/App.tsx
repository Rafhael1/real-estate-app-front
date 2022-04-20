import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Pages/Router';

const App = () => (
  <>
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
