import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import api from '../apis/api';
import * as auth from '../apis/auth';
import * as Swal from '../apis/alert';

// createContext : 컨텍스트 생성
export const LoginContext=createContext();
// LoginContext.displayName = 'LoginContextName';

// children : Provider에 내려줄 자식 요소들
const LoginContextProvider = ({children}) => {
    // 페이지 이동
    const navigate = useNavigate();

    // isLogin : 로그인 여부
    // false: isLogin 초기값(로그인 전)
    const [isLogin, setIsLogin]=useState(false);

    // 사용자 정보
    const [userInfo, setUserInfo] = useState({});

    // 권한 정보
    const [roles, setRoles] = useState({isUser:false, isAdmin:false});

    /**
     * 😊✅ 로그인 체크
     * @param {*} isAuthPage 
     */
    // isAuthPage: 인증
    const loginCheck=async (isAuthPage=false)=>{
        const accessToken = Cookies.get("accessToken");
        console.log("@# accessToken=>${accessToken}");
        let response;
        let data;

        // JWT 이 없음 💍in🍪❌
        if (!accessToken) {
            console.log("쿠키에 JWT(accessToken) 이 없음");
            // 로그아웃
            return;
        }
        
        // JWT 이 없음 💍in🍪⭕
        console.log("쿠키에 JWT(accessToken) 이 저장되어 있음");
        api.defaults.headers.common.Authorization = "Bearer ${accessToken}";

        try{
            // 비동기방식 : async, await 같이 사용
            // 사용자 정보
            response = await auth.info();
        }catch(error){
            console.error("@# error=>${error}");
            console.log("@# status=>${response.status}");
            return;
        }

        if (!response) {
            return;
        }

        console.log("JWT 토큰으로 사용자 정보 요청 성공!");

        data = response.data;
        console.log("@# data=>${data}");

        // 😀❌ 인증 실패
        if (data === "UNAUTHORIZED" || response.status === 401) {
            console.error("JWT 이 만료되었거나 인증에 실패함");
            return;
        }

        // 😀⭕ 인증 성공
        // 로그인정보 설정
    }

    /**
     * 🔐 로그인
     * @param {*} username 
     * @param {*} password 
     */
    const login = async (username, password)=>{
        console.log(`@# username=>${username}`);
        console.log(`@# password=>${password}`);

        try {
            const reponse = await auth.login(username, password);
            const data = reponse.data;
            const status = reponse.status;
            const headers = reponse.headers;
            const authorization = headers.authorization;
            const accessToken = authorization.replace("Bearer ","");//💍JWT

            console.log(`@# data=>${data}`);
            console.log(`@# status=>${status}`);
            console.log(`@# headers=>${headers}`);
            console.log(`@# JWT=>${accessToken}`);

            // 🔐⭕ 로그인 성공
            if (status === 200) {
                // 쿠키에 JWT를 저장해서 화면이동할때마다 가지고 다님
                Cookies.set("accessToken",accessToken);
                setIsLogin(true);

                Swal.alert("로그인 성공","메인 화면으로 이동합니다.","success",()=>{navigate("/")});
            }
        } catch (error) {
            console.error("@# error=>${error}");
        }
    }

    /**
     *  🔒 로그아웃
     */
    // logout 함수 : isLogin 변수에 false 저장
    const logout=()=>{
        console.log("@# 로그아웃");

        // 로그아웃 세팅
        logoutSetting();
        // setIsLogin(false);

        // 페이지 이동(메인)
        navigate("/");
        return;
    }

    // 로그아웃 세팅
    const logoutSetting=()=>{
        // 로그아웃 상태 설정
        setIsLogin(false);
        setUserInfo(null);
        setRoles(null);

        // 🍪❌ 쿠키 지우기
        Cookies.remove("accessToken");
        api.defaults.headers.common.Authorization = undefined;
    }

    // 초기시작시 실행, 상태값 변경시 실행
    useEffect(()=>{
        // 로그인 체크
        loginCheck();
        /*
        setTimeout(()=>{
            // 3초뒤에 로그인
            setIsLogin(true);
        },3000);
        */
    },[]);

    return (
        <div>
            {/* setIsLogin, logout 함수의 값을 내려줌 */}
            <LoginContext.Provider value={{isLogin, login, logout}}>
                {children}
            </LoginContext.Provider>
        </div>
    )
}

export default LoginContextProvider