import React from "react";
import { motion } from "framer-motion";
import "../../styles/furniture-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

import { toast } from "react-toastify";

const FurnitureCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success("Furniture added successfully!");
  };

  return (
    <Col lg="3" md="4" className="furniture_container mb-2">
      <div className="furniture_item">
        <div className="furniture_img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>
        <div className="p-2 furniture_info">
          <h3 className="furniture_name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="furniture_card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">{item.price}€</span>
          <motion.span whileTap={{ scale: 1.5 }} onClick={addToCart}>
            <i class="ri-add-line"></i>
          </motion.span>
          
        </div>
      </div>
    </Col>
  );
};

export default FurnitureCard;
