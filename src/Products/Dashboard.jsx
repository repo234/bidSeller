import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allProducts, auctionProducts, getAllCategory } from "../actions";
import Search from "../header/Search";
import Products from "./Products";

export default function Dashboard() {
  const id = useSelector((state) => state.user.id);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  useEffect(() => {
    dispatch(allProducts(id));
  }, []);
  const auth = useSelector((state) => state.user.auth);
  const products=useSelector(state=>state.products.products)
  return (
    <div>
      {auth ? (
        <section className="flash container">
          <Search />

          <div className="text-[25px]  flex">
            {" "}
            <h1 className="ml-5 text-orange">Products</h1>
          </div>
          {
            products?( <div className="mt-10 flex">
            <div className=" w-full ">
              <div className=" bg-sky  d_flex">
               <Products/>
              </div>
            </div>
            
          </div>):("No products yet")
          }
   
           
        
        </section>
      ) : (
        "You are not login"
      )}
    </div>
  );
}
