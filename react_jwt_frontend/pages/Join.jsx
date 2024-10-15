import React from 'react'
import Header from '../components/Header/Header'
import LoginContextConsumer from '../contexts/LoginContextConsumer'
import JoinForm from '../components/Join/JoinForm'
import * as auth from '../apis/auth';
import * as Swal from '../apis/alert';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const navigate = useNavigate();

  const join = async (form) => {
    console.log("@# form=>", form);

    let response;
    let data;

    try {
      response = await auth.join(form);
    } catch (error) {
      console.error("${error}");
      console.error("회원가입 요청 중 에러가 발생하였습니다.");
      return;
    }

    data = response.data;
    const status = response.status;
    // console.log("@# data=>${data}");
    console.log(`data : ${data}`);
    // console.log("@# status=>${status}");
    console.log(`status : ${status}`);

    // if (status == 200) {
    if (status === 200) {
      console.log("@# 회원가입 성공!");
      Swal.alert("회원가입 성공","메인 화면으로 이동합니다.","success",()=>{navigate("/login")});
    } else {
      console.log("@# 회원가입 실패!");
      Swal.alert("회원가입 실패","회원가입에 실패하였습니다.","error");
    }
  };

  return (
    <div>
      <Header />
      <div className='container'>
        {/* <h1>Join</h1>
            <hr/>
            <h2>회원가입 페이지</h2> */}
        <JoinForm join={join} />
      </div>
    </div>
  )
}

export default Join