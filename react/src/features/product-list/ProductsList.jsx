import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductAsync, fetchProductPage } from "./productSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);
  const newproducts = productState.products;
  const status = useSelector((state) => state.product.status);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(fetchProductAsync(page));
  }, [page]);
  useEffect(() => {
    console.log(newproducts);
  }, [newproducts]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold tracking-tight text-white item -translate-x-[80%] mb-16">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {newproducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm  text-white">
                    <a href={product.thumbnail}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-white">
                    {product.discountPercentage}
                  </p>
                </div>
                <p className="text-sm font-medium text-white">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="join mt-16">
          <button
            className="join-item btn"
            onClick={() => {
              if (page > 1) {
                dispatch(fetchProductPage(page - 1));
                setPage(page - 1);
              }
            }}
          >
            «
          </button>
          <button className="join-item btn">Page {page}</button>
          <button
            className="join-item btn"
            onClick={() => {
              if (page < 5) {
                dispatch(fetchProductPage(page + 1));
                setPage(page + 1);
              }
            }}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}
