import React from "react";
import { Link } from "react-router-dom";

function Book({ id, title, author, year, category, rating, imgSrc, bgColor }) {
  return (
    <div
      className={`h-68 w-46 p-3 md:p-3 rounded-md m-3 border border-[#9edbea] shadow-lg shadow-[#bfe9f4] hover:scale-105 transition-all duration-200`}
      style={{ backgroundColor: bgColor }}
    >
      <img className="h-32 w-46 rounded mx-auto" src={imgSrc} alt="cover-img" />
      <div className="w-42 relative">
        <p className="text-[#16a085] font-semibold mt-2 text-nowrap">{title}</p>
        <p className="text-[#24495e] font-medium my-[2px] text-nowrap">
          {author}
        </p>
        <p className="text-[#16a085] mt-1 font-medium mb-[6px]">{category}</p>
        <p className="flex items-center text-[#24495e] font-semibold absolute top-0 left-27">
          <span className="text-xl font-bold mr-1">&#9734;</span>
          {rating ? rating.toFixed(1) : "N/A"}
        </p>

        {/* Corrected Link to Pass the Book ID */}
        <Link
          to={`/book/${id}`}
          className="relative z-10 bg-[#16a085] w-fit rounded mx-auto px-2 cursor-pointer py-[1px] text-slate-100 hover:bg-[#24495e] hover:text-[#16a085] transition-all duration-200"
        >
          View more
        </Link>
      </div>
    </div>
  );
}

export default Book;
