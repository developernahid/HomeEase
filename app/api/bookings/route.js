import { BookedService } from "@/Model/BookedService"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const POST = async (req, res) => {
    await connect()
    const data = await req.json()
    try {
        await BookedService.create(data)
        console.log(data)
        return NextResponse.json({ message: 'success' })
    } catch (err) {
        console.log(err)
    }
}
