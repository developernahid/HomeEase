'use client'
import { ServiceCard } from '@/Components/Hero';
import { serviceCategories } from '@/public/Services';
import React, { useEffect, useState } from 'react'

const ServicePage = ({ params }) => {
    const resolvedParams = typeof React.use === 'function' ? React.use(params) : params;
    const Service = resolvedParams?.id?.split('-')[0]?.toLowerCase();

    const [data, setData] = useState(null);

    useEffect(() => {
        if (!Service) return;
        const res = serviceCategories.find(category => category.id === Service);
        setData(res ?? null);
    }, [Service]);

    return (
        <section className='h-[90vh]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 px-12'>
                {data?.featured?.map(item => (
                    <ServiceCard key={item.id} title={item.title} image={item.image} href={`/services/${Service}/${item.title.split(' ').join('-').toLowerCase()}`} />
                ))}
            </div>
        </section>
    )
}

export default ServicePage
