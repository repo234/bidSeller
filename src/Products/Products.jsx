import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

export default function Products() {
  const products = useSelector((state) => state.products.products);
  return (
    <section className="flash ">
      <div className=" heading flex">
        <div className=" w-full ">
          <div className="container text-[25px] flex">
            {products.map((product) => {
              return <Product product={product} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
