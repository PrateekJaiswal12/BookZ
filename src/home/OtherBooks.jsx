import React , { useState, useEffect } from 'react'
import BookCard from '../components/BookCard';

const OtherBooks = () => {
    const [books,setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,6)));
    },[]);
  return (
    <div>
      <BookCard books = {books} headline="New Release"/>
    </div>
  )
  
}

export default OtherBooks;