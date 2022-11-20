import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row} from "reactstrap";
import { useState } from "react";


import QrcodesList from "../components/UI/QrcodesList";
import "../styles/furnitures.css";
import qrcodes from "../assets/data/qrcodes";

const Qrcodes = () => {
 
  const [qrcodeData, setQrcodeData] = useState(qrcodes);
  return (
    <Helmet title="Qrcodes">
      <CommonSection title="QR Codes" />
      <section>
        <Container className="pt-0">
          <Row>
            <QrcodesList data={qrcodes} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Qrcodes;
