"use client";
import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';

const MyFavoriteLIst = () => {
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
    return (
        <div className='pl-6 border-l-0 md:border-l'>
            <div className='mb-6'>
                <h1 className='py-2 text-xl font-extrabold text-[#444955]'>My favorite list</h1>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-6'>
                {properties.map((property) => (
                    <div
                        key={property.id}
                        className="min-w-[312px] ">
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
    );
};

export default MyFavoriteLIst;