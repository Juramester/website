import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <div>
                <h1 className="mb-2 text-white">Furnite Web Site</h1>
              </div>
            </div>
            <p className="footer_text mb-2">
              This is your own custom furniture website where it is possible to
              display the furniture in the environment of your own home with the
              help of an AR app and a qr code.
            </p>
          </Col>
          <Col lg="3">
            <div className="footer_quick_links">
              <h4 className="quick_links_title mb-1 text-white">
                Top Categories
              </h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Category: Chair</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Category: Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Category: Table</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer_quick_links">
              <h4 className="quick_links_title mb-1 text-white ">
                Useful Links
              </h4>
              <ListGroup className="footer_useful_links mb-3">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                  <i class="ri-luggage-deposit-line"></i>
                  </span>
                  <p>
                    <Link to="/shop">Furnitures</Link>
                  </p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-qr-code-line"></i>
                  </span>
                  <p>
                    <Link to="/qrcodes">Qrcodes</Link>
                  </p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-login-box-line"></i>
                  </span>
                  <p>
                    <Link to="/login">Login</Link>
                  </p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-check-double-fill"></i>
                  </span>
                  <p>
                    <Link to="#">Privacy Policy</Link>
                  </p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer_quick_links">
              <h4 className="quick_links_title text-white">Contact</h4>
              <ListGroup className="footer_contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-2-fill"></i>
                  </span>
                  <p>9400 Sopron </p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>067615483</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>dsasdg@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer_copyright">
              <i class="ri-copyright-line"></i>
              Copyright {year} developed by Akos Jurasits. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
