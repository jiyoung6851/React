import React, { useContext } from 'react'
import { LoginContext } from './LoginContextProvider'

const LoginContextConsumer = () => {
    // useContext : 컨텍스트를 쉽게 사용하는 훅
    const {isLogin} = useContext(LoginContext);

    return (
        <div>
            <h3>로그인 여부 : {isLogin?"로그인":"로그아웃"}</h3>
        </div>
    )
}

export default LoginContextConsumer