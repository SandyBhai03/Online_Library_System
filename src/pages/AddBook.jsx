import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/Slices/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    cover_image: "",
    publication_year: "",
    rating: "", // Ensure this matches your validation
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!bookData.title) newErrors.title = "Title is required";
    if (!bookData.author) newErrors.author = "Author is required";
    if (!bookData.category) newErrors.category = "Category is required";
    if (!bookData.description)
      newErrors.description = "Description is required";
    if (!bookData.cover_image) newErrors.cover_image = "Image URL is required";
    if (!bookData.publication_year)
      newErrors.publication_year = "Publication Year is required";
    if (!bookData.rating) newErrors.rating = "Rating is required"; // Fixed key

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Prevent submission if validation fails

    dispatch(addBook({ ...bookData, id: Date.now() })); // Dispatch action to add book
    navigate("/books"); // Redirect to Browse Books page
  };

  return (
    <div className="max-w-lg mx-auto mt-3 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Title:</label>
          <input
            type="text"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>

        <div>
          <label className="block font-medium">Author:</label>
          <input
            type="text"
            name="author"
            value={bookData.author}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.author && <p className="text-red-500">{errors.author}</p>}
        </div>

        <div>
          <label className="block font-medium">Category:</label>
          <input
            type="text"
            name="category"
            value={bookData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.category && <p className="text-red-500">{errors.category}</p>}
        </div>

        <div>
          <label className="block font-medium">Description:</label>
          <textarea
            name="description"
            value={bookData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Cover Image URL:</label>
          <input
            type="text"
            name="cover_image"
            value={bookData.cover_image}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.cover_image && (
            <p className="text-red-500">{errors.cover_image}</p>
          )}
        </div>
        <div>
          <label className="block font-medium">Year:</label>
          <input
            type="text"
            name="publication_year"
            value={bookData.publication_year}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.publication_year && (
            <p className="text-red-500">{errors.publication_year}</p>
          )}
        </div>
        <div>
          <label className="block font-medium">Rating:</label>
          <input
            type="text"
            name="rating"
            value={bookData.rating}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.rating && <p className="text-red-500">{errors.rating}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 cursor-pointer rounded hover:bg-blue-600"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
