import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCart from "./components/ProductCart";

const App = () => {
  const [products, setproducts] = useState([]);
  const [page, setPage] = useState(0);
  let limit = 10;

  const getData = async () => {
    try {
      let res = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${limit * page}`,
      );
      setproducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  let totalPages = Math.ceil(products.total / limit);

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.products?.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 p-5">
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="text-white bg-yellow-500 rounded px-3 py-2 cursor-pointer active:scale-95 text-xl"
        >
          Prev
        </button>
        <h2>
          Page No {page + 1} / {totalPages}
        </h2>
        <button
          onClick={() => setPage(page + 1)}
          className="text-white bg-yellow-500 rounded px-3 py-2 cursor-pointer active:scale-95 text-xl"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
