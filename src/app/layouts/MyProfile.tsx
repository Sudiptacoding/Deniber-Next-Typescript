"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BsFilterLeft } from "react-icons/bs";
import { usePathname } from "next/navigation";

const MyProfile = ({ children }: { children: React.ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Toggle the menu visibility (for mobile)
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    // Close the menu after selecting an item (on mobile)
    const closeMenu = () => setIsMenuOpen(false);

    // Dynamically apply active styles for the menu items
    const getMenuItemClass = (path: string) =>
        pathname === path
    ? 'w-full px-4 py-2 text-left text-primary rounded-full bg-[#FDE8E9]' // Active styles
    : 'w-full px-4 py-2 text-left text-[#444955] hover:text-primary rounded-full hover:bg-[#FDE8E9]'; // Default styles

    return (
        <div className="2xl:px-[300px] px-5">
            {/* Page Header */}
            <h2 className="py-4 text-2xl font-extrabold border-b text-secondary">Account</h2>

            <div className="flex flex-col min-h-screen lg:flex-row">
                {/* Sidebar */}
                <div
                    className={`fixed lg:relative inset-y-0 left-0 bg-white w-64 lg:w-52 transform ${
                        isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0 transition-transform duration-300 ease-in-out z-20 lg:z-auto`}
                >
                    <ul className="flex flex-col p-4 space-y-4">
                        {/* Close Menu Button (Mobile only) */}
                        <li className="flex justify-end lg:hidden">
                            <button
                                onClick={closeMenu}
                                className="p-1 border rounded-full cursor-pointer hover:bg-gray-200"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </li>

                        {/* Menu Items */}
                        <li>
                            <Link
                                href="/profile"
                                className={getMenuItemClass("/profile")}
                                onClick={closeMenu}
                            >
                                My Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/property-list"
                                className={getMenuItemClass("/property-list")}
                                onClick={closeMenu}
                            >
                                Property List
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/my-favorite-list"
                                className={getMenuItemClass("/my-favorite-list")}
                                onClick={closeMenu}
                            >
                                My Favorite List
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/query"
                                className={getMenuItemClass("/query")}
                                onClick={closeMenu}
                            >
                                Query
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Main Content Area */}
                <div className="flex-grow lg:pl-10">
                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={toggleMenu}
                        className="p-2 my-2 text-3xl border rounded-lg shadow-md hover:text-primary hover:bg-[#FDE8E9] lg:hidden"
                    >
                        <BsFilterLeft />
                    </button>

                    {/* Content Rendering */}
                    <div className="bg-white w-full lg:max-w-[1056px] mx-auto lg:border-l p-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
