import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios'
import Button from 'react-bootstrap/Button';
import UpdateForm from './UpdateForm';

// const Detail = () => {
const Detail = (props) => {
    let navigate = useNavigate();

    // useParams: React Router에서 제공하는 훅
    // url 경로에 있는 매개변수를 가져오는데 사용
    const propsParam = useParams();
    const id = propsParam.id;
    console.log(21, id);

    // useState: React의 상태관리 훅
    // setBook: book 상태를 업데이트하는 함수
    const [book, setBook] = useState({
        id: "",
        title: "",
        author: ""
    });

    /*
        // useEffect: React의 생명주기의 훅으로, 컴포넌트가 처음 렌더링될때 한번 실행
        useEffect(() => {
            console.log("@@@### Detail useEffect 호출");
    
            // get생략
            fetch("http://localhost:8382/book/"+id)
            .then(res=>res.json())
            .then(res=>{
                console.log("@# res=> ",res);
                setBook(res);
            });
            
        // });
        // 초기값 없으면 무한 반복함
        },[]);
    */

    useEffect(() => {
        console.log("@@@### Detail useEffect 호출");

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

    const updateBook = () => {
        console.log(31, id);
        navigate("/updateForm/" + id);
    }

    const deleteBook = () => {
        console.log(32, id);

        Axios.delete("http://localhost:8382/book/" + id)
            .then(response => {
                console.log("@# data => ", response.data);

                // setBook(response.data);
                navigate("/");
                
                alert("책 삭제 완료");
            })
            .catch(error => {
                console.error("Request failed:", error);
            })
    }


    return (
        <div>
            <h1>책 상세보기</h1>
            {/* <Button variant="primary">수정</Button>{' '} */}
            <Button variant="outline-primary" onClick={updateBook}>수정</Button>{' '}
            <Button variant="outline-secondary" onClick={updateBook}>수정</Button>{' '}
            <Button variant="outline-success" onClick={updateBook}>수정</Button>{' '}
            <Button variant="outline-warning" onClick={updateBook}>수정</Button>{' '}
            <Button variant="outline-danger" onClick={updateBook}>수정</Button>{' '}
            <Button variant="outline-info" onClick={updateBook}>수정</Button>{' '}
            <Button variant="outline-dark" onClick={updateBook}>수정</Button>{' '}
            <Button variant="outline-light" onClick={updateBook}>수정</Button>{' '}
            <br/>
            <br/>
            <Button variant="primary" onClick={deleteBook}>삭제</Button>{' '}
            <Button variant="secondary" onClick={deleteBook}>삭제</Button>{' '}
            <Button variant="success" onClick={deleteBook}>삭제</Button>{' '}
            <Button variant="warning" onClick={deleteBook}>삭제</Button>{' '}
            <Button variant="danger" onClick={deleteBook}>삭제</Button>{' '}
            <Button variant="info" onClick={deleteBook}>삭제</Button>{' '}
            <Button variant="dark" onClick={deleteBook}>삭제</Button>{' '}
            <Button variant="light" onClick={deleteBook}>삭제</Button>{' '}
            <hr />
            <h3>{book.author}</h3>
            <h1>{book.title}</h1>


        </div>
    )
}

export default Detail