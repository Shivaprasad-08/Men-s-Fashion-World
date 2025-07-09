import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart, 
  onProductClick 
}) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card product-card h-100">
        <div className="position-relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="product-image card-img-top"
            style={{ cursor: 'pointer' }}
            onClick={() => onProductClick(product)}
          />
          {product.isNew && (
            <span className="badge bg-success position-absolute top-0 start-0 m-2">New</span>
          )}
          {product.isSale && (
            <span className="badge bg-danger position-absolute top-0 start-0 m-2">Sale</span>
          )}
          <button className="btn btn-light position-absolute top-0 end-0 m-2">
            <Heart size={18} />
          </button>
        </div>
        
        <div className="card-body d-flex flex-column">
          <h5 className="card-title" style={{ cursor: 'pointer' }} onClick={() => onProductClick(product)}>
            {product.name}
          </h5>
          <p className="card-text text-muted flex-grow-1">
            {product.description}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="price">${product.price}</span>
              {product.originalPrice && (
                <span className="text-muted text-decoration-line-through ms-2">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <button 
              className="btn btn-primary"
              onClick={() => onAddToCart(product)}
            >
              <ShoppingCart size={18} className="me-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
