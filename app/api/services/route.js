import ServiceCategory from "@/Model/ServiceCategory";
import connect from "@/utils/db"

export const GET = async (request) => {
    try {
        await connect();
        const res = await ServiceCategory.find({});
        return new Response(JSON.stringify(res), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify({ message: "Failed to fetch service categories" }), { status: 500 });
    }

}

export const POST = async (request) => {
    const body = await request.json();
    console.log(body)
    try {
        await connect();
        const res = await ServiceCategory.create(body);
        return new Response(JSON.stringify({ message: "Service category created successfully" }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Failed to create service category" }), { status: 500 })
    };
}
