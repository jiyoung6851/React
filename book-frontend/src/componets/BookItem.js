import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

// const BookItem = () => {
// props: 부모 컴포넌트에서 전달된 속성(데이터)를 받는 객체
const BookItem = (props) => {

  // props.book: props 객체 내부에서 book이라는 속성이 있고, 
  // book 속성안에 책정보(id, title, author)가 있음
  const {id, title, author} = props.book;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        {/* <Card.Title>제목 1</Card.Title> */}
        <Card.Title>{title}</Card.Title>
        {/* <Button variant="primary">상세보기</Button> */}
        <Link to={"/book/"+id} className='btn btn-primary'>상세보기</Link>
      </Card.Body>
    </Card>
  )
}

export default BookItem