import React, { useState } from 'react';
import './signup.css'
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import loginIcon from '../images/newlogo.png';
import Background from '../images/background.png';



export default function Singup() {

   const [fisrtname ,setFirstname] = useState();
   const [lastname ,setLastname] = useState();
   const [email ,setEmail] = useState();
   const [username ,setUsername] = useState();
   const [password , setPassword]=useState();

     const handleSubmite = (e) =>{
       e.preventDefault()
       axios.post('http://localhost:3001/signup', {fisrtname, lastname, email, username, password})
    .then(result => console.log(result))
       .then(result=> console.log(result))
       .catch(err=>console.log(err))
     }

  return (
<div className='container'>
<img src={Background} alt="Backgound3" className="background-img"/>
    <Form className='overlay-form' onSubmit={handleSubmite}>
    <img src={loginIcon} alt="Login Icon" className="login-icon" />
    <h2>Sign Up</h2>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control className='input' type="text" placeholder="Ex:Jhon" 
        onChange={(e)=>setFirstname(e.target.value)}/>

        <Form.Label>Last Name</Form.Label>
        <Form.Control className='input' type="text" placeholder="Ex:Anderson"
        onChange={(e)=>setLastname(e.target.value)} />

        <Form.Label>Email Address</Form.Label>
        <Form.Control className='input' type="email" placeholder="Jhon@mail.com" 
        onChange={(e)=>setEmail(e.target.value)} />

        <Form.Label>Username</Form.Label>
        <Form.Control className='input' type="text" placeholder="Enter Username" 
        onChange={(e)=>setUsername(e.target.value)} />

        <Form.Label>Password</Form.Label>
        <Form.Control className='input' type="text" placeholder="Enter password" 
        onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <button className='btn mx-auto d-block' >Sign Up</button>
      
    </Form>
</div>

  )
}
