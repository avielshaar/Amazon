import { ListGroup, PropTypes } from "../../imports";

const ProductDescription = ({ title, rating, price, description }) => {
  return <ListGroup></ListGroup>;
};
ProductDescription.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.object,
  price: PropTypes.number,
  description: PropTypes.string,
};
export default ProductDescription;
