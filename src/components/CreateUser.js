import React, { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
const CreateUser = () => {

    const [username , setUsername] = useState('')
    const navigate = useNavigate();
    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setUsername(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) =>{
        event.preventDefault();        
        axios.post('http://localhost/API/user/save', username).then(function(response){
            console.log(response.data);
            navigate('/')
        })
    }
  return (
    <div>
        <h1>CreateUser</h1>
        <form onSubmit={handleSubmit}>
            <table cellSpacing="10">
                <tbody>
                    <tr>
                        <th><label> Name: </label></th>
                        <td><input type='text' name='name' onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <th><label> Email: </label></th>
                        <td><input type='text' name='email' onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <th> <label> Mobile: </label></th>
                        <td> <input type='text' name='mobile' onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td align='right' colSpan={2}><button>Save</button></td>
                    </tr>

                </tbody>
            </table>

           
            
        </form>
    </div>
  )
}

export default CreateUser