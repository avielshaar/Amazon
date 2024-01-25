import { USER_SIGNIN, USER_SIGNOUT, PRODUCT_ADD_TO_CART } from "../actions";

const storeReducer = (state, action) => {
  switch (action.type) {
    case USER_SIGNIN: {
      return { ...state, userInfo: action.payload };
    }
    case USER_SIGNOUT: {
      return { ...state, userInfo: null };
    }
    case PRODUCT_ADD_TO_CART: {
      const newItem = action.payload;
      const existingItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existingItem
        ? state.cart.cartItems.map((item) =>
            item._id === existingItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return { ...state };
  }
};
export default storeReducer;
