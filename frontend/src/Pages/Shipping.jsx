import { useContext,useEffect,useNavigate,Container,Form,Button} from "../imports.js";
import { Store } from "../Store";
import Title from "../Components/Shared/Title";
import CheckoutSteps from "../Components/Shared/CheckoutSteps";
import { SAVE_SHIPPING_ADDRESS } from "../actions.jsx";

const Shipping = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { cartItems },
  } = state;
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
    if (!userInfo) {
      navigate("/signin?redirect=/shipping");
    }
  }, [cartItems.length, navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    ctxDispatch({type: SAVE_SHIPPING_ADDRESS, payload: data})
    navigate("/payment")
  };

  return (
    <div>
      <Title title="Shipping Details"></Title>
      <CheckoutSteps step1 step2 />
      <Container className="small-container">
        <h1>Shipping address</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Full name: </Form.Label>
            <Form.Control name="fullName" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Address: </Form.Label>
            <Form.Control name="address" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City: </Form.Label>
            <Form.Control name="city" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Postal code: : </Form.Label>
            <Form.Control name="postalCode" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Country: </Form.Label>
            <Form.Control name="country" required />
          </Form.Group>
          <div className="mb-3">
            <Button variant="primary" type="submit">Continue</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Shipping;
