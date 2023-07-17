import React from "react";
import LeftHeroSectionComp from "./LeftHeroSectionComp";
import RightHeroSectionComp from "./RightHeroSectionComp";
import { Row, Container, Col } from "react-bootstrap";
import "../Home/Home.css";
import backgroundImg from "../../images/banner-bg.jpg";
const HeroSectionComp = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className="main-banner"
      >
        <Container>
          <Row>
            <Col>
              <LeftHeroSectionComp />
            </Col>
            <Col>
              <RightHeroSectionComp />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HeroSectionComp;
