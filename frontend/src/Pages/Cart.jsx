import { useContext, Row, Col, axios, toast, useNavigate } from "../imports.js";
import { getError } from "../utils.jsx";
import Title from "../Components/Shared/Title.jsx";
import { PRODUCT_ADD, PRODUCT_REMOVE } from "../actions.jsx";
import { Store } from "../Store";
import ItemsInCart from "../Components/CartPage/ItemsInCart.jsx";
import Checkout from "../Components/CartPage/Checkout.jsx";

const Cart = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems } = cart;
  const navigate = useNavigate();

  const updateCartHandler = async (product, quantity) => {
    try {
      const { data } = await axios.get(`/api/v1/products/${product._id}`);

      if (data.countInStock < quantity) {
        alert("Sorry, product is out of stock");
        return;
      }
      ctxDispatch({
        type: PRODUCT_ADD,
        payload: { ...product, quantity },
      });
    } catch (error) {
      toast.error(getError(error));
    }
  };
  const removeProductHandler = async (product) => {
    ctxDispatch({ type: PRODUCT_REMOVE, payload: product });
  };
  const checkoutHandler = async () => {
    navigate("/signin?redirect=/shipping");
  };
  return (
    <div>
      <Title title={"Shopping Cart"}></Title>
      <Row>
        <Col md={8}>
          <ItemsInCart
            cartItems={cartItems}
            updateCartHandler={updateCartHandler}
            removeProductHandler={removeProductHandler}
          />
        </Col>
        <Col md={4}>
          <Checkout cartItems={cartItems} checkoutHandler={checkoutHandler} />
        </Col>
      </Row>
    </div>
  );
};

export default Cart;