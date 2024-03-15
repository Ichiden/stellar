import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { UseDispatch,useDispatch,useSelector } from 'react-redux'
import { useLoginMutation } from '../slices/userApiSlice'
import { setCredentials } from '../slices/authSlice'
import {toast} from 'react-toastify'


const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();

    const {userInfo} = useSelector((state) => state.auth)

    useEffect(() => {
        if(userInfo){
            navigate('/')
        }
    },[navigate, userInfo])

    const loginButtonFunction = async() => {
        try{
            const res = await login({email, password}).unwrap();
            dispatch(setCredentials({...res}));
            navigate('/')
        }catch(err){
            toast.error(err?.data?.message || err.error)
        }
    }
  return (
    <div>
      <p>Login</p>
      <input type='text' placeholder='Enter Email' onChange={e => setEmail(e.target.value)} /><br />
      <input type='password' placeholder='Enter Password' onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={loginButtonFunction}>Login</button>
    </div>
  )
}

export default LoginPage
