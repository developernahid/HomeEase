'use client';

import { useState } from 'react';
import axios from 'axios';

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
    </svg>
);

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);


const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!name || !email || !message) {
            setError('All fields are required.');
            return;
        }

        try {
            const data = { name, email, message };
            await axios.post('/api/contact', data);
            setSuccess('✅ Your message has been sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
        } catch (err) {
            setError('❌ Failed to send message. Please try again later.');
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1600&q=80')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 flex flex-col md:flex-row bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full mx-4">
                {/* Left Card */}
                <div className="md:w-1/2 bg-indigo-600 text-white p-10 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-indigo-100 mb-6">
                        We&apos;d love to hear from you! Whether you have a question about features, pricing, or anything else — our team is ready to answer all your questions.
                    </p>

                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                        <MailIcon className="w-5 h-5" />
                        <a href="mailto:homeease@gmail.com" className="hover:underline">homeease@gmail.com
                        </a>
                        </div>

                    <div className="flex items-center space-x-3">
                    <PhoneIcon className="w-5 h-5" />
                    <a href="tel:+8801868260224" className="hover:underline"> +8801868260224
                    </a> 
                    </div>
  
                    </div>
                </div>

                {/* Right Form */}
                <div className="md:w-1/2 p-10">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows="5"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="Write your message..."
                                required
                            ></textarea>
                        </div>

                        {error && <p className="text-red-600 font-medium">{error}</p>}
                        {success && <p className="text-green-600 font-medium">{success}</p>}

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
