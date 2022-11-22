import React, { useState, useRef} from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import furnitures from "../assets/data/furnitures";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/furniture-details.css";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const FurnitureDetails = () => {
  const [tab, setTab] = useState("desc");

  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const [rating, setRating] = useState(null);

  const furniture = furnitures.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
  } = furniture;

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    console.log(reviewObj);
    toast.success("Submitted");
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        imgage: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Added successfully");
  };

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <div className="furniture_details">
                <h2>{productName}</h2>
                <div className="furniture-rating d-flex allign-items-center gap-5 mb-4">
                  <div>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-line"></i>
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className="furniture_price">{price}€</span>
                </div>

                <p className="mt-3">{shortDesc}</p>

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="my_btn"
                  onClick={addToCart}
                >
                  <i class="ri-shopping-cart-2-fill "></i> Furniture Purchase
                </motion.button>
                <Link to="/furnitures">
                  <motion.button whileTap={{scale:1.2}} className="my_btn d-flex  mt-3">
                    <i class="ri-arrow-go-back-line"></i>
                    Continue Shoping
                  </motion.button>
                </Link>
              </div>
            </Col>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab_wrapper d-flex align-item-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active_tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active_tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab_content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="furniture_review mt-5">
                  <div className="review_wrapper">
                    <ul>
                      {reviews.map((item, index, comment) => (
                        <li key={index} className="mb-4">
                          <h6>{item.comment}</h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="review_form">
                      <h4>Leave your comment</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form_group">
                          <input
                            type="text"
                            placeholder="Enter name"
                            ref={reviewUser}
                            required
                          />
                        </div>
                        <div
                          className="form_group d-flex align-items-center 
                        gap-5 rating_group"
                        >
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1 <i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2 <i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3 <i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4 <i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5 <i class="ri-star-s-fill"></i>
                          </motion.span>
                        </div>
                        <div className="form_group">
                          <textarea
                            ref={reviewMsg}
                            row={4}
                            type="text"
                            placeholder="Review Message..."
                            required
                          />
                        </div>
                        <motion.button
                          whileTap={{ scale: 1.3 }}
                          type="submit"
                          className="my_btn"
                        >
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FurnitureDetails;
