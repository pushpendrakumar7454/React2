import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCart from "./components/ProductCart";

const App = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center p-6 gap-4">
        <button className="text-xl cursor-pointer active:scale-95 text-white bg-yellow-500 rounded py-2 px-3 text-center">Prev</button>
        <h2>Page No 2</h2>
        <button className="text-xl cursor-pointer active:scale-95 text-white bg-yellow-500 rounded py-2 px-3 text-center">Next</button>
      </div>
    </div>
  );
};

export default App;
