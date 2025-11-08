import axios from "axios"

export const serviceCategories = async () => {
    const res = await axios.get('/api/services');
    console.log(res?.data)
    return res?.data;
}
