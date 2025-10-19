'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import logo from '../public/logo.png';

const Header = ({ viewCart }) => {
    const { user } = useAuth();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLogout = () => {

        localStorage.removeItem('user');
        router.push('/login');
    };

    return (
        <header className="relative">
            <div className="flex items-center justify-between p-4 border-b border-gray-300 flex-wrap md:flex-nowrap">
                <div className="flex items-center" onClick={() => window.location.href = '/'}>
                    <Image src={logo} alt="KriShop Logo" height={48} width={48} className="w-12 h-12 object-contain" />
                    <h1 className="text-3xl md:text-5xl ml-2 text-green-700">Kri<span className="text-black">Shop</span></h1>
                </div>

                <div className="flex items-center border-2 border-gray-300 rounded-full px-4 py-2 w-full md:w-96 bg-white order-3 md:order-2 mt-4 md:mt-0">
                    <input
                        type="text"
                        placeholder="Search for products"
                        className="border-none outline-none flex-1 text-lg"
                    />
                    <i className="fas fa-search text-gray-600"></i>
                </div>

                {/* Hamburger Menu Button */}
                <div className="md:hidden order-2 md:order-3">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-5 items-center order-3">
                    {user ? (
                        <>
                            <div className="flex flex-col items-center">
                                <span>Welcome, {user.username}</span>
                            </div>
                            <Link href={`/dashboard/${user.role}`} className="flex flex-col items-center cursor-pointer">
                                <i className="fas fa-tachometer-alt text-xl mb-1"></i>
                                <span>Dashboard</span>
                            </Link>
                            <div className="flex flex-col items-center cursor-pointer" onClick={handleLogout}>
                                <i className="fas fa-sign-out-alt text-xl mb-1"></i>
                                <span>Logout</span>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="flex flex-col items-center cursor-pointer">
                                <i className="fas fa-user text-xl mb-1"></i>
                                <span>Login</span>
                            </Link>
                            <Link href="/register" className="flex flex-col items-center cursor-pointer">
                                <i className="fas fa-user-plus text-xl mb-1"></i>
                                <span>Register</span>
                            </Link>
                        </>
                    )}
                    <div className="flex flex-col items-center cursor-pointer">
                        <i className="fas fa-headset text-xl mb-1"></i>
                        <span>Contact</span>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer" onClick={viewCart}>
                        <i className="fas fa-shopping-cart text-xl mb-1"></i>
                        <span>Cart</span>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="md:hidden bg-gray-100 p-4">
                    {user ? (
                        <>
                            <div className="mb-4">
                                <span>Welcome, {user.username}</span>
                            </div>
                            <div className="cursor-pointer mb-4" onClick={handleLogout}>
                                <i className="fas fa-sign-out-alt mr-2"></i>
                                <span>Logout</span>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="block mb-4" onClick={() => setIsMenuOpen(false)}><i className="fas fa-user mr-2"></i>Login</Link>
                            <Link href="/register" className="block mb-4" onClick={() => setIsMenuOpen(false)}><i className="fas fa-user-plus mr-2"></i>Register</Link>
                        </>
                    )}
                    <Link href="#" className="block mb-4" onClick={() => setIsMenuOpen(false)}><i className="fas fa-headset mr-2"></i>Contact</Link>
                    <div className="cursor-pointer" onClick={() => { viewCart(); setIsMenuOpen(false); }}>
                        <i className="fas fa-shopping-cart mr-2"></i>
                        <span>Cart</span>
                    </div>
                </nav>
            )}

            <div className="flex flex-col md:flex-row justify-evenly items-center bg-gray-200 py-3 text-sm text-center">
                <div className="w-full md:max-w-[30%] font-bold text-red-700 p-2 md:p-0">
                    নিরাপদ পেমেন্ট <br />
                    <small className="font-normal text-black">বিভিন্ন পেমেন্ট পদ্ধতি থেকে বেছে নিন</small>
                </div>
                <div className="w-full md:max-w-[30%] font-bold text-red-700 p-2 md:p-0 border-t md:border-t-0 md:border-l border-gray-400">
                    ফ্রি ডেলিভারি <br />
                    <small className="font-normal text-black">৩-৫ দিনের মধ্যে আপনার পণ্য পৌঁছে যাবে</small>
                </div>
                <div className="w-full md:max-w-[30%] font-bold text-red-700 p-2 md:p-0 border-t md:border-t-0 md:border-l border-gray-400">
                    ১০০% ন্যাচারাল <br />
                    <small className="font-normal text-black">প্রাকৃতিক উৎপাদন ব্যবস্থার প্রচারে আমরা প্রতিশ্রুতিবদ্ধ</small>
                </div>
            </div>
        </header>
    );
};

export default Header;
