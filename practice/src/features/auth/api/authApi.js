import { axiosInstanceApi } from "../../../config/axiosInstance";

export const loginUserApi = async (credentials) => {
  try {
    const res = await axiosInstanceApi.post("/auth/login", credentials);

    localStorage.setItem("accessToken", res.data.accessToken);

    return res.data;
  } catch (error) {
    console.log(error.response?.data || error);
    throw error;
  }
};

export const hydredUser = async () => {
  const token = localStorage.getItem("accessToken");

  try {
    const res = await axiosInstanceApi.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error.response?.data || error);
    throw error;
  }
};