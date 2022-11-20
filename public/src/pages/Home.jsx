import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/furnitures";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import Clock from "../components/UI/Clock";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/home-img.jpg";

import Services from "../services/Services";
import FurnituresList from "../components/UI/FurnituresList";

import counterImg from "../assets/images/counter-timer-img.png";

const Home = () => {
  const [trendingFurnitures, setTrendingFurnitures] = useState([]);
  const [bestsalesFurnitures, setbestsalesFurnitures] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredtrendingFurnitures = products.filter(
      (item) => item.category === "bed"
    );
    const filteredbestsalesFurnitures = products.filter(
      (item) => item.category === "table"
    );

    setTrendingFurnitures(filteredtrendingFurnitures);
    setbestsalesFurnitures(filteredbestsalesFurnitures);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="5" md="5">
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="5" md="5">
              <div className="hero_content">
                <p className="hero_subtitle">Trending Furniture in {year}</p>
                <h2>Make your home more beautiful and comfortable!</h2>
                <p>
                  {" "}
                  This is your own custom furniture website where it is possible
                  to display the furniture in the environment of your own home
                  with the help of an AR app and a qr code.
                </p>
                <Link to="/shop">
                  <motion.button whileTap={{ scale: 1.2 }} className="my_btn">
                    Go to furnitures
                  </motion.button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Furnitures</h2>
            </Col>
            <FurnituresList data={trendingFurnitures} />
          </Row>
        </Container>
      </section>
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Sales Furnitures</h2>
            </Col>
            <FurnituresList data={bestsalesFurnitures} />
          </Row>
        </Container>
      </section>
      <Services />
      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count_down-col">
              <div className="clock-top-content">
                <h4 className="text-white fs-4 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <Link to="/shop">
                <motion.button
                  whileTap={{ scale: 1.3 }}
                  className="buy_btn store_btn"
                >
                  {" "}
                  Visit Store
                </motion.button>
              </Link>
            </Col>

            <Col lg="6" md="12" className="text-end counter_img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
