"use client";
import React, { useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { MdFavoriteBorder, MdOutlineLocationOn } from 'react-icons/md';

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";


import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

const SearchResult = () => {
    const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

    const [showTypeDropdown, setShowTypeDropdown] = useState(true);
    const [showPriceAccordion, setShowPriceAccordion] = useState(true);
    const [showAreaAccordion, setShowAreaAccordion] = useState(true);
    const [showPropertyDropdown, setShowPropertyDropdown] = useState(true);
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(true);

    const downIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="inline-block w-4 h-4 ml-2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
            />
        </svg>
    );

    const upIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="inline-block w-4 h-4 ml-2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
            />
        </svg>
    );

    const [value, setValue] = useState<number[]>([30, 60]);
    const [selectedButton, setSelectedButton] = useState(1);


    const buttons = ['1 bed', '2 beds', '3 beds', 'Others'];

    const handleButtonClick = (buttonId: number) => {
        setSelectedButton(buttonId);
    };

    const [selectedOption, setSelectedOption] = useState("");
    const handleSelectChange = (e: any) => {
        setSelectedOption(e.target.value);
    };

    const [currentPage, setCurrentPage] = useState(2);
    const totalPages = 5;



    return (
        <div className=" 2xl:px-[300px] px-5">

            {/* Top search input field --------------------------------------- */}
            <div className="flex items-center justify-between w-full py-8">
                <div className="relative flex w-full">
                    <input
                        type="search"
                        name="search"
                        placeholder="Enter your email/phone number"
                        className="w-full py-5 text-sm bg-white border border-gray-300 shadow-md px-7 lg:text-base rounded-2xl focus:outline-none"
                        autoComplete="off"
                        spellCheck="false"
                        required
                        step="any"
                        autoCapitalize="none"
                        autoFocus
                    />
                    <button className="bg-primary absolute flex items-center gap-2 right-2 top-[11px] lg:top-1/2 lg:transform lg:-translate-y-1/2 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg focus:outline-none transition-all duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Submit
                    </button>
                </div>

                <button
                    className="flex items-center justify-center p-3 ml-2 text-white rounded-full lg:p-3 bg-primary lg:hidden"
                    onClick={() => setIsFilterDrawerOpen(true)}
                >
                    <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 4V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 12V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 4V14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 18V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18 4V5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18 9V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>



                </button>
            </div>

            {/* Main Layout */}
            <div className="flex flex-col justify-between gap-8 pt-4 mb-10 lg:flex-row ">

                {/* Left side content search filter  ------------------------------------ */}
                <aside className="hidden lg:block lg:w-72">
                    <div >
                        {/* Filter Text */}
                        <div className="flex items-center gap-3 px-4 pt-4 pb-2 text-[#444955] font-extrabold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clipPath="url(#clip0_2838_10891)">
                                    <path d="M0.5 2.82065H8.11266C8.34209 3.865 9.27472 4.64903 10.387 4.64903C11.4992 4.64903 12.4318 3.86503 12.6613 2.82065H15.5C15.7761 2.82065 16 2.59678 16 2.32065C16 2.04453 15.7761 1.82065 15.5 1.82065H12.661C12.4312 0.776841 11.4972 -0.00769043 10.387 -0.00769043C9.27609 -0.00769043 8.34262 0.776716 8.11284 1.82065H0.5C0.223875 1.82065 0 2.04453 0 2.32065C0 2.59678 0.223875 2.82065 0.5 2.82065ZM9.05866 2.32197L9.05869 2.31659C9.06087 1.58637 9.65672 0.992341 10.387 0.992341C11.1162 0.992341 11.7121 1.58556 11.7152 2.31543L11.7153 2.32278C11.7142 3.05425 11.1187 3.64906 10.387 3.64906C9.65553 3.64906 9.06028 3.05484 9.05863 2.32381L9.05866 2.32197ZM15.5 13.1794H12.661C12.4311 12.1357 11.4972 11.3511 10.387 11.3511C9.27609 11.3511 8.34262 12.1355 8.11284 13.1794H0.5C0.223875 13.1794 0 13.4033 0 13.6794C0 13.9556 0.223875 14.1794 0.5 14.1794H8.11266C8.34209 15.2238 9.27472 16.0078 10.387 16.0078C11.4992 16.0078 12.4318 15.2238 12.6613 14.1794H15.5C15.7761 14.1794 16 13.9556 16 13.6794C16 13.4033 15.7761 13.1794 15.5 13.1794ZM10.387 15.0078C9.65553 15.0078 9.06028 14.4136 9.05863 13.6826L9.05866 13.6807L9.05869 13.6754C9.06087 12.9452 9.65672 12.3511 10.387 12.3511C11.1162 12.3511 11.7121 12.9443 11.7152 13.6742L11.7153 13.6815C11.7143 14.4131 11.1188 15.0078 10.387 15.0078ZM15.5 7.50006H7.88734C7.65791 6.45572 6.72528 5.67172 5.61303 5.67172C4.50078 5.67172 3.56816 6.45572 3.33872 7.50006H0.5C0.223875 7.50006 0 7.72393 0 8.00006C0 8.27622 0.223875 8.50006 0.5 8.50006H3.33897C3.56888 9.54384 4.50275 10.3284 5.61303 10.3284C6.72391 10.3284 7.65738 9.54397 7.88716 8.50006H15.5C15.7761 8.50006 16 8.27622 16 8.00006C16 7.72393 15.7761 7.50006 15.5 7.50006ZM6.94134 7.99875L6.94131 8.00412C6.93912 8.73434 6.34328 9.32837 5.61303 9.32837C4.88381 9.32837 4.28794 8.73515 4.28478 8.00531L4.28469 7.998C4.28578 7.26643 4.88125 6.67172 5.61303 6.67172C6.34447 6.67172 6.93972 7.2659 6.94137 7.99697L6.94134 7.99875Z" fill="#444955" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2838_10891">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Filter</div>

                        {/* Type Dropdown */}
                        <div className="my-0 divider"></div>
                        <div className="p-4 ">
                            <button onClick={() => setShowTypeDropdown(!showTypeDropdown)} className="flex items-center justify-between w-full font-semibold text-secondary "                        >
                                Type {showTypeDropdown ? downIcon : upIcon}
                            </button>
                            {showTypeDropdown && (
                                <div className="mt-4 ">
                                    <label className="justify-start gap-2 py-1 cursor-pointer label">
                                        <input type="checkbox" defaultChecked className="checkbox border-[#D0D1D4] [--chkbg:theme(colors.primary)] [--chkfg:white] checked:border-primary" />
                                        <span className="font-normal label-text">Buy</span>
                                    </label>

                                    <label className="justify-start gap-2 py-1 cursor-pointer label">
                                        <input type="checkbox" className="checkbox border-[#D0D1D4] [--chkbg:theme(colors.primary)] [--chkfg:white] checked:border-primary" />
                                        <span className="font-normal label-text">Rent</span>
                                    </label>

                                </div>
                            )}
                        </div>

                        {/* Price Range Accordion */}
                        <div className="my-0 divider"></div>
                        <div className="p-4 ">
                            <button onClick={() => setShowPriceAccordion(!showPriceAccordion)} className="flex items-center justify-between w-full font-semibold text-secondary"                            >
                                Price {showPriceAccordion ? downIcon : upIcon}
                            </button>
                            {showPriceAccordion && (
                                <div className="">
                                    <div className="flex items-center justify-between w-full gap-6 py-4">
                                        {/* <input value={value?.[0]}
                                            type="number"
                                            placeholder="Min"
                                            className="w-1/2 p-2 border border-[#D0D1D4] rounded-lg"
                                        />
                                        <input value={value?.[1]}
                                            type="number"
                                            placeholder="Max"
                                            className="w-1/2 p-2 border border-[#D0D1D4] rounded-lg "
                                        /> */}


                                        <input
                                            value={value?.[0]}
                                            onChange={(e) => {
                                                const newValue = [...value];
                                                newValue[0] = parseFloat(e.target.value);
                                                setValue(newValue);
                                            }}
                                            type="number"
                                            placeholder="Min"
                                            className="w-1/2 p-2 border border-[#D0D1D4] rounded-lg"
                                        />
                                        <input
                                            value={value?.[1]}
                                            onChange={(e) => {
                                                const newValue = [...value];
                                                newValue[1] = parseFloat(e.target.value);
                                                setValue(newValue);
                                            }}
                                            type="number"
                                            placeholder="Max"
                                            className="w-1/2 p-2 border border-[#D0D1D4] rounded-lg "
                                        />




                                    </div>
                                    <RangeSlider value={value} onInput={setValue} />
                                </div>
                            )}
                        </div>


                        {/* Area Accordion */}
                        <div className="my-0 divider"></div>
                        <div className="p-4">
                            <button onClick={() => setShowAreaAccordion(!showAreaAccordion)} className="flex items-center justify-between w-full font-semibold text-secondary"                            >
                                Area  {showAreaAccordion ? downIcon : upIcon}
                            </button>
                            {showAreaAccordion && (
                                <div className="">
                                    <div className="flex items-center justify-between w-full gap-6 py-4">
                                        <input
                                            type="number"
                                            placeholder="Min"
                                            className="w-1/2 p-2 border border-[#D0D1D4] rounded-lg"
                                        />
                                        <input
                                            type="number"
                                            placeholder="Max"
                                            className="w-1/2 p-2 border border-[#D0D1D4] rounded-lg"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Property Space */}
                        <div className="my-0 divider"></div>

                        <div className="p-4">
                            <button onClick={() => setShowPropertyDropdown(!showPropertyDropdown)} className="flex items-center justify-between w-full font-semibold text-secondary"                            >
                                Property Space {showPropertyDropdown ? downIcon : upIcon}
                            </button>
                            {showPropertyDropdown && (
                                <div className="flex flex-wrap items-start gap-2 pt-4">
                                    {buttons.map((label, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleButtonClick(index)}
                                            className={`px-3 py-1 border rounded
                                      ${selectedButton === index ? 'bg-[#444955] text-[#FDE8E9]' : 'bg-[#ECEDEE] text-[#22252B]'} 
                                      transition duration-300 ease-in-out`}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Category */}
                        <div className="my-0 divider"></div>

                        <div className="p-4">
                            <button onClick={() => setShowCategoryDropdown(!showCategoryDropdown)} className="flex items-center justify-between w-full font-semibold text-secondary"                            >
                                Category {showCategoryDropdown ? downIcon : upIcon}
                            </button>
                            {showCategoryDropdown && (
                                <div className="pt-4">

                                    <label className="justify-start gap-2 py-1 cursor-pointer label">
                                        <input type="checkbox" defaultChecked className="checkbox border-[#D0D1D4] [--chkbg:theme(colors.primary)] [--chkfg:white] checked:border-primary" />
                                        <span className="font-normal label-text">Residential</span>
                                    </label>

                                    <label className="justify-start gap-2 py-1 cursor-pointer label">
                                        <input type="checkbox" className="checkbox border-[#D0D1D4] [--chkbg:theme(colors.primary)] [--chkfg:white] checked:border-primary" />
                                        <span className="font-normal label-text">Commercial</span>
                                    </label>
                                    <label className="justify-start gap-2 py-1 cursor-pointer label">
                                        <input type="checkbox" className="checkbox border-[#D0D1D4] [--chkbg:theme(colors.primary)] [--chkfg:white] checked:border-primary" />
                                        <span className="font-normal label-text">Flat</span>
                                    </label>

                                    <label className="justify-start gap-2 py-1 cursor-pointer label">
                                        <input type="checkbox" className="checkbox border-[#D0D1D4] [--chkbg:theme(colors.primary)] [--chkfg:white] checked:border-primary" />
                                        <span className="font-normal label-text">Hostel/Mess</span>
                                    </label>
                                    <label className="justify-start gap-2 py-1 cursor-pointer label">
                                        <input type="checkbox" className="checkbox border-[#D0D1D4] [--chkbg:theme(colors.primary)] [--chkfg:white] checked:border-primary" />
                                        <span className="font-normal label-text">Sublet</span>
                                    </label>

                                    <label className="justify-start gap-2 py-1 cursor-pointer label">
                                        <input type="checkbox" className="checkbox border-[#D0D1D4] [--chkbg:theme(colors.primary)] [--chkfg:white] checked:border-primary" />
                                        <span className="font-normal label-text">Office</span>
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>
                </aside>

                {/* Middle card content ------------------------------------ */}
                <main className="w-full lg:w-[640px]">
                    <div className="flex flex-col items-center justify-between px-6 py-3 mb-4 border shadow-md rounded-2xl md:flex-row">
                        <div className="">
                            <h2 className="">Showing results for <span className='font-bold text-secondary'>“Dhaka, Bangladesh”</span></h2>
                        </div>
                        <div className="">
                            <span className='pr-4 text-common '> Sort by</span>
                            <select value={selectedOption} onChange={handleSelectChange} className="p-2 border border-gray-300 rounded-md"                            >
                                <option value="">Select Option</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                            </select>
                        </div>
                    </div>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((property, index) => (
                        <div key={index} className="flex flex-col items-center mb-4 border shadow-md rounded-xl md:flex-row md:items-start">
                            <img src="https://images.pexels.com/photos/27351134/pexels-photo-27351134/free-photo-of-a-boat-by-the-pier.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Left Image" className="w-full md:w-1/3 h-[202px] rounded-tl-xl rounded-bl-xl object-cover object-center  mb-4 md:mb-0" />
                            <div className="flex flex-col p-4">
                                <h1 className="flex items-center justify-between gap-4"><span className='text-secondary'>1440 Sq Ft Flat Is Set For Sale At Bayazid, Hi...</span> <span className='p-1 border border-gray-600 rounded-full cursor-pointer hover:bg-black hover:text-white'><MdFavoriteBorder /></span></h1>
                                <p className="text-base text-[#737780] pt-3 gap-2 flex items-center"><HiLocationMarker /> Ashkona, Dakshinkhan, Dhaka</p>
                                <p className="py-2 text-common">2 Bed | 2 Bath | 1300 sqft</p>
                                <p className="pb-2 text-xl font-semibold text-secondary">16,500 tk</p>
                                <div className='flex items-center justify-between'>
                                    <span className='font-normal text-common'>Sep 24,2024</span>
                                    <span className='flex items-center px-4 py-1 text-primary gap-2 rounded-full bg-[#FDE8E9]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                            <g clipPath="url(#clip0_2838_11035)">
                                                <path d="M8 1.16272L8.28 1.34772C10.2 2.62772 12.1 3.26272 14 3.26272H14.5V9.51272C14.5 13.5477 11.605 16.2627 8 16.2627C4.395 16.2627 1.5 13.5477 1.5 9.51272V3.26272H2C3.9 3.26272 5.8 2.62772 7.725 1.34772L8 1.16272ZM11.5 5.70272L6.75 10.4527L4.5 8.20272L3.44 9.26272L6.75 12.5727L12.56 6.76272L11.5 5.70272Z" fill="#ED1C24" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2838_11035">
                                                    <rect width="16" height="16" fill="white" transform="translate(0 0.762695)" />
                                                </clipPath>
                                            </defs>
                                        </svg> verified</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='flex items-center justify-end w-full overflow-x-auto'>
                        <ResponsivePagination
                            current={currentPage}
                            total={totalPages}
                            previousLabel="< Back"
                            nextLabel="Next >"
                            onPageChange={setCurrentPage}
                        />
                    </div>
                </main>

                {/* Right side contain ------------------------------------*/}
                <aside className="order-first lg:w-80 lg:order-last ">
                    <img className='w-full rounded-2xl' src="https://i.postimg.cc/bJgps1Xp/image-5.png" alt="" />
                    <img className='w-full mt-4 rounded-2xl' src="https://i.postimg.cc/KvwFkZWk/Rectangle-736.png" alt="" />
                </aside>

            </div>


            {/* Mobile Devices style------------------------------------------- */}
            <div className={`absolute top-0 responsive inset-0 rounded-bl-md rounded-br-md shadow-md p-6 z-50 transform ${isFilterDrawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform`}            >
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <div
                        onClick={() => setIsFilterDrawerOpen(false)}
                        className="font-bold text-red-500"
                    >
                        <button className="btn btn-circle btn-outline">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="">

                    <div className="flex items-center gap-3 px-4 pt-4 pb-2 text-[#444955] font-extrabold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_2838_10891)">
                                <path d="M0.5 2.82065H8.11266C8.34209 3.865 9.27472 4.64903 10.387 4.64903C11.4992 4.64903 12.4318 3.86503 12.6613 2.82065H15.5C15.7761 2.82065 16 2.59678 16 2.32065C16 2.04453 15.7761 1.82065 15.5 1.82065H12.661C12.4312 0.776841 11.4972 -0.00769043 10.387 -0.00769043C9.27609 -0.00769043 8.34262 0.776716 8.11284 1.82065H0.5C0.223875 1.82065 0 2.04453 0 2.32065C0 2.59678 0.223875 2.82065 0.5 2.82065ZM9.05866 2.32197L9.05869 2.31659C9.06087 1.58637 9.65672 0.992341 10.387 0.992341C11.1162 0.992341 11.7121 1.58556 11.7152 2.31543L11.7153 2.32278C11.7142 3.05425 11.1187 3.64906 10.387 3.64906C9.65553 3.64906 9.06028 3.05484 9.05863 2.32381L9.05866 2.32197ZM15.5 13.1794H12.661C12.4311 12.1357 11.4972 11.3511 10.387 11.3511C9.27609 11.3511 8.34262 12.1355 8.11284 13.1794H0.5C0.223875 13.1794 0 13.4033 0 13.6794C0 13.9556 0.223875 14.1794 0.5 14.1794H8.11266C8.34209 15.2238 9.27472 16.0078 10.387 16.0078C11.4992 16.0078 12.4318 15.2238 12.6613 14.1794H15.5C15.7761 14.1794 16 13.9556 16 13.6794C16 13.4033 15.7761 13.1794 15.5 13.1794ZM10.387 15.0078C9.65553 15.0078 9.06028 14.4136 9.05863 13.6826L9.05866 13.6807L9.05869 13.6754C9.06087 12.9452 9.65672 12.3511 10.387 12.3511C11.1162 12.3511 11.7121 12.9443 11.7152 13.6742L11.7153 13.6815C11.7143 14.4131 11.1188 15.0078 10.387 15.0078ZM15.5 7.50006H7.88734C7.65791 6.45572 6.72528 5.67172 5.61303 5.67172C4.50078 5.67172 3.56816 6.45572 3.33872 7.50006H0.5C0.223875 7.50006 0 7.72393 0 8.00006C0 8.27622 0.223875 8.50006 0.5 8.50006H3.33897C3.56888 9.54384 4.50275 10.3284 5.61303 10.3284C6.72391 10.3284 7.65738 9.54397 7.88716 8.50006H15.5C15.7761 8.50006 16 8.27622 16 8.00006C16 7.72393 15.7761 7.50006 15.5 7.50006ZM6.94134 7.99875L6.94131 8.00412C6.93912 8.73434 6.34328 9.32837 5.61303 9.32837C4.88381 9.32837 4.28794 8.73515 4.28478 8.00531L4.28469 7.998C4.28578 7.26643 4.88125 6.67172 5.61303 6.67172C6.34447 6.67172 6.93972 7.2659 6.94137 7.99697L6.94134 7.99875Z" fill="#444955" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2838_10891">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Filter</div>

                    <div className="my-0 bg-white divider"></div>
                    <div className="p-4 bg-white">
                        <button onClick={() => setShowTypeDropdown(!showTypeDropdown)} className="flex items-center justify-between w-full font-semibold text-secondary "                        >
                            Type {showTypeDropdown ? downIcon : upIcon}
                        </button>
                        {showTypeDropdown && (
                            <div className="mt-4 ">
                                <label className="justify-start gap-2 py-1 cursor-pointer label">
                                    <input type="checkbox" defaultChecked className="checkbox border-[#D0D1D4] [--chkbg:theme(colors.primary)] [--chkfg:white] checked:border-primary" />
                                    <span className="font-normal label-text">Buy</span>
                                </label>

                                <label className="justify-start gap-2 py-1 cursor-pointer label">
                                    <input type="checkbox" className="checkbox border-[#D0D1D4] [--chkbg:theme(colors.primary)] [--chkfg:white] checked:border-primary" />
                                    <span className="font-normal label-text">Rent</span>
                                </label>

                            </div>
                        )}
                    </div>
                    <div className="my-0 bg-white divider"></div>
                    <div className="p-4 bg-white">
                        <button onClick={() => setShowPriceAccordion(!showPriceAccordion)} className="flex items-center justify-between w-full font-semibold text-secondary"                            >
                            Price {showPriceAccordion ? downIcon : upIcon}
                        </button>
                        {showPriceAccordion && (
                            <div className="">
                                <div className="flex items-center justify-between w-full gap-6 py-4">
                                    <input
                                        value={value?.[0]}
                                        onChange={(e) => {
                                            const newValue = [...value];
                                            newValue[0] = parseFloat(e.target.value); // String থেকে Number রূপান্তর
                                            setValue(newValue);
                                        }}
                                        type="number"
                                        placeholder="Min"
                                        className="w-1/2 p-2 border border-[#D0D1D4] rounded-lg"
                                    />
                                    <input
                                        value={value?.[1]}
                                        onChange={(e) => {
                                            const newValue = [...value];
                                            newValue[0] = parseFloat(e.target.value); // String থেকে Number রূপান্তর
                                            setValue(newValue);
                                        }}
                                        type="number"
                                        placeholder="Min"
                                        className="w-1/2 p-2 border border-[#D0D1D4] rounded-lg"
                                    />
                                </div>
                                <RangeSlider value={value} onInput={setValue} />
                            </div>
                        )}
                    </div>
                    <div className="my-0 bg-white divider"></div>
                    <div className="p-4 bg-white">
                        <button onClick={() => setShowAreaAccordion(!showAreaAccordion)} className="flex items-center justify-between w-full font-semibold text-secondary"                            >
                            Area  {showAreaAccordion ? downIcon : upIcon}
                        </button>
                        {showAreaAccordion && (
                            <div className="">
                                <div className="flex items-center justify-between w-full gap-6 py-4">
                                    <input
                                        type="number"
                                        placeholder="Min"
                                        className="w-1/2 p-2 border border-[#D0D1D4] rounded-lg"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Max"
                                        className="w-1/2 p-2 border border-[#D0D1D4] rounded-lg"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="my-0 bg-white divider"></div>
                    <div className="p-4 bg-white">
                        <button onClick={() => setShowPropertyDropdown(!showPropertyDropdown)} className="flex items-center justify-between w-full font-semibold text-secondary"                            >
                            Property Space {showPropertyDropdown ? downIcon : upIcon}
                        </button>
                        {showPropertyDropdown && (
                            <div className="flex flex-wrap items-start gap-2 pt-4">
                                {buttons.map((label, index) => (
                                    <button key={index} onClick={() => handleButtonClick(index)} className={`px-3 py-1 border rounded${selectedButton === index ? 'bg-[#444955] text-[#FDE8E9]' : 'bg-[#ECEDEE] text-[#22252B]'}  transition duration-300 ease-in-out`}                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="my-0 bg-white divider"></div>
                    <div className="p-4 bg-white">
                        <button onClick={() => setShowCategoryDropdown(!showCategoryDropdown)} className="flex items-center justify-between w-full font-semibold text-secondary"                            >
                            Category {showCategoryDropdown ? downIcon : upIcon}
                        </button>
                        {showCategoryDropdown && (
                            <div className="pt-4">
                                <label className="justify-start gap-2 py-1 cursor-pointer label">
                                    <input type="checkbox" defaultChecked className="checkbox border-[#D0D1D4] [--chkbg:theme(colors.primary)] [--chkfg:white] checked:border-primary" />
                                    <span className="font-normal label-text">Residential</span>
                                </label>

                                <label className="justify-start gap-2 py-1 cursor-pointer label">
                                    <input type="checkbox" className="checkbox border-[#D0D1D4] [--chkbg:theme(colors.primary)] [--chkfg:white] checked:border-primary" />
                                    <span className="font-normal label-text">Commercial</span>
                                </label>
                                <label className="justify-start gap-2 py-1 cursor-pointer label">
                                    <input type="checkbox" className="checkbox border-[#D0D1D4] [--chkbg:theme(colors.primary)] [--chkfg:white] checked:border-primary" />
                                    <span className="font-normal label-text">Flat</span>
                                </label>

                                <label className="justify-start gap-2 py-1 cursor-pointer label">
                                    <input type="checkbox" className="checkbox border-[#D0D1D4] [--chkbg:theme(colors.primary)] [--chkfg:white] checked:border-primary" />
                                    <span className="font-normal label-text">Hostel/Mess</span>
                                </label>
                                <label className="justify-start gap-2 py-1 cursor-pointer label">
                                    <input type="checkbox" className="checkbox border-[#D0D1D4] [--chkbg:theme(colors.primary)] [--chkfg:white] checked:border-primary" />
                                    <span className="font-normal label-text">Sublet</span>
                                </label>

                                <label className="justify-start gap-2 py-1 cursor-pointer label">
                                    <input type="checkbox" className="checkbox border-[#D0D1D4] [--chkbg:theme(colors.primary)] [--chkfg:white] checked:border-primary" />
                                    <span className="font-normal label-text">Office</span>
                                </label>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;