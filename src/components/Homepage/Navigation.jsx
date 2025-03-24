import React from "react";
import { Link, useParams} from "react-router-dom";


function Navigation({searchTerm, setSearchTerm}) {

  const { category } = useParams();
  return (
    <>
      <nav className="sticky w-[100vw] gap-3 container h-12 px-5 lg:px-12 py-1 bg-[#ecf0f1] shadow-lg shadow-[#c4e0e7] flex justify-between items-center">
        <div>
          <h3 className="text-2xl tracking-widest text-teal-700 font-[Poppins] font-extrabold ">
            OLS
          </h3>
        </div>
        <div className="search-box hidden lg:w-84 h-9 lg:flex gap-2 justify-between items-center bg-slate-200 border-1 border-slate-400 rounded ">
          <input
            className="border-none outline-none text-gray-800 text-medium font-medium px-2 py-1"
            type="text"
             placeholder="Search books..."
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
          />
          <div className="bg-[#1abc9c] w-8 h-full rounded flex justify-center items-center cursor-pointer text-lg hover:bg-[#34495e] hover:text-xl transition-all duration-200">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <ul className="hidden lg:flex justify-around gap-7 list-style-none font-medium text-lg text-gray-800">
          <li className="cursor-pointer hover:text-[#1abc9c] hover:text-xl transition-all duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-[#1abc9c] hover:text-xl transition-all duration-200">
            <Link to={`/books/`}>Browse Books</Link>
          </li>
          <li className="cursor-pointer hover:text-[#1abc9c] hover:text-xl transition-all duration-200">
            <Link to="/add-book">Add Book</Link>
          </li>
        </ul>
        <div className="profileCart lg:flex gap-10 text-lg hidden  ">
          <i className="hover:text-[#1abc9c] hover:text-xl cursor-pointer transition-all duration-200 fa-solid fa-user"></i>
          <i className="hover:text-[#1abc9c] hover:text-xl cursor-pointer transition-all duration-200 fa-solid fa-cart-shopping"></i>
        </div>
        <div className="flex lg:hidden font-bold text-xl">
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </>
  );
}

export default Navigation;


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~---------------~~~~~~~~~~~~~~~~~~~~
// Updated Code for optimized search functionality for better experience

// import React from "react";
// import { Link } from "react-router-dom";

// function Navigation({ searchTerm, setSearchTerm, handleSearch }) {
//   return (
//     <>
//       <nav className="sticky w-[100vw] gap-3 container h-12 px-5 lg:px-12 py-1 bg-[#ecf0f1] flex justify-between items-center">
//         <div>
//           <h3 className="text-xl text-teal-700 font-[Poppins] font-extrabold ">
//             OLS
//           </h3>
//         </div>
//         {/* ✅ Search Box */}
//         <div className="search-box hidden lg:w-84 h-9 lg:flex gap-2 justify-between items-center bg-slate-200 border-1 border-slate-400 rounded ">
//           <input
//             className="border-none outline-none text-gray-800 text-medium font-medium px-2 py-1"
//             type="text"
//             placeholder="Search by title or author..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           {/* ✅ Search Icon as Button */}
//           <button
//             onClick={handleSearch} // 🔹 Search action on click
//             className="bg-[#1abc9c] w-8 h-full rounded flex justify-center items-center cursor-pointer text-lg hover:bg-[#34495e] hover:text-xl transition-all duration-200"
//           >
//             <i className="fa-solid fa-magnifying-glass"></i>
//           </button>
//         </div>
//         <ul className="hidden lg:flex justify-around gap-7 list-style-none font-medium text-lg text-gray-800">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/books/">Browse Books</Link></li>
//           <li><Link to="/add-book">Add Book</Link></li>
//         </ul>
//         <div className="profileCart lg:flex gap-10 text-lg hidden">
//           <i className="fa-solid fa-user"></i>
//           <i className="fa-solid fa-cart-shopping"></i>
//         </div>
//         <div className="flex lg:hidden font-bold text-xl">
//           <i className="fa-solid fa-bars"></i>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navigation;
