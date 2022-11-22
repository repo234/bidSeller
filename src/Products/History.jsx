import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
;

export default function History() {
 
  let products = useSelector((state) => state.products.products)
  return (
    <div className="container">
      <div className="text-[25px] mt-5 flex">
        {" "}
        <h1 className="ml-5 text-orange">On Auction</h1>
      </div>
      {products ? (
        <div className="mt-10 flex">
          <div className=" w-full ">
            <div className=" bg-sky  d_flex">
           
            </div>
          </div>
        </div>
      ) : (
        "no product is on auction yet"
      )}
    </div>
  );
}
