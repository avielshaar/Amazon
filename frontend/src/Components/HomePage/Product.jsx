import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

const Product = ({product}) => {
  return (
    <Card>
        <Link to={`/product/${product.token}`}>
            <Card.Img variant='top' src={product.image} alt={product.title}/>
        </Link>
        <Card.Body className='card-body'>
            <Link to={`/product/${product.token}`}>
                <Card.Title>{product.title}</Card.Title>
            </Link>
            
        </Card.Body>
    </Card>
  )
}

Product.propTypes = {product: PropTypes.object}
export default Product