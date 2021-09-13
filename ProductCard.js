import React from 'react';
import DefaultProductImage from 'components/DefaultProductImage';


const ProductCard = (props) => {
    const { product } = props;

    const {
        name,
        price,
        productImageUrl,
    } = product;

    return (
        <div className="product-card-container">
            <div className="product-card-image">
                {productImageUrl != null ?
                    (<img src={productImageUrl}/>)
                    :
                    <DefaultProductImage />
                }
            </div>
            <div className="product-card-details">
                <div className="product-card-name">{name}</div>
                <div className="product-card-price">${price.toFixed(2)}</div>
            </div>
        </div>
    )
};

export default ProductCard;
