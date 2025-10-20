import { ServiceCategory } from '@/Components/Hero'
import { serviceCategories } from '@/public/Services'
import React from 'react'

const page = () => {
    return (
        <div className="space-y-12 mx-20 my-10">
            {
                serviceCategories.slice(0, 3).map(category => (
                    <ServiceCategory
                        key={category.id}
                        title={category.title}
                        featured={category.featured}
                        all={category.all}
                    />
                ))}
        </div>
    )
}

export default page
