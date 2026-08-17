import { apiInstance } from "../../../config/apiInstance";

export const loginUserApi = async (cretencial) => {
  try {
    const res = await apiInstance.post("/auth/login",cretencial);
    localStorage.setItem("accessToken", res.data.accessToken);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const hydredUser = async () => {
  const token = localStorage.getItem("accessToken");
  try {
    const res = await apiInstance.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
