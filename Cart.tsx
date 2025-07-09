import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
  color: string;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem 
}) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="offcanvas offcanvas-end show" tabIndex={-1} style={{ visibility: 'visible' }}>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">
          <ShoppingBag size={24} className="me-2" />
          Shopping Cart ({items.length})
        </h5>
        <button type="button" className="btn-close" onClick={onClose}></button>
      </div>
      
      <div className="offcanvas-body">
        {items.length === 0 ? (
          <div className="text-center py-5">
            <ShoppingBag size={48} className="text-muted mb-3" />
            <p className="text-muted">Your cart is empty</p>
            <button className="btn btn-primary" onClick={onClose}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <div key={`${item.id}-${item.size}-${item.color}`} className="cart-item">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="col-6">
                      <h6 className="mb-1">{item.name}</h6>
                      <small className="text-muted">
                        Size: {item.size}, Color: {item.color}
                      </small>
                      <div className="d-flex align-items-center mt-2">
                        <button 
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button 
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    <div className="col-3 text-end">
                      <div className="fw-semibold mb-2">${item.price}</div>
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <X size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-total">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="d-flex justify-content-between fw-bold h5">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="btn btn-primary w-100 btn-lg mt-3">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
