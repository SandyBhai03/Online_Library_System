import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BooksData from "../BooksData"; // Import the books array

const BookDetails = () => {
  // const { id } = useParams(); // Get the book ID from the URL
  // // const book = BooksData.find((b) => b.id.toString() === id); // Find the book by ID
  // const books = useSelector((state) => state.books.books);
  // const book = books.find((b) => b.id === parseInt(id, 10));

  const { id } = useParams();
  const addedBooks = useSelector((state) => state.books.books);
  const allBooks = [...BooksData, ...addedBooks];

  // Ensure id is converted to number if needed
  const book = allBooks.find((b) => String(b.id) === id);



  if (!book) {
    return <h2 className="text-center text-red-500">Book not found!</h2>;
  }

  return (
    <>
      <div className="max-w-2xl mt-10 mx-auto p-5 shadow-md border rounded-lg">
        <h2 className="text-2xl font-semibold ">
          Title: <span className="text-[#16a085]">{book.title}</span>
        </h2>
        <p className="text-lg text-[#24495e]">
          By: <span className="text-[#16a085]">{book.author}</span>
        </p>
        <p className="text-md text-gray-600">
          Category: <span className="text-[#16a085]">{book.category}</span>
        </p>
        <p className="text-md text-gray-600">
          Year: <span className="text-[#16a085]">{book.publication_year}</span>
        </p>
        <p className="text-md text-yellow-600">
          Rating: <span className="text-[#16a085]">{book.rating}&#9734;</span>
        </p>
        <p className="text-md ">
          Description:{" "}
          <span className="text-yellow-600">{book.description}</span>
        </p>
        <img
          src={book.cover_image}
          alt={book.title}
          className="mt-3 w-full h-72 object-cover rounded-md"
        />
      </div>
      {/*  Back to Browse Books Button */}
      <Link
        to="/books"
        className="block w-fit mx-auto mt-5 text-center bg-[#16a085] text-white py-2 px-4 rounded hover:bg-[#24495e] transition-all duration-200 "
      >
        ← Back to Browse
      </Link>
    </>
  );
};

export default BookDetails;
