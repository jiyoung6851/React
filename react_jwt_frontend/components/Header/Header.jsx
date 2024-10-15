import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../../images/logo.png'
import './Header.css'
import { LoginContext } from '../../contexts/LoginContextProvider'

const Header = () => {
    // ✅ isLogin : 로그인 여부 - Y(true), N(false)
    // const { isLogin } = useContext(LoginContext);
    const { isLogin, logout } = useContext(LoginContext);

    return (
        <div>
            <header>
                <div>
                    <Link to="/">
                        {/* <img src='../../images/logo.png' className='logo' alt='logo'/> */}
                        <img src={pic1} />
                    </Link>
                </div>
                <div className='util'>
                    {/* 로그인 전 */}
                    {
                        !isLogin
                            ?
                            <ul>
                                <li><Link to="/login">로그인</Link></li>
                                <li><Link to="/join">회원가입</Link></li>
                                <li><Link to="/about">소개</Link></li>
                            </ul>
                            :
                            <ul>
                                <li><Link to="/user">마이페이지</Link></li>
                                <li><button className='link' onClick={()=>logout()}>로그아웃</button></li>
                            </ul>
                    }
                    {/* 로그인 후 */}
                </div>
            </header>
        </div>
    )
}

export default Header