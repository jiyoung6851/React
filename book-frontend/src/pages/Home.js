import React, { useEffect, useState } from 'react'
import BookItem from '../componets/BookItem'
import Axios from 'axios'

const Home = () => {
  // 상태변수를 정의(books:현재 상태, setBooks:상태를 업데이트 하기 위한 함수)
  const [books, setBooks] = useState([]);

  // 컴포넌트가 처음 랜더링될때 실행
  // useEffect(()=>{
  //   console.log("@# useEffect 호출");

  //   fetch("http://localhost:8382/book"
  //     // 기본 get 방식 (생략가능)
  //     // ,{method:"GET"}
  //   )
  //     //리턴값을 res로 받고 res를 json형식으로 응답
  //     .then((res) => res.json())
  //     .then((res) => {// 결과값 res로 반환
  //       console.log(1,res);
  //       // 가져온 데이터를 books 상태에 저장 (화면에 다시 랜더링)
  //       setBooks(res);
  //       }
  //     );
  //   // 컴포넌트가 제거(umount)될때...
  //   return ()=>{
  //     console.log("@# useEffect umount 호출");
  //   }
  //   // 초기값으로 빈 배열[]
  // },[])

  useEffect(()=>{
    console.log("@# useEffect 호출");

    // axios 처리
    Axios.get("http://localhost:8382/book")
      .then(response => {
        console.log(response.data);
        setBooks(response.data);
      })
      .catch(error => {
        console.error("Request failed", error);
      })
      ;

      // 초기값으로 빈 배열[]
  },[])

  return (
    <div>
        {/* <h1>책 리스트 보기</h1> */}
        {/* <BookItem/> */}
        {books.map(book => (
          <BookItem key={book.id} book={book} />
        ))}
    </div>
  )
}

export default Home
