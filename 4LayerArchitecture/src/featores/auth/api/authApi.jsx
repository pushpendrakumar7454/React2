import { api } from "../../../config/axiosInstance";

export const loginUserApi = async (cretencial) => {
  try {
    let res = await api.post("/auth/login", cretencial);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
