'use client';

import { useState } from 'react';
import axios from 'axios';
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
            We’d love to hear from you! Whether you have a question about features, pricing, or anything else — our team is ready to answer all your questions.
          </p>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <mail className="w-5 h-5" />
              <span>support@example.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <phone className="w-5 h-5" />
              <span>+880 1234-567890</span>
            </div>
            <div className="flex items-center space-x-3">
              <mapPin className="w-5 h-5" />
              <span>Dhaka, Bangladesh</span>
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
