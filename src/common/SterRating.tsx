import React from 'react';
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
const SterRating = () => {
    return (
        <div className='flex items-center gap-2'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStarHalf />
            <IoIosStarOutline />
        </div>
    );
};

export default SterRating;