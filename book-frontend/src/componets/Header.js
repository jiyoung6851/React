import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    // 변수, 훅(useState, useEffect): 함수 => 변수값 지정(상태관리)
    // state (상태o) => 변수 저장
    // stateless (상태x)
    return (  // 화면 구성
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Link to="/" className="navbar-brand">홈</Link>
                    <Nav className="me-auto">
                        <Link to="/joinForm" className='nav-link'>회원가입</Link>
                        <Link to="/loginForm" className='nav-link'>로그인</Link>
                        <Link to="/saveForm" className='nav-link'>글쓰기</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header