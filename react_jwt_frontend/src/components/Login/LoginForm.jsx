import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './LoginForm.css'
import { LoginContext } from '../../contexts/LoginContextProvider';

const LoginForm = () => {
    const {login} = useContext(LoginContext);

    const onLogin=(e)=>{
        e.preventDefault();

        const form = e.target;
        const username = form.username.value;
        const password = form.password.value;
        
        console.log("@# 회원로그인 값들=>",username,password);
        login(username,password);
    }
    return (
        <div className='form'>
            <h2 className='login-title'>Login</h2>
            <form className='login-form' onSubmit={(e)=>onLogin(e)}>
                <label>username</label>
                {/* <Form.Control type="text" placeholder="Enter username" /> */}
                <input type="text" name='username' placeholder="Enter username" required />
                <label>Password</label>
                <input type="password" name='password' placeholder="Password" required />
                <button type='submit' className='btn btn--form btn-login'>
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginForm