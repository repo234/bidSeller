import { combineReducers } from "redux";
import auth from "./auth";
import products from "./products";
import category from "./category";
import auction from "./auction";
const rootReducer = combineReducers({
  user: auth,
  products: products,
  categories: category,
  auction: auction,
});
export default rootReducer;
