"use client";
import React, { useState } from 'react';

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

const properties = [
    {
        id: 1,
        title: '2 Bed | 2 Bath | 1300 sqft',
        image: 'https://i.postimg.cc/L4rH0nbv/image.png',
        description: 'Ashkona, Dakshinkhan, Dhaka',
    },
    {
        id: 2,
        title: '2 Bed | 2 Bath | 1300 sqft',
        image: 'https://i.postimg.cc/L4rH0nbv/image.png',
        description: 'Ashkona, Dakshinkhan, Dhaka',
    },
    {
        id: 3,
        title: '2 Bed | 2 Bath | 1300 sqft',
        image: 'https://i.postimg.cc/L4rH0nbv/image.png',
        description: 'Ashkona, Dakshinkhan, Dhaka',
    },
    {
        id: 4,
        title: '2 Bed | 2 Bath | 1300 sqft',
        image: 'https://i.postimg.cc/L4rH0nbv/image.png',
        description: 'Ashkona, Dakshinkhan, Dhaka',
    },
    {
        id: 5,
        title: '2 Bed | 2 Bath | 1300 sqft',
        image: 'https://i.postimg.cc/L4rH0nbv/image.png',
        description: 'Ashkona, Dakshinkhan, Dhaka',
    },
    {
        id: 6,
        title: '2 Bed | 2 Bath | 1300 sqft',
        image: 'https://i.postimg.cc/L4rH0nbv/image.png',
        description: 'Ashkona, Dakshinkhan, Dhaka',
    },
];

const FeaturedProperties = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 4; // Number of cards to display

    const nextCard = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 < properties.length - cardsToShow + 1 ? prevIndex + 1 : prevIndex
        );
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
    };

    return (
        <div className="px-5 mx-auto my-14 2xl:px-[300px]">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-extrabold text-secondary">Featured Properties</h2>
                <div>
                    <button
                        onClick={prevCard}
                        className="p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700">
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={nextCard}
                        className="p-2 ml-2 text-white bg-gray-800 rounded-full hover:bg-gray-700">
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            <div className="relative flex items-center">
                <div className="flex w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}>
                        {properties.map((property) => (
                            <div
                                key={property.id}
                                className="min-w-[312px] mx-2  pb-5">
                                <div className="delay-100 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg">
                                    <div className='relative'><img src={property.image} alt={property.title} className="object-cover w-full rounded-lg" /><span className='absolute left-5 top-3 py-1 px-4 rounded-lg bg-[#2B2C308F] text-white'>Exclusive</span></div>

                                    <h2 className='text-[#2B2C30] pt-4 px-4 font-extrabold text-xl flex items-center justify-between'><span>$40,000</span><span className='p-1 border border-gray-600 rounded-full cursor-pointer hover:bg-black hover:text-white'><MdFavoriteBorder /></span></h2>
                                    <h3 className="text-base text-[#464949] px-4 py-1">{property.title}</h3>
                                    <p className="text-[#464949] pb-3 px-4">{property.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProperties;