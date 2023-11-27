import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard';

const FavouriteBook = () => {
    const [Books,setBooks]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/all-books").then(res=>res.json()).then(data=>setBooks(data))
    },[])
  return (
    <div>
      <BookCard Books={Books} headline="Best Seller E-Books" />
    </div>
  )
}

export default FavouriteBook
