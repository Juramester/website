import React from "react";
import { motion } from "framer-motion";
import "../../styles/furniture-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";



const QrcodeCard = ({ item }) => {
  return (
    <Col lg="2" md="2" className="card">
      <div className="p-2 furniture_info">
        <h3 className="furniture_name">
          <Link to={`/shop/${item.id}`}>{item.productName}
          </Link>
        </h3>
        <i class="ri-arrow-up-line"></i>Click for more
      </div>
      <div className="furniture_item">
        <div className="furniture_img ">
          <motion.img whileHover={{ scale: 0.9 }} src={item.qrcodeUrl} alt="" />
        </div>
        <div className="furniture_card-bottom d-flex align-items-center justify-content-between p-2">
            Qr Code model:
          <motion.img whileHover={{ scale: 0.9 }} src={item.model} alt="" />
        </div>
      </div>
    </Col>
  );
};

export default QrcodeCard;
