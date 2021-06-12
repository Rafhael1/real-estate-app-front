import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import axios from './components/api/axios'

import Admin from './components/containers/Admin/Admin';

const App = () => {

  return (
    <div>
      <Router>
        <>
         <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/results" ></Route>
            <Route exact path="/admin" render={()  => <Admin />  } ></Route>
            <Route path="/results/:id" ></Route>
         </Switch>       
        </>
      </Router>
    </div>
  );
}

export default App;
