import React from "react";
import { allProducts, searchbyCategory } from "../../hooks/useProductHook";
import ProductPage from "../components/ProductPage";
import ProductFilter from "../components/ProductFilter";

const ProductCart = () => {
  const {
    data,
    isPending,
    error,
    search,
    setSearch,
  } = allProducts();

  const {
    data: searchCategory,
    category,
    setCategory,
  } = searchbyCategory();

  if (isPending) return <h1>Loading...</h1>;

  if (error) return <h1>Something went wrong!</h1>;

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <ProductFilter
          category={category}
          setCategory={setCategory}
          search={search}
          setSearch={setSearch}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchCategory?.products?.length > 0
            ? searchCategory.products.map((product) => (
                <ProductPage key={product.id} product={product} />
              ))
            : data?.products?.map((product) => (
                <ProductPage key={product.id} product={product} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCart;