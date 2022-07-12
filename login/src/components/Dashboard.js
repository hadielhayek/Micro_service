import React, { useEffect, useState } from 'react'
import Loginform from './Loginform';
import SearchAppBar from './searchbar';
import './logout.css'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/userSlice';

export default function Dashboard() {

  const user2 = useSelector((state) => state.user)
  const dispatch = useDispatch()
  console.log(user2)
  const Logout = () => {
    console.log("logout")
    setUser({ username: '', password: '' })

  }
  const adminuser = {
    username: 'candidate',
    password: 'P@ssw0rd'
  }



  const [user, setUser] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const Login = details => {
   
    if (details.username === adminuser.username && details.password === adminuser.password) {
      console.log('we re logged in');

      dispatch(login({
        username: details.username,
        password: details.password
      }));


    }
    else {
      console.log('something is wrong')

    }
  }

 

  return (
    <div className="app" >

      {(user.password !== "") ? (
        <div className="welcome">
          <SearchAppBar />
          <h2>welcome <span>{user.username}</span></h2>

          <button onClick={Logout} className="logout">Logout</button>
        </div>
      ) : (
        <Loginform Login={Login} error={error} />
      )}
    </div>
  )
}
