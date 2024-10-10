import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateForm = (props) => {
    // useParams: React Router에서 제공하는 훅
    // url 경로에 있는 매개변수를 가져오는데 사용
    const propsParam = useParams();
    const id = propsParam.id;
    console.log(41, id);

    let navigate = useNavigate();

    const [book, setBook] = useState({
        title: "",
        author: ""
    });

    const changeValue = (e) => {
        console.log("@# name=>" + e.target.name);
        console.log("@# value=>" + e.target.value);
        console.log("@# title=>" + book.title);
        console.log("@# author=>" + book.author);

        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    // id를 가지고 책 정보를 조회
    useEffect(()=>{
        console.log("@@## UpdateForm useEffect 호출");

        // axios 처리
        Axios.get("http://localhost:8382/book/" + id)
            .then(response => {
                console.log("@# data => ", response.data);
                setBook(response.data);
            })
            .catch(error => {
                console.error("Request failed:", error);
            })
    }, []);

    const submitBook = (e) => {
        // submit action 금지
        e.preventDefault();

        // axios 처리
        // id(어떤 책인지)와 책내용 두가지를 넘겨야 함
        Axios.put("http://localhost:8382/book/"+id, book)
            .then(response => {
                // 성공응답처리
                console.log(response.data)
                if (response != null) {
                    //홈으로 이동
                    alert("책 수정이 완료되었습니다.");
                    navigate("/");
                } else {
                    alert("책 수정에 실패하였습니다.");
                }
            })
            .catch(error => {
                //오류처리
                console.error("Request failed:", error);
            })
    }

    return (
        <div>
            {/* <Form> */}
            <Form onSubmit={submitBook}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>제목</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" onChange={changeValue} name='title' value={book.title}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>저자</Form.Label>
                    <Form.Control type="text" placeholder="Enter Author" onChange={changeValue} name='author' value={book.author}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    수정하긩
                </Button>
            </Form>
        </div>
    )
}

export default UpdateForm