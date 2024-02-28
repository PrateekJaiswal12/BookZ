import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard';

const FavoriteBooks = () => {
    const [books,setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(2,8)));
    },[]);
  return (
    <div>
      <BookCard books = {books} headline="Our Best Sellers"/>
    </div>
  )
  
}

export default FavoriteBooks
