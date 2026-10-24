
import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="container-fluid px-3 px-md-4 px-lg-5 py-4 py-md-5 mb-4">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-lg-10 col-xl-9">
          <img
            src="/media/images/homeHero.png"
            alt="XComTrading investment platform"
            className="img-fluid mb-4 mb-md-5"
            style={{ maxHeight: '460px', objectFit: 'contain' }}
          />

          <h1 className="display-5 fw-bold mt-2">
            Invest in everything
          </h1>

          <p className="lead mx-auto hero-description">
            An online platform for exploring stocks, derivatives,
            mutual funds, and more.
          </p>

          <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
            <Link
              to="/signup"
              className="btn btn-primary btn-lg hero-cta"
            >
              Sign up now
            </Link>

            <Link
              to="/products"
              className="btn btn-outline-primary btn-lg hero-cta"
            >
              Explore products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
