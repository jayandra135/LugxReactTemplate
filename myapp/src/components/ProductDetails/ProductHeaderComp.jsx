import React from "react";
import backgroundImg from "../../images/banner-bg.jpg";
import { Container, Row, Col } from "react-bootstrap";
const ProductHeaderComp = () => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImg})` }}
      className="main-banner"
    >
      <Container>
        <Row>
          <Col>
            <div className="productHeading">
              <h3>Modern Warfare® II</h3>
              <span>
                <a href="/home">Home</a> {">"}
                <a href="/ourshop">shop</a>
                {">"}Assian Creed
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductHeaderComp;
