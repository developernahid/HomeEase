import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    id: {
        // Accept numeric ids or string slugs (e.g., 'photography')
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { _id: false });

const bookedServiceSchema = new mongoose.Schema({
    service: {
        type: serviceSchema,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    location: {
        type: String,
        trim: true
    },
    contact: {
        type: String,
        trim: true
    },
    comment: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        trim: true,
        default: 'Pending',
        enum: ['Pending', 'Approved', 'Rejected']
    }
}, { timestamps: true });

export const BookedService = mongoose.models.BookedService || mongoose.model('BookedService', bookedServiceSchema);
