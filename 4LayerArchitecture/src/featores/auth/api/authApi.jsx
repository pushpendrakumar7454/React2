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
  const token = localStorage.getItem("accessToken");

  try {
    const res = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
