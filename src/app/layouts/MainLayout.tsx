"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const path = usePathname();
    return (
        <div>
            {
                path === '/login' || path === '/registration' ? children :
                    <div>
                        <Navbar></Navbar>
                        {children}
                        <Footer></Footer>
                    </div>
            }
            <Toaster />
        </div>
    );
};

export default MainLayout;