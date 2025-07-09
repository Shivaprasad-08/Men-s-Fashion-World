import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-4">
              Elevate Your Style
            </h1>
            <p className="lead mb-4">
              Discover premium men's fashion that combines timeless elegance with contemporary style. 
              From business attire to casual wear, find everything you need to look your best.
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-light btn-lg">Shop Now</button>
              <button className="btn btn-outline-light btn-lg">View Collections</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Fashion model" 
                className="img-fluid rounded"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
