"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';

const BookedOrdersPage = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(user)

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get(`/api/bookings/${user.email}`);
                setBookings(response.data);
            } catch (error) {
                console.error("Failed to fetch bookings:", error);
            } finally {
                setLoading(false);
            }
        };
        const fetchBookingsAdmin = async () => {
            try {
                const response = await axios.get(`/api/bookings`);
                setBookings(response.data);
            } catch (error) {
                console.error("Failed to fetch bookings:", error);
            } finally {
                setLoading(false);
            }
        };
        if (user) {
            if (user?.role === 'admin') {
                fetchBookingsAdmin();
            } else {
                fetchBookings();
            }
        }
    }, [user]);

    const handleStatusChange = async (bookingId, newStatus) => {
        try {
            const response = await axios.put(`/api/bookings/${bookingId}`, { status: newStatus });
            if (response.status === 200) {
                setBookings(bookings.map(b => b._id === bookingId ? { ...b, status: newStatus } : b));
            }
        } catch (error) {
            console.error("Failed to update booking status:", error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Booked Orders</h1>
            {bookings.length === 0 ? (
                <p>You have no booked orders.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        user.role === 'admin' ? bookings.slice().reverse().map((booking) => (
                            <div key={booking._id} className="border p-4 rounded-lg shadow-sm">
                                <h2 className="text-xl font-semibold mb-2">{booking.service.title}</h2>
                                <p><strong>Name:</strong> {booking.name}</p>
                                <p><strong>Email:</strong> {booking.email}</p>
                                <p><strong>Location:</strong> {booking.location}</p>
                                <p><strong>Contact:</strong> {booking.contact}</p>
                                <p><strong>Comment:</strong> {booking.comment}</p>
                                <p><strong>Status:</strong> {booking.status}</p>
                                <select
                                    value={booking.status}
                                    onChange={(e) => handleStatusChange(booking._id, e.target.value)}
                                    className="mt-2 p-2 border rounded"
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                            </div>
                        )) : bookings.filter(b => b.email === user.email).slice().reverse().map((booking) => (
                            <div key={booking._id} className="border p-4 rounded-lg shadow-sm">
                                <h2 className="text-xl font-semibold mb-2">{booking.service.title}</h2>
                                <p><strong>Name:</strong> {booking.name}</p>
                                <p><strong>Email:</strong> {booking.email}</p>
                                <p><strong>Location:</strong> {booking.location}</p>
                                <p><strong>Contact:</strong> {booking.contact}</p>
                                <p><strong>Comment:</strong> {booking.comment}</p>
                                <p><strong>Status:</strong> {booking.status}</p>
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default BookedOrdersPage;
