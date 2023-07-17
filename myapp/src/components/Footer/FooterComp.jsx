import React from "react";
import { Container, Col } from "react-bootstrap";
import "../Footer/Footer.css";

const FooterComp = () => {
  return (
    <>
      <footer>
        <Container>
          <Col lg={12}>
            <p>
              Copyright © 2048 LUGX Gaming Company. All rights reserved. Design:
              TemplateMo
            </p>
          </Col>
        </Container>
      </footer>
    </>
  );
};

export default FooterComp;
