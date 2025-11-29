/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

// --- Mock data for HowItWorks ---
const steps = [
    {
        number: 1,
        title: "Select the Service",
        description: "Pick the service you are looking for- from the website or the app."
    },
    {
        number: 2,
        title: "Pick your schedule",
        description: "Pick your convenient date and time to avail the service. Pick the service provider based on their rating."
    },
    {
        number: 3,
        title: "Place Your Order & Relax",
        description: "Review and place the order. Now just sit back and relax. We'll assign the expert service provider's schedule for you."
    }
];

/**
 * HowItWorks Component
 * Renders the "Easiest way to get a service" section.
 */
export default function HowItWorks() {
    return (
        <section className="w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-3xl font-bold text-gray-900">
                Easiest way to get a service
            </h2>

            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

                {/* Left Column: Phone Image with Play Button */}
                <div className="relative flex h-full min-h-[400px] w-full max-w-md justify-self-center rounded-2xl bg-gray-100 p-6 shadow-lg lg:min-h-[500px]">
                    {/* Placeholder for the phone image */}
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-200">

                        <img src="/customer-testimonial-video.jpg"
                        />
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button
                            className="group flex h-24 w-24 items-center justify-center rounded-full bg-pink-600/80 backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-pink-600 hover:scale-110"
                            aria-label="Play video"
                        >
                            <svg
                                className="ml-1 h-12 w-12 text-white transition-transform duration-300 ease-in-out"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M8 5.14v13.72L19.25 12 8 5.14z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Right Column: Steps */}
                <div className="flex flex-col space-y-8">
                    {steps.map((step, index) => (
                        <div key={step.number} className="relative flex">
                            {/* Numbered Circle and Connecting Line */}
                            <div className="flex flex-col items-center">
                                <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 text-2xl font-bold text-white shadow-md">
                                    {step.number}
                                </div>
                                {/* Connecting line, hidden for the last item */}
                                {index < steps.length - 1 && (
                                    <div className="h-full w-0.5 flex-1 bg-teal-300" />
                                )}
                            </div>

                            {/* Step Content */}
                            <div className="ml-6 flex-1 pb-8">
                                <h3 className="mb-2 text-xl font-bold text-gray-900">
                                    {step.title}
                                </h3>
                                <p className="text-base text-gray-600">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
