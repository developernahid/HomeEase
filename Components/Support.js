import React from 'react';

/**
 * TestimonialSection Component
 * Renders the "Real Happy Customers" section
 */
const TestimonialSection = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-sm font-bold uppercase tracking-wider text-gray-500">
            SOME HAPPY FACES
          </span>
          <h2 className="mt-1 text-3xl font-bold text-gray-900 lg:text-4xl">
            Real Happy Customers, Real Stories
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="relative flex flex-col items-center lg:flex-row lg:space-x-12">
    
         
          
          {/* Testimonial Card */}
          <div className="relative w-full lg:w-1/2">
            <span 
              className="absolute -top-4 -left-4 text-8xl font-bold text-teal-200 opacity-50" 
              style={{ lineHeight: 1 }}
              aria-hidden="true"
            >
              “
            </span>
            <blockquote className="relative z-10 border-l-4 border-teal-500 pl-6 lg:pl-8">
              <p className="text-xl font-medium text-gray-700 lg:text-2xl">
                Such service platforms are available in other countries. I've personally used those when I was abroad. I'm very pleased that such a portal is available here in Bangladesh as well. Thank you HomeEase.
              </p>
            </blockquote>
            <div className="mt-6 pl-6 lg:pl-8">
              <cite className="not-italic">
                <span className="block text-lg font-bold text-gray-900">Zabeen Yusuf Nur</span>
                <span className="block text-base text-gray-500">IT Consultant, Australia</span>
              </cite>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="relative mt-10 w-full max-w-lg lg:mt-0 lg:w-1/2">
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200 shadow-lg">
               
              <img
                src="/customer-testimonial-video.jpg"
                alt="Testimonial video placeholder"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="group flex h-24 w-24 items-center justify-center rounded-full bg-pink-600/80 backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-pink-600 hover:scale-110"
                aria-label="Play testimonial video"
              >
                <svg
                  className="ml-1 h-12 w-12 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5.14v13.72L19.25 12 8 5.14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * SupportSection Component
 * Renders the 24/7 support banner
 */
const SupportSection = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center justify-between rounded-xl bg-white p-8 shadow-sm md:flex-row md:p-12">
          {/* Text and Buttons */}
         <div className="mb-8 text-center md:mb-0 md:text-left">
  <h3 className="text-2xl font-semibold text-gray-800">
    Can't find your desired service? Let us know 24/7 in 16516.
  </h3>

  <div className="mt-6 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">

    {/* Request a service → Go to service page */}
    <a
      href="/services"
      className="rounded-lg bg-pink-600 px-6 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 text-center"
    >
      Request a service
    </a>

    {/* Call button → tel:16516 */}
    <a
      href="tel:16516"
      className="flex items-center justify-center rounded-lg border border-pink-500 px-6 py-3 text-base font-semibold text-pink-600 transition-all duration-300 hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
    >
      <svg
        className="mr-2 h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      16516
    </a>

  </div>
</div>

          
          {/* Support Agent Image Placeholder */}
          <div className="w-full max-w-xs md:w-1/3">
            <img 
              src="/customer-support-representative.jpg" 
              alt="Support agent"
              className="h-auto w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Main Support Component
 * Wraps the Testimonial and Support sections.
 */
export default function Support() {
  return (
    <div className="flex w-full flex-col items-center">
      <TestimonialSection />
      <SupportSection />
    </div>
  );
}
