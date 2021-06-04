import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import axios from './components/api/axios'

const App = () => {


  const [ file, setFile ]: any = useState(null);


  const api = async(e: any) => {
    e.preventDefault();
    try {

      const formData: any = new FormData();
      formData.append('image', file, file.name);
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
       // body
      })

      console.log(response)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={(e) => api(e)}>
        <input type="file" name="image" onChange={(e: any) => setFile(e.target.files[0])} />
        <button type="submit" >Upload</button>
      </form>
      {/*<Router>
        <>
         <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/results" ></Route>
            <Route path="/results/:id" ></Route>
         </Switch>       
        </>
      </Router>*/}
    </div>
  );
}

export default App;
