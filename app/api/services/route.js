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
