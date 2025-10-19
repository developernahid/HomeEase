"use client"; // Ensure this is a client component
import React, { useState, useEffect } from 'react';
import Header from '@/Components/Header';
import ProductCard from '@/Components/ProductCard';
import Footer from '@/Components/Footer';
import Cart from '@/Components/Cart';
import { products } from './data/product';
import { toast } from 'react-toastify';
import { useAuth } from '@/context/AuthContext';
import Hero from '@/Components/Hero';

function App() {
    return (
        <Hero></Hero>
    )
}

export default App;
