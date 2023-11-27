import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard';

const OtherBooks = () => {
  
    const [Books,setBooks]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/all-books").then(res=>res.json()).then(data=>setBooks(data.slice(1,6)))
    },[])
  return (
    <div>
      <BookCard Books={Books} headline="Other E-Books" />
    </div>
  

  )
}

export default OtherBooks
