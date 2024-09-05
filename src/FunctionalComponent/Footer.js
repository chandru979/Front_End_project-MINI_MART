import React from "react";
import "../styles/Footer.css"
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-5">
      <footer className="footer-container text-center text-lg-start text-muted ">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom justify-change">
          <div className="me-5 d-none d-lg-block">
            <span style={{ color: "white" }}>
              Get connected with us on social networks:
            </span>
          </div>

          <Link to="" className="me-4 text-reset position-change">
            <i className="fab fa-google" style={{ color: "gold" }}></i>
          </Link>
          <Link to="" className="me-4 text-reset">
            <i className="fab fa-instagram" style={{ color: "gold" }}></i>
          </Link>
        </section>

        <section className="footer-container-2">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>MINI MART
                </h6>
                <p>
                  Hi Guys! This is our new website for our shop. If you have any
                  queries about it contact us.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <Link to="#!" className="text-reset">
                    Groceries
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    Skin Care
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    Home Essentials
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    Instant Food
                  </Link>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <p>
                  <Link to="#!" className="text-reset">
                    Pricing
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    Orders
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    Help
                  </Link>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Kazhipattir, No.3
                  NeelKamal Apartments
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  minimart@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 91 9874563210
                </p>
              </div>
            </div>
          </div>
        </section>

      </footer>
    </div>
  );
}

export default Footer;
