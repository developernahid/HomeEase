import Link from 'next/link';
import React, { useState } from 'react';

// --- SVG Icon Components ---
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

const FacebookIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const TwitterIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>;
const InstagramIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zM12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>;


// --- Data for Services ---
const acServices = {
  title: "AC Repair & Servicing",
  featured: [
    { id: 1, title: "AC Servicing", description: "Professional AC maintenance and cleaning", image: "https://placehold.co/600x400/e2e8f0/334155?text=AC+Servicing" },
    { id: 2, title: "AC Repair", description: "Expert repair for all AC issues", image: "https://placehold.co/600x400/e2e8f0/334155?text=AC+Repair" },
    { id: 3, title: "AC Installation", description: "Professional AC installation service", image: "https://placehold.co/600x400/e2e8f0/334155?text=AC+Installation" },
  ],
  all: ["AC Servicing", "AC Repair", "AC Installation", "AC Gas Refill", "AC Uninstallation", "Deep Cleaning"],
};

const applianceServices = {
    title: "Appliance Repair",
    featured: [
        { id: 1, title: "Refrigerator Repair", description: "Fix all refrigerator issues quickly", image: "https://placehold.co/600x400/e2e8f0/334155?text=Fridge+Repair" },
        { id: 2, title: "Microwave Repair", description: "Expert microwave repair service", image: "https://placehold.co/600x400/e2e8f0/334155?text=Microwave" },
        { id: 3, title: "TV Repair", description: "Professional TV repair and maintenance", image: "https://placehold.co/600x400/e2e8f0/334155?text=TV+Repair" },
    ],
    all: ["Refrigerator Repair", "Washing Machine Repair", "Microwave Repair", "TV Repair", "Oven Repair", "Dishwasher Repair"],
};

const cleaningServices = {
    title: "Cleaning Solutions",
    featured: [
        { id: 1, title: "Home Cleaning", description: "Complete home cleaning service", image: "https://placehold.co/600x400/e2e8f0/334155?text=Home+Cleaning" },
        { id: 2, title: "Office Cleaning", description: "Professional office cleaning", image: "https://placehold.co/600x400/e2e8f0/334155?text=Office+Clean" },
        { id: 3, title: "Deep Cleaning", description: "Thorough deep cleaning service", image: "https://placehold.co/600x400/e2e8f0/334155?text=Deep+Clean" },
    ],
    all: ["Home Cleaning", "Office Cleaning", "Deep Cleaning", "Carpet Cleaning", "Sofa Cleaning", "Kitchen Cleaning"],
};

const beautyServices = {
    title: "Beauty & Wellness",
    featured: [
        { id: 1, title: "Salon Services", description: "Professional hair and beauty care", image: "https://placehold.co/600x400/e2e8f0/334155?text=Salon" },
        { id: 2, title: "Spa & Massage", description: "Relaxing spa and massage treatments", image: "https://placehold.co/600x400/e2e8f0/334155?text=Spa" },
        { id: 3, title: "Makeup Services", description: "Professional makeup for all occasions", image: "https://placehold.co/600x400/e2e8f0/334155?text=Makeup" },
    ],
    all: ["Haircut & Styling", "Spa & Massage", "Makeup Services", "Facial Treatment", "Manicure & Pedicure", "Waxing Services"],
};

// --- Reusable Components ---

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex items-center justify-between py-4 gap-8">
                    <a href="#" className="text-3xl font-bold text-violet-700">HomeEase</a>
                    
                    <div className="hidden md:flex flex-1 max-w-lg relative items-center">
                        <SearchIcon />
                        <input type="text" placeholder="Search for services..." className="w-full py-2.5 pl-12 pr-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-violet-600"/>
                    </div>

                    <nav className="hidden lg:flex items-center gap-8">
                        <a href="/home" className="text-sm font-medium text-gray-500 hover:text-violet-600 transition-colors">Home</a>
                        <a href="#" className="text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors">Services</a>
                        <a href="/about" className="text-sm font-medium text-gray-500 hover:text-violet-600 transition-colors">About</a>
                        <a href="/contact" className="text-sm font-medium text-gray-500 hover:text-violet-600 transition-colors">Contact</a>
                    </nav>

                    <div className="hidden sm:flex items-center gap-3">
                        <Link href={"/login"}><button className="w-full px-5 py-2.5 text-sm font-medium text-gray-800 bg-transparent border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">Sign In</button></Link>
                        <Link href={"/register"}><button className="w-full px-5 py-2.5 text-sm font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors">Sign Up</button></Link>
                    </div>

                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none">
                        <MenuIcon />
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="lg:hidden pb-4">
                        <nav className="flex flex-col gap-2 px-2">
                            <a href="#" className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-violet-600">Home</a>
                            <a href="#" className="px-4 py-2 rounded-md bg-violet-100/60 text-violet-600">Services</a>
                            <a href="#" className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-violet-600">About</a>
                            <a href="#" className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-violet-600">Contact</a>
                            <div className="border-t border-gray-200 mt-2 pt-4 flex flex-col gap-3">
                                <Link href={"/login"}><button className="w-full px-5 py-2.5 text-sm font-medium text-gray-800 bg-transparent border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">Sign In</button></Link>
                                <button className="w-full px-5 py-2.5 text-sm font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors">Sign Up</button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

const ServiceCard = ({ image, title, description }) => (
    <div className="border border-gray-200 rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <img src={image} alt={title} className="w-full h-52 object-cover" />
        <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
            <p className="text-sm text-gray-500 mb-4 h-10">{description}</p>
            <button className="w-full py-2.5 px-4 rounded-lg bg-violet-600 text-white font-medium text-sm hover:bg-violet-700 transition-colors">Book Now</button>
        </div>
    </div>
);

const ServiceCategory = ({ title, featured, all }) => (
    <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <a href="#" className="text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors flex items-center gap-1">View All →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featured.map(service => (
                <ServiceCard key={service.id} {...service} />
            ))}
        </div>
        <div className="border-t border-gray-200 pt-6">
            <h3 className="font-semibold text-gray-900 mb-4">All {title.split(' ')[0]} Services</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                {all.map(serviceName => (
                    <div key={serviceName} className="flex items-center gap-2 text-sm">
                        <CheckIcon />
                        {serviceName}
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Footer = () => (
     <footer className="bg-gray-800 text-white mt-16 md:mt-24">
        <div className="container mx-auto px-4 lg:px-6 py-12">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Company</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Press</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Blog</a></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Services</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">AC Repair</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Appliance Repair</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Cleaning</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Beauty & Wellness</a></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Support</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Download App</h3>
                    <div className="flex flex-col items-start gap-3">
                        <a href="#"><img src="https://placehold.co/140x42/334155/ffffff?text=Google+Play" alt="Get it on Google Play" className="h-10" /></a>
                        <a href="#"><img src="https://placehold.co/140x42/334155/ffffff?text=App+Store" alt="Download on the App Store" className="h-10" /></a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
                <p className="text-gray-400 mb-4 sm:mb-0">&copy; 2025 Sheba.xyz. All rights reserved.</p>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white"><FacebookIcon /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><TwitterIcon /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><InstagramIcon /></a>
                </div>
            </div>
        </div>
    </footer>
);


// --- Main App Component ---
export default function Hero() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-6">
            <header className="text-center mb-12 md:mb-16">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">All Services</h1>
                <p className="text-lg text-gray-500">Browse through our comprehensive list of professional services</p>
            </header>
            <div className="space-y-12">
                <ServiceCategory {...acServices} />
                <ServiceCategory {...applianceServices} />
                <ServiceCategory {...cleaningServices} />
                <ServiceCategory {...beautyServices} />
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
