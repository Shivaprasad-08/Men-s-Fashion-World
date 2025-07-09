import React from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  cartItemCount, 
  onCartClick, 
  searchTerm, 
  onSearchChange 
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">DAPPER</a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <Menu size={24} />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Shirts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pants</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Suits</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Accessories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sale</a>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <div className="search-bar me-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
                <button className="btn btn-outline-secondary" type="button">
                  <Search size={18} />
                </button>
              </div>
            </div>

            <button className="btn btn-link position-relative me-3" onClick={onCartClick}>
              <ShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </button>

            <button className="btn btn-link">
              <User size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
