import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom'


const Login = ( { onLogin }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    
    
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: values => {
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
            .then(resp => {
                if (!resp.ok) {
                    console.error('Login failed.')
                    setIsLoggedIn(false)
                    return;
                }
                return resp.json();
            })
            .then(user => {
                if(user) {
                    onLogin(user)
                    setIsLoggedIn(true)
                }
            })
            .catch(e => {
                console.error(e)
            })
        }
    })
    return (
        <div className='loginbackground'>
        <div className='login'>
            <h1>Login Here</h1>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type='text'
                    name='username'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    placeholder='Username'
                />
                <input
                    type='password'
                    name='password' 
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Password"   
                />
                <button type="submit">Login</button>
            </form>
            {!isLoggedIn && <p>Username or password not found.</p>}
            <Link to='/signup'>Click here to sign up</Link>
        </div></div>
    )
}

export default Login
