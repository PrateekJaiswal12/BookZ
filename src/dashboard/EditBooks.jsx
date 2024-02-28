import React , { useState, useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { Select } from 'flowbite-react';

const EditBooks = () => {

  const { id } = useParams();
  const { bookTitle,
    authorName,
    imageUrl,
    category,
    bookDescription,
    bookPdfUrl,
    comment,
    num_ratings,
    rating } = useLoaderData();

    const BookCategory = [
      "Fiction",
      "Non-Fiction",
      "Fantasy",
      "Mystery",
      "Humour",
      "Thriller",
      "Adult",
      "Romance",
      "Science Fiction",
      "History",
      "Programming",
      "Horror",
      "Bibliography",
      "Autobiography",
      "Self-help",
      "Memoir",
      "Business",
      "Children Books",
      "Travel",
      "Religion",
      "Art and Design"
    ]
  
    const [selectedBookCategory, setSelectedBookCategory] = useState(BookCategory[0]);
  
    const handleChangeSelectedCategory = (e) => {
        // console.log(e.target.event);
        setSelectedBookCategory(e.target.value);
    }
  
    const handleUpdate = (e) => {
        e.preventDefault();
  
        const form  = e.target;
        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageUrl = form.imageUrl.value;
        const category = form.categoryName.value;
        const bookDescription = form.bookDescription.value;
        const bookPdfUrl = form.bookPdfUrl.value;
        const rating = form.rating.value;
        const comment = form.comment.value;
        const num_ratings = form.num_ratings.value;
  
        const updatedBookObj = {
              bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl,rating,comment,num_ratings
        }
  
        // console.log(bookObj);
        fetch(`http://localhost:5000/book/${id}`,{
        method:"PATCH",
        headers: {
              "Content-type":"application/json",
        },
        body: JSON.stringify(updatedBookObj)
      }).then(res => res.json()).then(data => {

          alert("Book updated Successfully!!!")
      })
        
    }
  
    return (                          
      <div className='px-4 w-full mt-12'>
        <div className='border-l-4 border-cyan-500'>  <h2 className="text-5xl font-bold border-r border-cyan-500 px-2 my-5 text-black">Update Book data</h2></div>
  
        <form onSubmit={handleUpdate} className="flex mt-12  lg:w-[1180px] flex-wrap flex-col gap-4">
         <div className="flex gap-8">
          <div className='lg:w-1/2'>
            <div className="mb-2  block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name" required defaultValue={bookTitle} />
          </div>
  
          <div className='lg:w-1/2'>
          <div className="mb-2  block">
            <Label htmlFor="authorName" value="Author name" />
          </div>
          <TextInput id="authorName" name='authorName' type="text" placeholder="Author name" required  defaultValue={authorName}/>
        </div>
         </div>
  
         <div className="flex gap-8">
          <div className='lg:w-1/2'>
            <div className="mb-2  block">
              <Label htmlFor="imageUrl" value="Book Image URL" />
            </div>
            <TextInput id="imageUrl" name='imageUrl' type="text" placeholder="Book image Url" required defaultValue={imageUrl}/>
          </div>
  
            <div className='lg:w-1/2'>
              <div className="mb-2  block">
                <Label htmlFor="inputState" value="Book Category" />
              </div>
  
              <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory}
              onChange={handleChangeSelectedCategory}>
                    {
                      BookCategory.map((option) => <option key={option} value={option}>{option}</option>)
                    }
              </Select>
            </div>
         </div>
  
  
        <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" value="Book Pdf Url" />
          </div>
          <TextInput id="bookPdfUrl" name='bookPdfUrl' type="text" placeholder="Book pdf Url" required defaultValue={bookPdfUrl}/>
        </div>
  
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="rating" value="Rating" />
          </div>
          <TextInput id="rating" name='rating' type="number" placeholder="Rating Out of 5" required defaultValue={rating} />
        </div>
        </div>
  
        <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Review" />
          </div>
          <TextInput id="comment" name='comment' type="text" placeholder="Review" required  defaultValue={comment}/>
        </div>
  
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="num_ratings" value="Number Of Customers" />
          </div>
          <TextInput id="num_ratings" name='num_ratings' type="number" placeholder="Number Of Customers" required defaultValue={num_ratings} />
        </div>
        </div>      
         <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea className='w-full' placeholder="bookDescription" id="bookDescription" name='bookDescription' rows={5} required defaultValue={bookDescription} />
        </div>
        <Button type='submit' className='mt-4'>Update Book</Button>
       
      </form>
      </div>
    )
}

export default EditBooks
