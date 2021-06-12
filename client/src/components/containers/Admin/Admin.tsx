import React, { useState } from 'react'

import axios from '../../api/axios'

// Styles

import { Input } from './Admin.Style';

const Admin = () => {

    // States
    const [ file1, setFile1 ]: any = useState(null);


    const [ title, setTitle ] = useState('Cabana');
    const [ description, setDescription ] = useState('Not description');
    const [ address, setAddress ] = useState('A address placeholder');
    const [ country, setCountry ] = useState('Country');
    const [ price, setPrice ] = useState('1234124');
    const [ status, setStatus ] = useState('Sold out');
    
    const api = async(e: any) => {
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

          const formData: any = new FormData();
          formData.append('image', file1, file1.name);
          //formData.append('image', file2, file2.name);
    
          const res = await axios.post('/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            //body: body
          }) 
    
          console.log(res)
    
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <form onSubmit={(e: any) =>  api(e)}>
            <Input type="file" name="image" multiple onChange={(e: any) => setFile1(e.target.files[0])} />
            <button type="submit" >Submit</button>
        </form>
    )
}

export default Admin;