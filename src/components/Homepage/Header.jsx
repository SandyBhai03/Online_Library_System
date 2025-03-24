  import React from "react";

  function Header() {
    return (
      <div className="w-[100vw] flex h-56 text-orange-300 px-5 lg:px-12">
        <img
          className="w-full mx-auto rounded-lg mt-3"
          src=" https://i.pinimg.com/474x/ba/af/fa/baaffae3e5b1f74a1d3f5e20c92c120c.jpg"
        />
        <h1 className="absolute top-25 left-10 lg:left-50 text-[#2c3e50] font-serif text-lg md:text-2xl lg:text-4xl font-extrabold">
          WELCOME TO ONLINE LIBRARY!
        </h1>
        <h2 className="absolute top-35 lg:top-40 left-20 lg:left-70 text-[#16a085] text-lg md:text-2xl font-extrabold">
          LEARN AND GROW !!
        </h2>
        <p className="absolute top-45 w-2/3 lg:top-53 left-20 md:left-30 lg:left-50 text-sm lg:text-lg font-semibold text-[#34495e]">
          “If you don’t like to read, you haven’t found the right book.”
        </p>
      </div>
    );
  }

  export default Header;
