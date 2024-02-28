import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';


const ManageBooks = () => {

  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
      fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data));
  },[])

  const handleDelete = (id) => {
      fetch(`http://localhost:5000/book/${id}`, {
        method:"DELETE",
      }).then(res => res.json()).then(data => {
        alert("Book is deleted successfully!!")
        // setAllBooks(data)
      })
  }

  return (
    <div className='px-4 my-12 w-full'>
      <div className='border-l-4 mb-10 border-cyan-500'>  <h2 className="text-5xl font-bold border-r border-cyan-500 px-2 my-5 text-black">Manage your Books</h2></div>


      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>Book name</Table.HeadCell>
          <Table.HeadCell>Author name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>

          {
            allBooks.map((book) => <Table.Body className='divide-y' key={book._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {book.bookTitle}
            </Table.Cell>
            <Table.Cell>{book.authorName}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>$10.00</Table.Cell>
            <Table.Cell>
              <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </Link>
              <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-4 py-1 rounded ml-4 font-semibold text-white border-sm hover:bg-sky-600'>Delete</button>
            </Table.Cell>
          </Table.Row>
            </Table.Body>
            )
          }

      </Table>
    </div>
  )
}

export default ManageBooks
