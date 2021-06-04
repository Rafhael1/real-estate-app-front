import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import axios from './components/api/axios'

const App = () => {


  const [ file, setFile ]: any = useState(null);

  const [ title, setTitle ] = useState('Home');
  const [ description, setDescription ] = useState('A description');
  const [ address, setAddress ] = useState('A address placeholder');
  const [ country, setCountry ] = useState('Country');
  const [ price, setPrice ] = useState('1234124');
  const [ status, setStatus ] = useState('Sold out');


  const info = async(e: any) => {
    e.preventDefault();
    try {
      const body = {
        title,
        description,
        address,
        country,
        price,
        status
      }
      console.log(JSON.stringify(body))
      console.log(body);

      const info = await axios.post('/upload', {
        headers: {
          "Content-type": "application/json"
        },
        body: body
      });


    } catch (error) {
      
    }
  }

  const api = async(e: any) => {
    e.preventDefault();
    try {

      const formData: any = new FormData();
      formData.append('image', file, file.name);

      const image = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      }) 


    } catch (error) {
      console.log(error)
    }
  }

  const both = (e: any) => {
    info(e);
    api(e)
  }

  return (
    <div>
      <form onSubmit={both}>
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
