"use client";
import React, { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { FiSave } from 'react-icons/fi';

const Profile = () => {

    const [isEditing, setIsEditing] = useState(false);
    const [isEditing1, setIsEditing1] = useState(false);

    // Toggle edit mode
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };
    // Toggle edit 1 mode
    const toggleEdit1 = () => {
        setIsEditing1(!isEditing1);
    };


    return (
        <div className="px-2 pt-4 md:p-6">

            {/* Photo section */}
            <div className="relative h-40 rounded-t-xl bg-[url('https://i.postimg.cc/MGFgLrn6/image-6.png')] bg-no-repeat bg-cover bg-center"></div>
            <div className="p-4 pt-0 sm:pt-0 sm:p-7">
                <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-4">
                        <img className="relative z-10 inline-block mx-auto -mt-8 rounded-full size-32 sm:mx-0 ring-4 ring-white dark:ring-neutral-900" src="https://i.postimg.cc/s2XtwRDH/Ellipse-131.png" alt="Avatar" />
                        <div className="mt-4 sm:mt-auto sm:mb-1.5 flex justify-start items-start flex-col gap-2">
                            <div className='text-[#22252B] text-xl font-extrabold'>Leslie Alexander</div>
                            <button type="button" className="px-4 py-2 text-[#444955] rounded-lg shadow-sm bg-[#ECEDEE] border ">
                                Change photo
                            </button>
                        </div>
                    </div>
                </div>
            </div>







            {/* Edit section */}
            <div className="w-full px-6 pt-4 bg-white border shadow-sm rounded-2xl">
                {/* Header with Edit Button */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b">
                    <h1 className="text-base font-bold text-secondary">Personal Information</h1>
                    <button
                        onClick={toggleEdit}
                        className="flex items-center gap-2 px-4 py-2  transition duration-300 bg-[#ECEDEE] rounded-lg "
                    >
                        {!isEditing ?
                            <FaRegEdit /> :
                            <FiSave />
                        }
                        {isEditing ? 'Save' : 'Edit'}
                    </button>
                </div>

                {/* Two Column Layout for Personal Information */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Left Column */}
                    <div>
                        <div className="mb-4">
                            <label className="font-normal text-[#737780]">First Name</label>
                            <input
                                type="text"
                                defaultValue="John"
                                className={`w-full mt-2 font-bold text-[#444955]  bg-white rounded-md  ${isEditing ? 'border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2' : 'border border-white py-2 '}`}
                                disabled={!isEditing}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="font-normal text-[#737780]">Email address</label>
                            <input
                                type="text"
                                defaultValue="leslie51@gmail.com"
                                className={`w-full mt-2 font-bold text-[#444955]  bg-white rounded-md  ${isEditing ? 'border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2' : 'border border-white py-2 '}`}
                                disabled={!isEditing}
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        <div className="mb-4">
                            <label className="font-normal text-[#737780]">Last name</label>
                            <input
                                type="text"
                                defaultValue="Alexander"
                                className={`w-full mt-2 font-bold text-[#444955]  bg-white rounded-md  ${isEditing ? 'border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2' : 'border border-white py-2 '}`}
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="font-normal text-[#737780]">Phone number</label>
                            <input
                                type="text"
                                defaultValue="+880 17123456789"
                                className={`w-full mt-2 font-bold text-[#444955]  bg-white rounded-md  ${isEditing ? 'border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2' : 'border border-white py-2 '}`}
                                disabled={!isEditing}
                            />
                        </div>

                    </div>
                </div>
            </div>



            {/* Edit section 1 */}

            <div className="w-full px-6 pt-4 mt-4 bg-white border shadow-sm rounded-2xl">
                {/* Header with Edit Button */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b">
                    <h1 className="text-base font-bold text-secondary">Address</h1>
                    <button
                        onClick={toggleEdit1}
                        className="flex items-center gap-2 px-4 py-2  transition duration-300 bg-[#ECEDEE] rounded-lg "
                    >
                        {!isEditing1 ?
                            <FaRegEdit /> :
                            <FiSave />
                        }
                        {isEditing1 ? 'Save' : 'Edit'}
                    </button>
                </div>

                {/* Two Column Layout for Personal Information */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Left Column */}
                    <div>
                        <div className="mb-4">
                            <label className="font-normal text-[#737780]">Road</label>
                            <input
                                type="text"
                                defaultValue="supreme court bar association building, ramna,"
                                className={`w-full mt-2 font-bold text-[#444955]  bg-white rounded-md  ${isEditing1 ? 'border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2' : 'border border-white py-2 '}`}
                                disabled={!isEditing1}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="font-normal text-[#737780]">District</label>
                            <input
                                type="text"
                                defaultValue="Dhaka"
                                className={`w-full mt-2 font-bold text-[#444955]  bg-white rounded-md  ${isEditing1 ? 'border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2' : 'border border-white py-2 '}`}
                                disabled={!isEditing1}
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        <div className="mb-4">
                            <label className="font-normal text-[#737780]">Upazilla</label>
                            <input
                                type="text"
                                defaultValue="Ramna"
                                className={`w-full mt-2 font-bold text-[#444955]  bg-white rounded-md  ${isEditing1 ? 'border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2' : 'border border-white py-2 '}`}
                                disabled={!isEditing1}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="font-normal text-[#737780]">Division</label>
                            <input
                                type="text"
                                defaultValue="Dhaka"
                                className={`w-full mt-2 font-bold text-[#444955]  bg-white rounded-md  ${isEditing1 ? 'border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2' : 'border border-white py-2 '}`}
                                disabled={!isEditing1}
                            />
                        </div>

                    </div>
                </div>
            </div>




        </div>
    );
};

export default Profile;