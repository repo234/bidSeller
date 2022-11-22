const initState = {
  auctionProducts: [],
  product: [],
  auction: [],
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case "AUCTION_PRODUCT_SUCCESS":
      state = {
        ...state,
        auctionProducts: action.payload.products,
      };
      break;
    case "AUCTION_SUCCESS":
      state = {
        ...state,
        product: action.payload.product,
      };
      break;
    case "AUCTION_DETAILS_SUCCESS":
      state = {
        ...state,
        auction: action.payload.auction,
      };
      break;
    case "AUCTION_FAILURE":
      state = {
        ...state,
        error: action.payload.error,
      };
  }
  return state;
};
