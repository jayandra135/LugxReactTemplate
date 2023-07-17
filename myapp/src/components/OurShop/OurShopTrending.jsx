import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ApiTrendingComp from "../Home/ApiTrendingComp";
import PageinationComp from "./PageinationComp";

const OurShopTrending = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <ul className="trending-filter">
              <li>
                <a href="/" className="is_active">
                  Show All
                </a>
              </li>
              <li>
                <a href="/ourshop">Adventure</a>
              </li>
              <li>
                <a href="/ourshop">Startegy</a>
              </li>
              <li>
                <a href="/ourshop">Racing</a>
              </li>
            </ul>
          </Col>
        </Row>
        <ApiTrendingComp />
        <ApiTrendingComp />
        <ApiTrendingComp />
        <PageinationComp />
      </Container>
    </section>
  );
};

export default OurShopTrending;
