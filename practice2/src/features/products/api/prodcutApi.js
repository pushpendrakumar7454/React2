import { apiInstance } from "../../../config/apiInstance";

export const getAllProducts = async (search) => {
  let url = search ? `/products/search?q=${search}` : `/products/`;

  try {
    const res = await apiInstance(url);
    console.log(res.data.products);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllProductsCategory = async () => {
  try {
    const res = await apiInstance("/products/categories");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


export const getproductbyCategory=async(category)=>{
     try {
    const res = await apiInstance(`products/category/${category}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }

}
