import { apiInstance } from "../config/apiInstance";

export const getProducts = async({ limit, pageParam }) => {


    console.log("page", pageParam);

    try {
        let res = await apiInstance.get(
            `/products?limit=${limit}&skip=${pageParam}`
        );

        return res.data;
    } catch (error) {
        console.log(error);
    }
};