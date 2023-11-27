import React, { useState } from 'react'

import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
const UploadBooks = () => {

    const bookCategories = [
        "Fiction",
        "Romance",
        "Mystery",
        "Programming",
        "Science Fiction",
        "Fantasy",
        "Horror",
        "Self-help",
        "Memories",
        "Business",
        "Children Books",
        "Travel",
        "Religion",
        "Art and Design"

    ]
    const [selectedBookCategory,setSelectedBookCategory]=useState(bookCategories[0]);
    const handleChangeSelectedValue = (event)=>{
        console.log(event.target.value);
        setSelectedBookCategory(event.target.value);
    }
    const handleBookSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;

        const bookTitle = form.bookTitle.value;
        const authorName =form.authorName.value;
        const imageUrl = form.imageUrl.value;
        const category = form.categoryName.value;
        const bookDescription=form.bookDescription.value;
        const bookPdfUrl=form.bookPdfUrl.value;
        const bookObj ={
          bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl
        }
        console.log(bookObj)

        fetch("http://localhost:4000/upload-book",{
          method:"POST",
          headers:{
            "Content-type":"application/json",

          },
          body:JSON.stringify(bookObj)
        }).then(res=>res.json()).then(data=>{
          //console.log(data)
          alert("Book uploaded successfully!!!!")

        })
    }
  return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Upload a E-book</h2>

        <form  onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="E-Book Title" />
        </div>
        <TextInput id="bookTitle"  name="bookTitle" placeholder="E-Book Name" required type="text" />
      </div>

      
      
      </div>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName"  name="authorName" placeholder="Author Name" required  type="text"/>
      
      
      </div>
<div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageUrl" value="Image Url" />
        </div>
        <TextInput id="imageUrl"  name="imageUrl"type="text" placeholder=" Book Image Url" required />
      </div>

      </div>
      
      
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
       <Select id="inputState" name="categoryName" className="w-full rounded " value={selectedBookCategory} onChange={handleChangeSelectedValue}>
           {
            bookCategories.map((option)=><option key={option} value={option}>{option}</option>)
           }
       </Select>
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea  id="bookDescription" name="bookDescription" placeholder="Write your E-book description" required  className ="w-full" rows={6} />
    </div>

    <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfUrl" value="Book pdf Url" />
        </div>
        <TextInput id="bookPdfUrl"  placeholder="Book Pdf Url" required type="text"  />
      </div>
    
      <Button type="submit" className='mt-5'>Upload a Ebook</Button>

    </form>

    </div>
  )
}

export default UploadBooks
