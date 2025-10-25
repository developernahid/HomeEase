"use client"; // Ensure this is a client component
import React from 'react';
import Hero from '@/Components/Hero';
import Top from '@/Components/Top';
import HomeService from '@/Components/HomeService';
import SafetyFeatures from '@/Components/Team';

function App() {
    return (
        <section className='mx-4 lg:mx-16 '>


            <Top></Top>
            {/* <Hero></Hero> */}
            <HomeService></HomeService>
            <SafetyFeatures></SafetyFeatures>
        </section>

    )
}

export default App;
