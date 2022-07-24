import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Pages/Router';
import Snackbar from 'Components/Snackbar/Snackbar';

const App = () => (
  <>
    <Router>
      <Snackbar />
      <Routes />
    </Router>
  </>
);

export default App;
