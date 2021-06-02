import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import axios from './components/api/axios'

const App = () => {


  const [ data, setData ] = useState({})


  const api = async() => {
    //e.preventDefault();
    try {

      const response = await axios.get('/search', {
        params: {
          limit: 50,
          term: 'burger',
          location: 'miami'
        }
      })

      console.log(response)

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    api();
  }, [])

  return (
    <div>
      <Router>
        <>
         <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/results" ></Route>
            <Route path="/results/:id" ></Route>
         </Switch>       
        </>
      </Router>
    </div>
  );
}

export default App;
