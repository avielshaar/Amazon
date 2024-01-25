import { useContext, useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Store } from "../Store.jsx";
import axios from "axios";
import descriptionReducer from "../Reducers/descriptionReducer.jsx";
import { GET_FAIL, GET_REQUEST, GET_SUCCESS } from "../actions";
import { getError } from "../utils";

const initialState = { loading: true, error: "", data: [] };

const Description = () => {
    const [{ loading, error, data }, dispatch] = useReducer(
        descriptionReducer,
        initialState
      );
  const params = useParams();
  const { token } = params;
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems } = cart;
  useEffect(() => {
    const getProduct = async () => {
        dispatch({type: GET_REQUEST})
        try {
            const {data} = await axios.get(`/api/v1/products/token/${token}`);
            dispatch({type: GET_SUCCESS, payload: data});
        } catch (error) {
            dispatch({type: GET_FAIL, payload: getError(error)});
        }
    }
    getProduct();
  }, [token])

  return <div>Description</div>;
};

export default Description;
