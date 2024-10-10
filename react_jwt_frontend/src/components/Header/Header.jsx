import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../../images/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div>
        <header>
            <div>
                <Link to="/">
                    {/* <img src='../../images/logo.png' className='logo' alt='logo'/> */}
                    <img src={pic1}></img>
                </Link>
            </div>
            <div className='util'>
                {/* 로그인 전 */}
                <ul>
                    <li><Link to="/login">로그인</Link></li>
                    <li><Link to="/join">회원가입</Link></li>
                    <li><Link to="/about">소개</Link></li>
                </ul>
                {/* 로그인 후 */}
                <ul>
                    <li><Link to="/user">마이페이지</Link></li>
                    <li><button className='link'>로그아웃</button></li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header