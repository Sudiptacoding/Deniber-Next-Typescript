"use client";
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import SterRating from '@/common/SterRating';

// Sample cards data
const cards = [
    { id: 1, star: 4.5, description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ", name: 'Floyd Miles' },
    { id: 2, star: 4.5, description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ", name: 'Floyd Miles' },
    { id: 3, star: 4.5, description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ", name: 'Floyd Miles' },
    { id: 4, star: 4.5, description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ", name: 'Floyd Miles' },
    { id: 5, star: 4.5, description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ", name: 'Floyd Miles' },
    { id: 6, star: 4.5, description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ", name: 'Floyd Miles' },
    { id: 7, star: 4.5, description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ", name: 'Floyd Miles' },
    { id: 8, star: 4.5, description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ", name: 'Floyd Miles' },
    { id: 9, star: 4.5, description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ", name: 'Floyd Miles' },
    { id: 10, star: 4.5, description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ", name: 'Floyd Miles' },

];

const OurCustomerFeedback = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [startX, setStartX] = useState(null);

    // const [startX, setStartX] = useState<number>(0);
    const [startX, setStartX] = useState<number | null>(null);

    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleMouseDown = (e: any) => {
        setStartX(e.clientX); // Record the initial X position
        setIsDragging(true);   // Set dragging to true
    };

    const handleMouseMove = (e: any) => {
        if (!isDragging || startX === null) return; // Ensure startX is not null

        const deltaX = e.clientX - startX;

        if (deltaX > 100) { // If dragged right
            setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length); // Move to previous card
            setStartX(e.clientX); // Update start position
        } else if (deltaX < -100) { // If dragged left
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length); // Move to next card
            setStartX(e.clientX); // Update start position
        }
    };


    const handleMouseUp = () => {
        setIsDragging(false); // Stop dragging
    };

    return (
        <div className="relative w-full px-5 pb-2 overflow-hidden 2xl:px-80"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp} // Stop dragging when leaving the area
        >
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${(currentIndex * 33.33)}%)` }} // Each card takes up 33.33%
            >
                {cards.map((card, index) => (
                    <div key={index} className="flex-shrink-0 w-full pr-6 md:w-1/3">
                        <div
                            className={` bg-white border rounded-lg shadow-md relative transition-all duration-300 ${index === (currentIndex + 3) % cards.length ? 'opacity-20' : ''
                                } ${index === currentIndex - 1 ? 'hidden' : ''}`}
                        >
                            {index === (currentIndex + 3) % cards.length && (
                                <div className="absolute inset-0 bg-black rounded-lg opacity-25"></div>
                            )}
                            <div className="relative z-10 p-4">
                                <h2 className="">
                                    <SterRating></SterRating>
                                </h2>
                                <p className='text-[#464949] text-sm py-4'>{card?.description}</p>
                                <div className='flex items-center gap-2'>

                                    <Image height={100} width={100} className='w-8 h-8 rounded-full' src={'https://raw.githubusercontent.com/Sudiptacoding/Deniber/refs/heads/main/src/assets/Rectangle%20729.png'} alt="" /> <span className='font-extrabold text-secondary'>{card?.name}</span>



                                    {/* <img className='w-8 h-8 rounded-full' src={iconImage} alt="" /> <span className='font-extrabold text-secondary'>{card?.name}</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots for Navigation */}
            <div className="flex justify-center my-10 space-x-2">
                {cards.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#ED1C24]' : 'bg-[#ED1C2480]' // Updated colors
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default OurCustomerFeedback;
