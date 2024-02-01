import { NavBar, Container, Badge, LinkContainer, Link, useLocation, useNavigate, NavDropdown, useContext,  } from "../../imports";
import SearchBox from "./SearchBox";
import { Store } from "../../Store";
import { USER_SIGNOUT } from "../../actions";


const Header = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { cartItems },
  } = state;
  const signoutHandler = () => {
    ctxDispatch({ type: USER_SIGNOUT });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethods");
  };
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header>
      <NavBar bg="dark" variant="dark">
        <Container>
          <Link onClick={() => navigate(-1)}>
            {location.pathname !== "/" && (
              <i className="fa fa-arrow-left text-white align-arrow-right">
                {" "}
                Back
              </i>
            )}
          </Link>
          <LinkContainer to="/">
            <NavBar.Brand>
              <img
                src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695"
                width={80}
                alt="Amazon logo"
              />
            </NavBar.Brand>
          </LinkContainer>
          <SearchBox />
          <nav className="d-flex align-items-center justify-content-end me-2 ms-4">
            <Link to="/cart" className="nav-link">
              <i className="fa fa-shopping-cart text-white"></i>
              {cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
          </nav>
          {userInfo ? (
            <NavDropdown className="text-white" title={userInfo.name}>
              <NavDropdown.Divider />
              <Link
                to="#signout"
                onClick={signoutHandler}
                className="dropdown-item"
              >
                Sign out
              </Link>
            </NavDropdown>
          ) : (
            <Link to="/signin" className="text-white nav-link">
              Sign in
            </Link>
          )}
        </Container>
      </NavBar>
    </header>
  );
};

export default Header;
