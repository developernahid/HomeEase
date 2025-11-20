import { BookedService } from "@/Model/BookedService"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const POST = async (req, res) => {
    await connect()
    const data = await req.json()
    console.log(data)
    try {
        await BookedService.create(data)
        console.log(data)
        return NextResponse.json({ message: 'success' })
    } catch (err) {
        console.error('Failed to create booking:', err)
        // Return error response so the route always returns
        return NextResponse.json({ message: 'Booking failed', error: err.message || err }, { status: 500 })
    }
}

export const GET = async (req, res) => {
    await connect()
    try {
        const bookings = await BookedService.find({})
        return NextResponse.json(bookings, { status: 200 })
    } catch (err) {
        console.error('Failed to fetch bookings:', err)
        return NextResponse.json({ message: 'Failed to fetch bookings', error: err.message || String(err) }, { status: 500 })
    }
}
