'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const SearchIcon = () => (
    <svg className="absolute left-4 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
);

const MenuIcon = () => (
    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const CheckIcon = () => (
    <svg className="w-5 h-5 text-violet-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
);


const Header = () => {
    const [user, setUser] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const storedUser = window.localStorage.getItem('user').stringify;
        // console.log(storedUser.stringify)
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const [openedRoute, setOpenedRoute] = useState("");

    useEffect(() => {
        setOpenedRoute(window.location.pathname);
    }, []);

    console.log(openedRoute)


    const isActive = (path) => openedRoute === path;

    const handleLogout = async () => {
        const res = await fetch('/api/logout', {
            method: 'POST',
        });
        if (res.ok) {
            window.localStorage.removeItem('user');
            window.location.href = '/login';
        }
    };

    const handleActiveChange = (path) => {
        setOpenedRoute(path);
    }




    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex items-center justify-between py-4 gap-8">
                    <Link href="/" className="text-3xl font-bold text-violet-700">HomeEase</Link>
                    <div className="hidden md:flex flex-1 max-w-lg relative items-center">
                        <SearchIcon />
                        <input type="text" placeholder="Search for services..." className="w-full py-2.5 pl-12 pr-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-violet-600" />
                    </div>

                    <nav className="hidden lg:flex items-center gap-8">
                        <Link href="/" onClick={() => {
                            handleActiveChange('/')
                        }} className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-violet-600 border-2 p-2 rounded-xl' : 'text-gray-500 hover:text-violet-600 '}`}>Home</Link>
                        <Link href="/services" onClick={() => {
                            handleActiveChange('/services')
                        }} className={`text-sm font-medium transition-colors ${isActive('/services') ? 'text-violet-600 border-2 p-2 rounded-xl' : 'text-gray-500 hover:text-violet-600'}`}>Services</Link>
                        <Link href="/about" onClick={() => {
                            handleActiveChange('/about')
                        }} className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-violet-600 border-2 p-2 rounded-xl' : 'text-gray-500 hover:text-violet-600'}`}>About</Link>
                        <Link href="/contact" onClick={() => {
                            handleActiveChange('/contact')
                        }} className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-violet-600 border-2 p-2 rounded-xl' : 'text-gray-500 hover:text-violet-600'}`}>Contact</Link>
                    </nav>
                    {
                        user ? (<div>
                            <div className="hidden sm:flex items-center gap-3">
                                <Link href={"/profile"}><button className="w-full px-5 py-2.5 text-sm font-medium text-gray-800 bg-transparent border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">{user?.username}</button></Link>
                                <button onClick={handleLogout} className="w-full px-5 py-2.5 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors">Logout</button>
                            </div>
                        </div>) : (<div className="hidden sm:flex items-center gap-3">
                            <Link href={"/login"}><button className="w-full px-5 py-2.5 text-sm font-medium text-gray-800 bg-transparent border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">Sign In</button></Link>
                            <Link href={"/register"}><button className="w-full px-5 py-2.5 text-sm font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors">Sign Up</button></Link>
                        </div>)
                    }

                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none">
                        <MenuIcon />
                    </button>
                </div >

                {isMenuOpen && (
                    <div className="lg:hidden pb-4">
                        <nav className="flex flex-col gap-2 px-2">
                            <Link href="/" className={`px-4 py-2 rounded-md transition-colors ${isActive('/') ? 'bg-violet-100/60 text-violet-600' : 'text-gray-700 hover:bg-gray-100 hover:text-violet-600'}`}>Home</Link>
                            <Link href="/services" className={`px-4 py-2 rounded-md transition-colors ${isActive('/services') ? 'bg-violet-100/60 text-violet-600' : 'text-gray-700 hover:bg-gray-100 hover:text-violet-600'}`}>Services</Link>
                            <Link href="/about" className={`px-4 py-2 rounded-md transition-colors ${isActive('/about') ? 'bg-violet-100/60 text-violet-600' : 'text-gray-700 hover:bg-gray-100 hover:text-violet-600'}`}>About</Link>
                            <Link href="/contact" className={`px-4 py-2 rounded-md transition-colors ${isActive('/contact') ? 'bg-violet-100/60 text-violet-600' : 'text-gray-700 hover:bg-gray-100 hover:text-violet-600'}`}>Contact</Link>
                            <div className="border-t border-gray-200 mt-2 pt-4 flex flex-col gap-3">
                                <Link href={"/login"}><button className="w-full px-5 py-2.5 text-sm font-medium text-gray-800 bg-transparent border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">Sign In</button></Link>
                                <Link href={"/register"}><button className="w-full px-5 py-2.5 text-sm font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors">Sign Up</button></Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div >
        </header >
    );
};


export default Header;
