const getError = (error) => {
  return error.message && error.response.data.message
    ? error.response.data.message
    : error.message;
};

const addToCartHandler = (product, cartItems, ctxDispatch) => {
  return; // will implement on Thursday
};

export { getError, addToCartHandler };
