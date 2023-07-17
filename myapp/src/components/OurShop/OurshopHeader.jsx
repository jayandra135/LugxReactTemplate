import React from "react";
import backgroundImg from "../../images/banner-bg.jpg";
import { Container, Row, Col } from "react-bootstrap";
const OurshopHeader = () => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImg})` }}
      className="main-banner"
    >
      <Container>
        <Row>
          <Col className="col-lg-12">
            <div className="shoppageheading">
              <h3>Our Shop</h3>
              <span>
                <a href="/ourshop">Home</a> {">"} OurShop
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurshopHeader;
