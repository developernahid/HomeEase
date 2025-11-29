import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'vendor'],
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    photoURL: {
        type: String,
        default: ''
    },
    phoneNumber: {
        type: String,
    },
    businessName: {
        type: String,
    },
    businessAddress: {
        type: String,
    },
    serviceType: {
        type: String,
    },
    experience: {
        type: String,
    },
    serviceArea: {
        type: String,
    },
    workingHoursStart: {
        type: String,
    },
    workingHoursEnd: {
        type: String,
    },
    receiveOrderType: {
        type: String,
    },
    documents: {
        type: [String],
    },
    ownerName: {
        type: String,
    },
    nicNumber: {
        type: String,
    },
    nicExpiryDate: {
        type: String,
    },
    paymentMethod: {
        type: String,
    },
    pricingMethod: {
        type: String,
    },
    hourlyFee: {
        type: String,
    },
    flatFee: {
        type: String,
    },
    additionalInfo: {
        type: String,
    }
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
