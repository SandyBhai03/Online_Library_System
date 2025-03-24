import React from "react";
import { useState } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import Category from "./Category";
import Popular from "./Popular";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");// ✅ Search term state
  return (
    <>
      <div className="w-[100vw]">
        <Navigation searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Header />
        <Category searchTerm={searchTerm} />
        <Popular />
      </div>
    </>
  );
}

export default Home;


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~---------------~~~~~~~~~~~~~~~~~~~~
// Updated Code for optimized search functionality for better experience

// import React, { useState } from "react";
// import Navigation from "./Navigation";
// import Header from "./Header";
// import Category from "./Category";
// import Popular from "./Popular";

// function Home() {
//   const [searchTerm, setSearchTerm] = useState(""); // 🔹 Search term state
//   const [searchQuery, setSearchQuery] = useState(""); // 🔹 Stores actual search query when button is clicked

//   // ✅ Function to update searchQuery when user clicks the search button
//   const handleSearch = () => {
//     setSearchQuery(searchTerm); // Save search input
//     setSearchTerm(""); // Clear input box
//   };

//   return (
//     <>
//       <div className="w-[100vw]">
//         <Navigation
//           searchTerm={searchTerm}
//           setSearchTerm={setSearchTerm}
//           handleSearch={handleSearch} // ✅ Pass function to Navigation
//         />
//         <Header />
//         <Category searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> {/* ✅ Pass to Category */}
//         <Popular />
//       </div>
//     </>
//   );
// }

// export default Home;
