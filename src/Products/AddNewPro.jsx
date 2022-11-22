import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, allProducts } from "../actions";

export default function AddNewPro() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [condition, setCondition] = useState("");
  const [categoryId, setCategory] = useState("");
  const [time, setTime] = useState("");
  const [discription, setDiscription] = useState("");
  const [images, setImages] = useState([]);

  const categories = useSelector((state) => state.categories.categories);
  const handlePics = (e) => {
    setImages([...images, e.target.files[0]]);
  };
  console.log(images);
  function deleteImage(image) {
   const index=images.indexOf(image)
   const result=images.splice(index, 1)
   setImages(result)
  }
  const sendData = (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("name", name);
    form.append("price", price);
    form.append("quantity", quantity);
    form.append("condition", condition);
    form.append("categoryId", categoryId);
    form.append("time", time);
    form.append("discription", discription);
   
    for (let pic of images) {
      form.append("images", pic);
    }

    dispatch(addProduct(form));
  };

  return (
    <div>
      <div className="container justify-items-center ">
        <div className="w-full mt-10 p-6 m-auto bg-pink rounded-md shadow-md md:w-[80%]">
          <h1 className="text-2xl font-bold text-center text-black ">
            Add Product
          </h1>
          <form className="mt-6  " method="post" encype="multipart/form-data">
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-bold text-orange"
              >
                name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="block md:w-[85%] w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="flex ">
              <div className="w-[40%] mb-2 mr-10">
                <label
                  htmlFor="price"
                  className="block text-sm font-bold text-orange"
                >
                  price
                </label>
                <input
                  id="price"
                  type="number"
                  name="price"
                  className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div className="mb-2 w-[40%] mr-10">
                <label
                  htmlFor="quantity"
                  className=" block text-sm font-bold text-orange "
                >
                  quantity
                </label>
                <input
                  id="quantity"
                  type="number"
                  name="quantity"
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2 w-[40%] ">
                <label
                  htmlFor="time"
                  className=" block text-sm font-bold  text-orange "
                >
                  time
                </label>
                <input
                  id="time"
                  name="time"
                  type="number"
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                  className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="flex ">
              <div className="w-[40%] mb-2 mr-10">
                <label
                  htmlFor="condition"
                  className="block text-sm font-bold text-orange"
                >
                  condition
                </label>
                <input
                  id="condition"
                  type="text"
                  name="condition"
                  onChange={(e) => {
                    setCondition(e.target.value);
                  }}
                  className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="w-[40%] mb-2 mr-10">
                <label
                  htmlFor="category"
                  className="block text-sm font-bold text-orange"
                >
                  category
                </label>
                <select
                  id="categoryId"
                  name="categoryId"
                  className="md:ml-3 border-2 p-2 rounded-lg hover:border-orange"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  <option defaultValue>Select</option>

                  {categories.map((option, index) => {
                    return (
                      <option
                        className="box f_flex"
                        key={index}
                        value={option._id}
                      >
                        {option.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="mb-2">
              <label
                htmlFor="discription"
                className="block text-sm font-bold text-orange"
              >
                discription
              </label>
              <textarea
                id="discription"
                type="text"
                name="discription"
                onChange={(e) => {
                  setDiscription(e.target.value);
                }}
                className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {images.length > 0
              ? images.map((pic, index) => {
                  return (
                    <div className="flex ">
                      <div key={index}>{pic.name}</div>
                      <button className=" ml-5 " onClick={()=>{deleteImage(pic)}}>delete</button>
                    </div>
                  );
                })
              : ""}
            <input
              id="images"
              type="file"
              name="images"
              onChange={handlePics}
              accept="image/png , image/jpeg, image/webp, image/jpg"
            />

            <button
              className="border p-2  w-[20%] mt-3 ml-[40%]"
              onClick={sendData}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
