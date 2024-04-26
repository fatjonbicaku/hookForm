import { useState } from 'react'
//import './App.css'

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  return (
    <>
      <form action="">
        <div>
        <label htmlFor="">First Name:</label>
        <input type="text" name="" id="" onChange={(e) =>setFirstName(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="">Last Name</label>
        <input type="text" name="" id="" onChange={(e) =>setLastName(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="">Email:</label>
        <input type="email" name="" id="" onChange={(e) =>setEmail(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="">Password:</label>
        <input type="password" name="" id="" onChange={(e) =>setPassword(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="">Confirm Password:</label>
        <input type="password" name="" id="" onChange={(e) =>setConfirmPass(e.target.value)}/>
        </div>
      </form>
      <h3>Your Form Data</h3>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password} </p>
      <p>Confirm Password: {confirmPass}</p>
    </>
  )
}

export default Form
