import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Pages/router';

const App = () => (
  <>
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
