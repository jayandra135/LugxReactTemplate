import React from "react";
import backgroundImg from "../../images/banner-bg.jpg";
import { Container, Row, Col } from "react-bootstrap";
const ContactHeader = () => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImg})` }}
      className="main-banner"
    >
      <Container>
        <Row>
          <Col className="col-lg-12">
            <div className="pageHeading">
              <h3>Contact Us</h3>
              <span>
                <a href="/">Home</a> {">"}
                Contact Us
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactHeader;
