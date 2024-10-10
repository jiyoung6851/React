import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SaveForm = () => {
  let navigate = useNavigate();
  

  const [book, setBook]=useState({
    title:"",
    author:""
  });

  const changeValue=(e)=>{
    console.log("@# name=>"+e.target.name);
    console.log("@# value=>"+e.target.value);
    console.log("@# title=>"+book.title);
    console.log("@# author=>"+book.author);

    setBook({
      ...book,
      [e.target.name]:e.target.value
    })
  }
  /*
  const submitBook=(e)=>{
    fetch("http://localhost:8382/book",{
      method:"POST",
      headers:{
        "Content-Type":"application/json; charset=UTF-8"
      },
      body:JSON.stringify(book)
    })
    .then(res=>res.json())
    .then((res)=>{
      console.log(12,res);
    });
  }
  */
  const submitBook=(e)=>{
    // submit action 금지
    e.preventDefault();

    // axios 처리
    Axios.post("http://localhost:8382/book",book)
      .then(response => {
        // 성공응답처리
        console.log(response.data)
        if (response != null) {
          //홈으로 이동
          navigate("/");
        } else {
          alert("책 등록에 실패하였습니다.");
        }
      })
      .catch(error => {
        //오류처리
        console.error("Request failed:",error);
      })
  }
  return (
    <div>
      {/* <Form> */}
      <Form onSubmit={submitBook}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" placeholder="Enter title" onChange={changeValue} name='title'/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>저자</Form.Label>
          <Form.Control type="text" placeholder="Enter Author" onChange={changeValue} name='author'/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default SaveForm