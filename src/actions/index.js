import axios from "../helper/axios";

export const login = (user) => {
  return async (dispatch) => {
    dispatch({
      type: "LOGIN",
      payload: { ...user },
    });
    const res = await axios
      .post("/api/users/login", { ...user })
      .then((res) => {
        console.log(res);

        if (
          res.data.status === "Logged in successfully" &&
          res.data.user.role === "seller"
        ) {
          alert(res.data.status);
          const token = res.data.data;
          const user = res.data.user;
          window.localStorage.setItem("token", token);
          window.localStorage.setItem("user", JSON.stringify(user));
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: {
              token: window.localStorage.getItem(token),
              name: user.name,
              email: user.email,
              id: user._id,
              role: user.role,
            },
          });
        } else if (
          res.data.status === "Logged in successfully" &&
          res.data.user.role !== "seller"
        ) {
          alert("you are not authorized");
        } else {
          alert(res.data.message);
        }
      });
    if (res.data.status === 400) {
      alert("Something went wrong");
      dispatch({
        type: "LOGIN_FAILURE",
        payload: { error: res.data.error },
      });
    }
  };
};

export const getAllCategory = () => {
  return async (dispatch) => {
    dispatch({ type: "CATEGORIES_REQUEST" });
    const res = await axios.get("/api/categories/");
    console.log(res);
    if (res.data !== "") {
      dispatch({
        type: "CATEGORIES_SUCCESS",
        payload: { categories: res.data },
      });
    } else {
      dispatch({
        type: "CATEGORIES_FAILURE",
        payload: { error: res.data.error },
      });
    }
  };
};

export const allProducts = (id) => {
  return async (dispatch) => {
    dispatch({ type: "PRODUCT_REQUEST" });
    const res = await axios.get("/api/products/seller/" + id);
    console.log(res);
    if (res.data.products !== "") {
      const products = res.data.products;
      dispatch({
        type: "PRODUCT_SUCCESS",
        payload: { products: products },
      });
    }
    if (res.data.products === "") {
      dispatch({
        type: "PRODUCT_NOTFOUND",
        payload: { notFound: res.data },
      });
    } else {
      dispatch({
        type: "PRODUCT_FAILURE",
        payload: { error: res.data.error },
      });
    }
  };
};

export const singleProduct = (_id) => {
  return async (dispatch) => {
    dispatch({ type: "SINGLE_PRODUCT" });
    const res = await axios.get("/api/products/" + _id);
    console.log(res);
    if (res.data.products !== "") {
      const product = res.data.product;
      dispatch({
        type: "SINGLE_PRODUCT_SUCCESS",
        payload: {
          product: product,
        },
      });
    } else {
      dispatch({
        type: "SINGLE_PRODUCT_FAILURE",
        payload: { error: res.data.error },
      });
    }
  };
};

export const addProduct = (form) => {
  return async (dispatch) => {
    dispatch({ type: "ADD_PRODUCT" });
    const res = await axios.post("/api/products/create", form, {
      headers: {
        "x-auth-token": `${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
  };
};

export const deletePro = () => {
  return async (dispatch) => {
    dispatch({ type: "CREATE_AUCTION" });
    const res = await axios.post("/api/product/:_id", {
      headers: {
        "x-auth-token": `${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
  };
};
