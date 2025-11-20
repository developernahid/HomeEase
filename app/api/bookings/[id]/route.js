import { BookedService } from "@/Model/BookedService"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {
    await connect()
    // `params` can be async in Next.js app routes: await it before accessing properties
    const resolvedParams = await params;
    const email = resolvedParams?.id;

    if (!email) {
        return NextResponse.json({ message: 'Missing email parameter' }, { status: 400 })
    }
    try {
        const bookings = await BookedService.find({ email })
        return NextResponse.json(bookings, { status: 200 })
    } catch (err) {
        console.error('Failed to fetch bookings:', err)
        return NextResponse.json({ message: 'Failed to fetch bookings', error: err.message || String(err) }, { status: 500 })
    }
}
export const PUT = async (req, { params }) => {
    await connect();
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const { status } = await req.json();

    try {
        const updatedBooking = await BookedService.findByIdAndUpdate(id, { status }, { new: true });
        if (!updatedBooking) {
            return NextResponse.json({ message: 'Booking not found' }, { status: 404 });
        }
        return NextResponse.json(updatedBooking, { status: 200 });
    } catch (err) {
        console.error('Failed to update booking:', err);
        return NextResponse.json({ message: 'Failed to update booking', error: err.message || String(err) }, { status: 500 });
    }
};
