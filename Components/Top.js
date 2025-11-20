"use client"
import { serviceCategories } from '@/public/Services';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

// SVG Icon Components
const LocationPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const ACRepairIcon = ({ active }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${active ? 'text-pink-500' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-2.022a8.02 8.02 0 00-1.21-3.228l1.43-1.43a.75.75 0 10-1.06-1.06l-1.43 1.43A8.02 8.02 0 0015.5 4.528V2.5a.75.75 0 00-1.5 0v2.028a8.02 8.02 0 00-3.228 1.21l-1.43-1.43a.75.75 0 10-1.06 1.06l1.43 1.43A8.02 8.02 0 004.528 8.5H2.5a.75.75 0 000 1.5h2.028a8.02 8.02 0 001.21 3.228l-1.43 1.43a.75.75 0 101.06 1.06l1.43-1.43A8.02 8.02 0 008.5 19.472V21.5a.75.75 0 001.5 0v-2.028a8.02 8.02 0 003.228-1.21l1.43 1.43a.75.75 0 101.06-1.06l-1.43-1.43a8.02 8.02 0 001.21-3.228H21.5a.75.75 0 000-1.5z" />
    </svg>
);

const ApplianceRepairIcon = ({ active }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${active ? 'text-pink-500' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75h-4.5A.75.75 0 0010.5 7.5v3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3 14.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5h15V6a.75.75 0 00-.75-.75h-13.5A.75.75 0 004.5 6v13.5z" />
    </svg>
);

const CleaningIcon = ({ active }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${active ? 'text-pink-500' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75L6 9v11.25h12V9L12 3.75zM8.25 12h7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12l-1.5-1.5M8.25 12l1.5-1.5m3 6.75V15" />
    </svg>
);


const ShiftingIcon = ({ active }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${active ? 'text-pink-500' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0H21m-1.612 0a9 9 0 01-11.963 0m0 0H3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75V15.75M12 6.75V9.75M6.75 12.75H9.75m4.5 0H17.25" />
    </svg>
);




// Reusable Service Card Component
const ServiceCard = ({ icon, title, active, href = false }) => (
    <Link href={href} className={`p-4 flex flex-col items-center justify-center space-y-2 cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:rounded-lg hover:border-b-2 hover:border-pink-500`}>
        {icon}
        <p className={`text-sm font-medium ${active ? 'text-gray-800' : 'text-gray-600'}`}>{title}</p>
    </Link >
);




// Main Component
const PersonalAssistant = () => {
    const [userLocation, setUserLocation] = useState('Your Location');
    const [services, setServices] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const categories = await serviceCategories();
            setServices(categories.map(category => (
                console.log(category),
                {
                    title: category.title.split(' ')[0],
                    icon:
                        category.id === 'ac-repair-services' ? <ACRepairIcon active={false} /> :
                            category.id === 'appliance-repair' ? <ApplianceRepairIcon active={false} /> :
                                category.id === 'cleaning' ? <CleaningIcon active={false} /> :
                                    category.id === 'shifting' ? <ShiftingIcon active={false} /> :
                                        category.id === 'electrical' ? <ShiftingIcon active={false} /> :
                                            <ACRepairIcon active={false} />,
                    active: false,
                    href: `/services/${category.id}`
                })));
        };
        fetchData();
    }, [])

    useEffect(() => {
        if (!navigator?.geolocation) {
            console.warn("Geolocation not supported by this browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                // Try reverse-geocoding to a human readable name using Nominatim (OpenStreetMap)
                try {
                    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
                    if (res.ok) {
                        const data = await res.json();
                        const addr = data.address || {};
                        const place =
                            addr.city ||
                            addr.town ||
                            addr.village ||
                            addr.state ||
                            addr.county ||
                            data.display_name ||
                            `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
                        console.log(place)
                        setUserLocation(place);
                        return;
                    }
                } catch (err) {
                    console.warn("Reverse geocoding failed:", err);
                }

                // Fallback to coordinates if reverse geocoding fails
                setUserLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
            },
            (error) => {
                console.warn("Geolocation error:", error);
                // Keep default location or handle permission denied case here
            },
            { enableHighAccuracy: false, timeout: 10000, maximumAge: 600000 }
        );
    }, []);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        services.filter(service => {
            const query = e.target.value.toLowerCase();

            if (!query.trim()) {
                // restore the original full list by re-fetching categories
                serviceCategories()
                    .then(categories => {
                        setServices(categories.map(category => ({
                            title: category.title.split(' ')[0],
                            icon:
                                category.id === 'ac-repair-services' ? <ACRepairIcon active={false} /> :
                                    category.id === 'appliance-repair' ? <ApplianceRepairIcon active={false} /> :
                                        category.id === 'cleaning' ? <CleaningIcon active={false} /> :
                                            category.id === 'shifting' ? <ShiftingIcon active={false} /> :
                                                category.id === 'electrical' ? <ShiftingIcon active={false} /> :
                                                    <ACRepairIcon active={false} />,
                            active: false,
                            href: `/services/${category.id}`
                        })));
                    })
                    .catch(err => console.warn("Failed to reload services:", err));
                return;
            }

            // show only services that match the query
            if (e.target.value === '') {
                setServices(services);
                return;
            }
            setServices(prev => prev.filter(s => s.title.toLowerCase().includes(query)));
        });
    }




    return (
        <div className="relative bg-white min-h-screen font-sans">
            {/* Background and Hero Section */}
            <div className="relative h-[60vh] flex flex-col items-center justify-center text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/home-cleaning.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Your Personal Assistant</h1>
                    <p className="text-lg md:text-xl">One-stop solution for your services. Order any service, anytime.</p>
                </div>

                {/* Search Bar Container - positioned absolutely */}
                <div className="absolute -bottom-20 md:-bottom-16 lg:-bottom-8 w-full max-w-4xl px-4 z-20">
                    <div className="bg-white rounded-lg shadow-2xl p-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-2">
                        <button className="w-full md:w-auto flex items-center justify-center p-3 bg-gray-100 rounded-md">
                            <LocationPinIcon />
                            <span className="font-semibold text-gray-700">{userLocation}</span>
                        </button>
                        <input
                            onChange={handleSearch}
                            type="text"
                            placeholder="Find your service here e.g. AC, Car, Facial ..."
                            className="w-full text-gray-700 p-3 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-md"
                        />
                        <button className="w-full md:w-auto p-3 bg-pink-500 hover:bg-pink-600 rounded-md transition-colors">
                            <SearchIcon />
                        </button>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="pt-28 md:pt-24 lg:pt-16 pb-12 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-md grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 p-2">
                        {services.map((service, index) => (
                            <ServiceCard key={index} title={service.title} icon={service.icon} active={service.active} href={service.href} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalAssistant;
