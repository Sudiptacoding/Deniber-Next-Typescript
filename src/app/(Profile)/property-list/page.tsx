"use client";

import React, { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { HiDotsVertical } from 'react-icons/hi';
import NoPropertiesAdded from '@/common/NoPropertiesAdded';


const PropertyList = () => {

    const properties = [
        {
            id: 1,
            name: '1440 Sq Ft Flat Is Set For Sale At',
            address: 'Bayazid, Hill View R/a',
            location: 'Dhaka',
            type: 'For rent',
            amount: '16500',
            view: '56',
            contact: '56',
            status: 'Active',
        },
        {
            id: 2,
            name: '1440 Sq Ft Flat Is Set For Sale At',
            address: 'Bayazid, Hill View R/a',
            location: 'Dhaka',
            type: 'For rent',
            amount: '16500',
            view: '56',
            contact: '56',
            status: 'Active',
        }, {
            id: 3,
            name: '1440 Sq Ft Flat Is Set For Sale At',
            address: 'Bayazid, Hill View R/a',
            location: 'Dhaka',
            type: 'For rent',
            amount: '16500',
            view: '56',
            contact: '56',
            status: 'Active',
        },
        // Add more properties here
    ];


    return (
        <div className="pl-0 md:pl-6">
            {/* Top section: Property list (left) and Add Property (right) buttons */}
            <div className="flex justify-between w-full py-2">
                <h2 className='text-xl font-extrabold text-secondary '>Property list</h2>
                <button className="px-4 py-[10px] text-white rounded-lg font-extrabold bg-primary gap-2 flex items-center">
                    <span className='text-2xl '><IoMdAdd /></span> Add Property
                </button>
            </div>


            <div className=''>
                {
                    properties?.length > 0 ? (
                        <div className="w-full overflow-x-auto">
                            <div className="grid min-w-full gap-y-2">
                                <div className="grid grid-cols-10 py-4 text-center border-b shadow-sm mb-2 min-w-[824px]">
                                    <div className="col-span-4 text-left">Properties</div>
                                    <div className="col-span-1">Location</div>
                                    <div className="col-span-1">Type</div>
                                    <div className="col-span-1">Amount</div>
                                    <div className="col-span-1">View</div>
                                    <div className="col-span-1">Contact</div>
                                    <div className="col-span-1">Status</div>
                                </div>

                                {properties.map((property) => (
                                    <div key={property.id} className="grid grid-cols-10 bg-white rounded-lg shadow min-w-[824px] text-center items-center">
                                        <div className="flex items-center col-span-4 text-left">
                                            <img
                                                src="https://i.postimg.cc/WbgkjFkx/image-7.png"
                                                alt={property.name}
                                                className="w-[104px] h-[96px] object-cover rounded-tl-lg rounded-bl-lg mr-2"
                                            />
                                            <span className="whitespace-normal">
                                                {property.name} <br /> {property.address}
                                            </span>
                                        </div>
                                        <div className="col-span-1">{property.location}</div>
                                        <div className="col-span-1">{property.type}</div>
                                        <div className="col-span-1">{property.amount}</div>
                                        <div className="col-span-1">{property.view}</div>
                                        <div className="col-span-1">{property.contact}</div>
                                        <div className="col-span-1">
                                            <div className="relative flex items-center w-full gap-1">
                                                <select className="appearance-none rounded-[22px] bg-[#54AF26] text-white pl-0 pr-4 py-1 w-full text-center">
                                                    <option value="Active">Active</option>
                                                    <option value="Inactive">Inactive</option>
                                                </select>
                                                <svg
                                                    className="absolute w-4 h-4 text-white pointer-events-none right-6 top-2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                                <span className='text-md '><HiDotsVertical /></span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <NoPropertiesAdded />
                    )
                }

            </div>

        </div>
    );
};

export default PropertyList;