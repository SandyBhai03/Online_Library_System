import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BooksData from "../BooksData";

const BrowseBooks = () => {
  const { category } = useParams(); // Get category from URL
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Get books from Redux
  const addedBooks = useSelector((state) => state.books.books);

  // ✅ Combine static & added books
  const allBooks = [...BooksData, ...addedBooks];

  // ✅ Normalize category filtering
  const filteredBooks = allBooks.filter((book) => {
    const matchesCategory = category
      ? book.category?.toLowerCase() === category.toLowerCase() // Fix case sensitivity
      : true;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-7 py-5 pb-10">
      <h2 className="text-2xl font-bold mb-4">Browse Books</h2>

      {/* ✅ Search Bar */}
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full lg:w-1/2 p-2 border rounded mb-4"
      />

      {/* ✅ Display Books */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-7 mt-5 py-5">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              className="border hover:scale-103 transition-all duration-200 hover:shadow-lg shadow-[#344b58] rounded-lg p-4 shadow-md"
            >
              {/* ✅ Fixed Image Handling */}
              {book.cover_image && (
                <img
                  src={book.cover_image}
                  alt={book.title}
                  className="w-full h-40 object-cover rounded mb-3"
                  onError={(e) => (e.target.src = "default-placeholder.jpg")}
                />
              )}
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-600">by: {book.author}</p>
              <p className="text-gray-500">Category: {book.category}</p>
              <p className="text-gray-500">Rating: {book.rating}</p>

              {/* ✅ Fix View More Link */}
              <Link
                to={`/book/${book.id}`}
                className="block mt-3 bg-[#365e75] hover:bg-[#344b58] transition-all duration-200 hover:scale-102 text-white text-center py-2 rounded"
              >
                View More
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg w-78 rounded px-2">No books found in <span className="text-red-500 font-semibold">{category}</span> category.</p>
        )}
      </div>

      {/* ✅ Fix Back Button */}
      <div className="mt-5 text-center">
        <Link
          to="/"
          className="bg-[#16a085] text-white py-2 px-4 rounded hover:bg-[#24495e] transition-all duration-200"
        >
          🔙 Back to Home
        </Link>
      </div>
    </div>
  );
};

export default BrowseBooks;
