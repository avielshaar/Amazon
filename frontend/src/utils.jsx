import { axios } from "./imports.js";
import { PRODUCT_ADD } from "./actions";

const getError = (error) => {
  return error.message && error.response.data.message
    ? error.response.data.message
    : error.message;
};

const addToCartHandler = async (product, cartItems, ctxDispatch) => {
  const existedItem = cartItems.find((item) => item._id === product._id);
  const quantity = existedItem ? existedItem.quantity + 1 : 1;

  try {
    const { data } = await axios.get(`/api/v1/products/${product._id}`);

    if (data.countInStock < quantity) {
      alert("Sorry, product is out of stock");
      console.log("At try addToCartHandler in if");
      return;
    }
    ctxDispatch({
      type: PRODUCT_ADD,
      payload: { ...product, quantity },
    });
  } catch (error) {
    alert(error.message);
  }
  return;
};

export { getError, addToCartHandler };
