import { api } from "../../../config/axiosInstance";

export const loginUserApi = async (cretencial) => {
  try {
    let res = await api.post("/auth/login", cretencial);
    console.log(res.data);
    localStorage.setItem('accessToken',res.data.accessToken)
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


export const hydreadUser = async () => {
  try {
    let res = await api.get("/auth/me");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
