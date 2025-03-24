import React from "react";
import BooksData from "../../BooksData";
import Book from "./Book"; // Make sure this path is correct

function Popular() {
  return (
    <>
      <div className="container w-[100vw] mt-10 px-6 lg:px-12 mx-auto bg-red-5">
        <h2 className="font-bold text-xl text-slate-700 mb-1">
          POPULAR BOOKS:
        </h2>
        {/* Books Display */}
        <div className="books-container h-auto w-full lg:h-78 flex flex-wrap justify-center rounded py-2">
          {BooksData.filter((book) => book.rating>=4.5).map((book) => (
            <Book
              key={book.id}
              id ={book.id}
              title={book.title}
              author={book.author}
              year={book.publication_year}
              category={book.category}
              imgSrc={book.cover_image}
              bgColor="#d1e8d2"
              rating={book.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Popular;
