import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-5 px-[5%]">
            <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-1/4 p-4 text-left">
                    <h3 className="text-lg mb-2 border-b-2 border-orange-500 inline-block pb-1">Contact</h3>
                    <p>Address: BUBT</p>
                     <p>Phone: +01234567811</p>
                    <p>Email: <a href="mailto:support@krishop.com.bd" className="text-orange-500 font-bold no-underline hover:text-white">
                        homeesae@gmail.com
                    </a></p>
                </div>

                <div className="w-full md:w-1/4 p-4 text-left">
                    <h3 className="text-lg mb-2 border-b-2 border-orange-500 inline-block pb-1">Quick Link</h3>
                       <p><a href={"/home"} className="text-white no-underline hover:underline hover:text-orange-500">Home</a></p>
                    <p><a href={"/about"} className="text-white no-underline hover:underline hover:text-orange-500">About</a></p>
                    <p><a href={"/services"} className="text-white no-underline hover:underline hover:text-orange-500">Service</a></p>
                    <p><a href={"/contact"} className="text-white no-underline hover:underline hover:text-orange-500">Contact</a></p>
                   
                </div>

                <div className="w-full md:w-1/4 p-4 text-left">
                    <h3 className="text-lg mb-2 border-b-2 border-orange-500 inline-block pb-1">Account</h3>
                    <p><a href={"/login"} className="text-white no-underline hover:underline hover:text-orange-500">Login</a></p>
                    <p><a href={"/register"} className="text-white no-underline hover:underline hover:text-orange-500">Sing-Up</a></p>
                </div>
                 <div className="w-full md:w-1/4 p-4 text-left">
                    <h3 className="text-lg mb-2 border-b-2 border-orange-500 inline-block pb-1">Coonect With Us</h3>
                    <p><a href="https://www.facebook.com/" className="text-white no-underline hover:underline hover:text-orange-500">Facebook</a></p>
                    <p><a href="https://www.youtube.com/" className="text-white no-underline hover:underline hover:text-orange-500">YouTube</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



