import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5>DAPPER</h5>
            <p className="text-muted">
              Premium men's fashion that combines timeless elegance with contemporary style. 
              Quality craftsmanship, exceptional service.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-muted">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Shop</h5>
            <ul className="list-unstyled">
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Shirts</a></li>
              <li><a href="#">Pants</a></li>
              <li><a href="#">Suits</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <Phone size={16} className="me-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <Mail size={16} className="me-2" />
                <span>info@dapper.com</span>
              </li>
              <li className="d-flex align-items-center">
                <MapPin size={16} className="me-2" />
                <span>123 Fashion St, NYC</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-muted mb-0">
              © 2024 DAPPER. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-muted mb-0">
              <a href="#" className="text-muted me-3">Terms of Service</a>
              <a href="#" className="text-muted">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
