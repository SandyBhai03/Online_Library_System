import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className=" h-screen p-7 bg-[#c4e4de] flex flex-col items-center">
        <img
          className="rounded-lg mx-auto w-full sm:w-2/4 lg:w-125 h-65"
          src="https://i.pinimg.com/474x/a4/3e/e6/a43ee6d3e310564af22b71bdfb1a52e7.jpg"
          alt="Image Not Found"
        />

        <h2 className="text-sm sm:text-lg text-center mt-3 font-semibold">
          THE YOU WERE LOOKING FOR DOES'T EXIST.
        </h2>
        <h3 className="text-sm sm:text-lg mt-1 p-1 rounded bg-black w-fit text-center mx-auto text-green-400 font-medium lg:font-semibold">
          आप थोड़े अच्छे से <span className="text-red-500">URL✅</span> खोजिए
          कुछ गलत 😥 कर रहे हैं !
        </h3>

        <Link
          to="/"
          className="bg-[#16a085] text-white text-center mt-25 py-2 px-4 rounded hover:bg-[#24495e] transition-all duration-200"
        >
          🔙 Back to Home
        </Link>
      </div>
    </>
  );
}

export default NotFound;
