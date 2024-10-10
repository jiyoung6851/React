package com.boot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.boot.domain.Book;
import com.boot.service.BookService;

@RestController
public class BookController {
	@Autowired
	private BookService bookService;
	
	/*
	@GetMapping("/")
	public ResponseEntity<?> findAll(){
		return new ResponseEntity<String>("ok",HttpStatus.OK);
//		return new ResponseEntity<String>("ok",HttpStatus.NOT_FOUND);
	}
	*/
	
	@CrossOrigin // 자바스크립트 요청 허용
	@GetMapping("/book")
	public ResponseEntity<?> findAll(){
		return new ResponseEntity<>(bookService.getBookAll(),HttpStatus.OK);
	}

	@CrossOrigin // 자바스크립트 요청 허용
	@PostMapping("/book")
//	public ResponseEntity<Book> saveBook(Book book){
	public ResponseEntity<Book> saveBook(@RequestBody Book book){
		return new ResponseEntity<>(bookService.saveBook(book),HttpStatus.OK);
	}

	@CrossOrigin // 자바스크립트 요청 허용
	@GetMapping("/book/{id}")
	public ResponseEntity<Book> getBookOne(@PathVariable(name = "id") Long id){
		return new ResponseEntity<>(bookService.getBookOne(id),HttpStatus.OK);
	}
	
	@CrossOrigin // 자바스크립트 요청 허용
	@PutMapping("/book/{id}")
//	public ResponseEntity<Book> modifyBook(@PathVariable(name = "id") Long id, Book book){
	public ResponseEntity<Book> modifyBook(@PathVariable(name = "id") Long id,@RequestBody Book book){
		return new ResponseEntity<>(bookService.modifyBook(id, book),HttpStatus.OK);
	}

	@CrossOrigin // 자바스크립트 요청 허용
	@DeleteMapping("/book/{id}")
	public ResponseEntity<String> delBook(@PathVariable(name = "id") Long id){
		return new ResponseEntity<>(bookService.delBook(id),HttpStatus.OK);
	}
}
