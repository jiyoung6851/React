import React from 'react'
import Form from 'react-bootstrap/Form';
import './JoinForm.css'

const JoinForm = ({join}) => {
    const onJoin=(e)=>{
        e.preventDefault();
        const form = e.target;
        const userId = form.username.value;
        const userPw = form.password.value;
        const name = form.name.value;
        const email = form.email.value;

        console.log("@# 회원가입 값들=>",userId,userPw,name,email);
        join({userId,userPw,name,email});
    }
    return (
        <div className='form'>
            <h2 className='login-title'>Join</h2>
            <form className='login-form' onSubmit={(e)=>onJoin(e)}>
                <label>username</label>
                <input type="text" name='username' placeholder="Enter username" required />
                <label>Password</label>
                <input type="password" name='password' placeholder="Password" required />
                <label>name</label>
                <input type="text" name='name' placeholder="Enter name" required />
                <label>email</label>
                <input type="text" name='email' placeholder="Enter email" />
                <button type='submit' className='btn btn--form btn-login'>
                    Join
                </button>
            </form>
        </div>
    )
}

export default JoinForm