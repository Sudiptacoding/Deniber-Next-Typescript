import React from 'react';


const Banner = () => {
  return (
    <div 
      className="relative flex justify-center items-center "
      style={{ 
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url("https://raw.githubusercontent.com/Sudiptacoding/Deniber/refs/heads/main/src/assets/83b22b20626649ab75e38a4fe0cca17e.png")`, 
        backgroundPosition: 'center', 
        backgroundSize: 'cover' 
      }}
    >
      {/* Overlay content */}
      <div className="py-24 lg:w-[897px] w-full md:px-20 px-5 text-gray-600 dark:text-gray-300 outline-none focus:outline-none">
        <h1 className='text-center md:text-[56px] text-5xl font-extrabold text-white leading-[72px] pb-10'>
          One step closer to your dream home.
        </h1>

        {/* Search and dropdown container */}
        <div className="relative flex">
          {/* Dropdown */}
          <select className="bg-[#F2F2F2] px-4 py-6 text-base text-secondary focus:outline-none border rounded-tl-2xl rounded-bl-2xl cursor-pointer">
            <option className="font-medium cursor-pointer" value="filter">For Sale</option>
            <option className="font-medium cursor-pointer" value="buy">Buy</option>
            <option className="font-medium cursor-pointer" value="rent">For Rent</option>
          </select>

          {/* Search input */}
          <input
            type="search"
            name="search"
            placeholder="Enter an address, city, neighborhood, or ZIP code."
            className="bg-white rounded-tr-2xl rounded-br-2xl flex w-full text-sm px-4 py-6 outline-none focus:outline-none"
            autoComplete="off"
            spellCheck="false"
            required
            step="any"
            autoCapitalize="none"
            autoFocus
          />

          {/* Search button with icon */}
          <button className="bg-primary absolute right-[13px] top-[12px] text-white px-6 py-3 rounded-lg hover:bg-primary-dark focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;