'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServiceManagementPage = () => {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        featured: [],
        all: [],
    });
    const [currentAllService, setCurrentAllService] = useState('');
    const [newFeatured, setNewFeatured] = useState({
        title: '',
        description: '',
        image: 'https://placehold.co/600x400/e2e8f0/334155?text=Service',
    });

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get('/api/services');
            setServices(response.data);
        } catch (error) {
            console.error("Failed to fetch services:", error);
        }
    };

    const handleSelectService = (service) => {
        setSelectedService(service);
        setFormData(service);
    };

    const handleAddNew = () => {
        setSelectedService(null);
        setFormData({
            id: '',
            title: '',
            featured: [],
            all: [],
        });
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddAllService = () => {
        if (currentAllService.trim()) {
            setFormData((prev) => ({
                ...prev,
                all: [...prev.all, currentAllService.trim()],
            }));
            setCurrentAllService('');
        }
    };

    const handleRemoveAllService = (indexToRemove) => {
        setFormData((prev) => ({
            ...prev,
            all: prev.all.filter((_, index) => index !== indexToRemove),
        }));
    };

    const handleNewFeaturedChange = (e) => {
        const { name, value } = e.target;
        setNewFeatured((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddFeatured = () => {
        if (newFeatured.title && newFeatured.description) {
            const nextId = formData.featured.length > 0 ? Math.max(...formData.featured.map(f => f.id)) + 1 : 1;
            setFormData((prev) => ({
                ...prev,
                featured: [...prev.featured, { ...newFeatured, id: nextId }],
            }));
            setNewFeatured({
                title: '',
                description: '',
                image: 'https://placehold.co/600x400/e2e8f0/334155?text=Service',
            });
        } else {
            alert('Please fill in at least a title and description for the featured service.');
        }
    };

    const handleRemoveFeatured = (idToRemove) => {
        setFormData((prev) => ({
            ...prev,
            featured: prev.featured.filter((item) => item.id !== idToRemove),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedService) {
            // Update existing service
            try {
                await axios.put(`/api/services/${selectedService._id}`, formData);
                alert('Service updated successfully!');
                fetchServices();
            } catch (error) {
                console.error('Failed to update service:', error);
                alert('Error updating service.');
            }
        } else {
            // Create new service
            try {
                await axios.post('/api/services', formData);
                alert('Service created successfully!');
                fetchServices();
                handleAddNew();
            } catch (error) {
                console.error('Failed to create service:', error);
                alert('Error creating service.');
            }
        }
    };

    const handleDelete = async () => {
        if (selectedService) {
            if (confirm('Are you sure you want to delete this service?')) {
                try {
                    await axios.delete(`/api/services/${selectedService._id}`);
                    alert('Service deleted successfully!');
                    fetchServices();
                    handleAddNew();
                } catch (error) {
                    console.error('Failed to delete service:', error);
                    alert('Error deleting service.');
                }
            }
        }
    };

    const inputClasses = "w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500";
    const labelClasses = "block text-sm font-medium text-gray-700 mb-1";
    const fieldsetClasses = "mb-6 p-4 border border-gray-200 rounded-md";
    const legendClasses = "text-lg font-semibold text-gray-800 px-2";
    const buttonClasses = "py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition";
    const removeButtonClasses = "py-1 px-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition ml-2";

    return (
        <div className="flex">
            <div className="w-1/4 p-4 bg-gray-100 h-screen overflow-y-auto">
                <h2 className="text-xl font-bold mb-4">Existing Services</h2>
                <button onClick={handleAddNew} className="w-full mb-4 py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                    Add New Service
                </button>
                <ul>
                    {services.map(service => (
                        <li key={service._id} onClick={() => handleSelectService(service)} className={`p-2 cursor-pointer rounded-md ${selectedService?._id === service._id ? 'bg-blue-200' : 'hover:bg-gray-200'}`}>
                            {service.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-3/4 p-6 overflow-y-auto h-screen">
                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
                        {selectedService ? 'Edit Service Category' : 'Add New Service Category'}
                    </h2>

                    <fieldset className={fieldsetClasses}>
                        <legend className={legendClasses}>Main Details</legend>
                        <div className="mb-4">
                            <label htmlFor="id" className={labelClasses}>Category ID</label>
                            <input
                                type="text"
                                id="id"
                                name="id"
                                placeholder="e.g., 'ac' or 'home-cleaning' (must be unique)"
                                value={formData.id}
                                onChange={handleFormChange}
                                className={inputClasses}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="title" className={labelClasses}>Category Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="e.g., 'AC Repair & Servicing'"
                                value={formData.title}
                                onChange={handleFormChange}
                                className={inputClasses}
                                required
                            />
                        </div>
                    </fieldset>

                    <fieldset className={fieldsetClasses}>
                        <legend className={legendClasses}>Featured Services</legend>
                        <div className="space-y-2 mb-4">
                            {formData.featured.map((item) => (
                                <div key={item.id} className="flex justify-between items-center p-2 border border-gray-200 rounded-md bg-gray-50">
                                    <span>{item.id}: {item.title}</span>
                                    <button
                                        type="button"
                                        className={removeButtonClasses}
                                        onClick={() => handleRemoveFeatured(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            {formData.featured.length === 0 && (
                                <p className="text-sm text-gray-500">No featured services added yet.</p>
                            )}
                        </div>
                        <div className="p-4 border border-gray-200 rounded-md bg-gray-50 space-y-3">
                            <h4 className="font-semibold text-gray-700">Add a New Featured Service</h4>
                            <div>
                                <label className={labelClasses}>Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="e.g., 'AC Servicing'"
                                    value={newFeatured.title}
                                    onChange={handleNewFeaturedChange}
                                    className={inputClasses}
                                />
                            </div>
                            <div>
                                <label className={labelClasses}>Description</label>
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="e.g., 'Professional AC maintenance'"
                                    value={newFeatured.description}
                                    onChange={handleNewFeaturedChange}
                                    className={inputClasses}
                                />
                            </div>
                            <div>
                                <label className={labelClasses}>Image URL</label>
                                <input
                                    type="text"
                                    name="image"
                                    value={newFeatured.image}
                                    onChange={handleNewFeaturedChange}
                                    className={inputClasses}
                                />
                            </div>
                            <button type="button" className={buttonClasses} onClick={handleAddFeatured}>
                                Add Featured Service
                            </button>
                        </div>
                    </fieldset>

                    <fieldset className={fieldsetClasses}>
                        <legend className={legendClasses}>All Services</legend>
                        <div className="space-y-2 mb-4">
                            {formData.all.map((item, index) => (
                                <div key={index} className="flex justify-between items-center p-2 border border-gray-200 rounded-md bg-gray-50">
                                    <span>{item}</span>
                                    <button
                                        type="button"
                                        className={removeButtonClasses}
                                        onClick={() => handleRemoveAllService(index)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            {formData.all.length === 0 && (
                                <p className="text-sm text-gray-500">No services added yet.</p>
                            )}
                        </div>
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                placeholder="e.g., 'AC Gas Refill'"
                                value={currentAllService}
                                onChange={(e) => setCurrentAllService(e.target.value)}
                                className="flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                            <button type="button" className={buttonClasses} onClick={handleAddAllService}>
                                Add
                            </button>
                        </div>
                    </fieldset>

                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="py-3 px-4 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition text-lg"
                        >
                            {selectedService ? 'Update Service Category' : 'Create Service Category'}
                        </button>
                        {selectedService && (
                            <button
                                type="button"
                                onClick={handleDelete}
                                className="py-3 px-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition text-lg"
                            >
                                Delete Service Category
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ServiceManagementPage;
