import React, { useState } from "react";
import Book from "./Book";
import BooksData from "../../BooksData"; 
 // Import books dataimport BooksData from "../../BooksData";


function Category({searchTerm}) {
  const categories = [
    "All",
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
    "Adventure",
    "Fantasy",
    "Horror",
  ];
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Filter books by category & search
  const filteredBooks = BooksData.filter((book) => {
    const matchesCategory =
      selectedCategory === "All" || book.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      searchTerm === "" ||
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });
  return (
    <>
      <div className="container w-[100vw] mt-5 px-6 lg:px-12 mx-auto">
        <h2 className="font-bold text-xl text-slate-700 mt-8 mb-2">
          CATEGORY :
        </h2>
        <div className="buttons flex flex-wrap gap-5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-2 py-1 cursor-pointer transition-all duration-200 rounded 
              ${
                selectedCategory === category
                  ? "bg-[#34495e] text-white"
                  : "bg-[#16a085] hover:bg-[#34495e] hover:text-slate-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Books Display */}
        <div className="container relative flex justify-evenly items-center bg-[#e2eafb] gap-3 mt-7 py-5 px-4  rounded-lg border border-[#afc4f5]">
        <h3 className="absolute top-2 left-6 font-semibold text-lg">Results : <span className="text-[#16a085]">{selectedCategory}</span></h3>
          <div className="books-container w-full h-78 flex mt-2 overflow-x-scroll rounded">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <Book key={book.id} id ={book.id} title={book.title} author={book.author} year={book.publication_year} category={book.category} rating={book.rating} imgSrc= {book.cover_image} bgColor="#d2eef4" hoverBgColor="#afc4f5" />
            ))
          ) : (
            <p className="text-red-400 fond-bold m-5 text-center">No books available for this category.</p>
          )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;

  

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~---------------~~~~~~~~~~~~~~~~~~~~
// Updated Code for optimized search functionality for better experience

// import React, { useState } from "react";
// import Book from "./Book";
// import BooksData from "../../BooksData";

// function Category({ searchQuery, setSearchQuery }) {
//   const categories = [
//     "All",
//     "Fiction",
//     "Non-Fiction",
//     "Science Fiction",
//     "Adventure",
//     "Fantasy",
//     "Horror",
//   ];

//   // 🔹 Selected category state
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   // ✅ Category change karte hi search reset ho jayega
//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     setSearchQuery(""); // 🔹 Clear search query
//   };

//   // ✅ Filter books by category & search
//   const filteredBooks = BooksData.filter((book) => {
//     const matchesCategory =
//       selectedCategory === "All" ||
//       book.category.toLowerCase() === selectedCategory.toLowerCase();

//     const matchesSearch =
//       searchQuery === "" ||
//       book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       book.author.toLowerCase().includes(searchQuery.toLowerCase());

//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <>
//       <div className="container w-[100vw] mt-5 px-6 lg:px-12 mx-auto">
//         <h2 className="font-bold text-xl text-slate-700 mt-8 mb-2">CATEGORY :</h2>
//         <div className="buttons flex flex-wrap gap-5">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryClick(category)}
//               className={`px-2 py-1 cursor-pointer transition-all duration-200 rounded 
//               ${
//                 selectedCategory === category
//                   ? "bg-[#34495e] text-white"
//                   : "bg-[#16a085] hover:bg-[#34495e] hover:text-slate-300"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//         {/* Books Display */}
//         <div className="container relative flex justify-evenly items-center bg-[#e2eafb] gap-3 mt-7 py-5 px-4 rounded-lg border border-[#afc4f5]">
//           <h3 className="absolute top-2 left-6 font-semibold text-lg">
//             Results : <span className="text-[#16a085]">{selectedCategory}</span>
//           </h3>
//           <div className="books-container w-full h-78 flex mt-2 overflow-x-scroll rounded">
//             {filteredBooks.length > 0 ? (
//               filteredBooks.map((book) => (
//                 <Book
//                   key={book.id}
//                   id={book.id}
//                   title={book.title}
//                   author={book.author}
//                   year={book.publication_year}
//                   category={book.category}
//                   rating={book.rating}
//                   imgSrc={book.cover_image}
//                   bgColor="#d2eef4"
//                   hoverBgColor="#afc4f5"
//                 />
//               ))
//             ) : (
//               <p className="text-red-400 font-bold m-5 text-center">No books available.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Category;
