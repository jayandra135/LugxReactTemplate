import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Profile from "../../images/ProductDetailImg/single-game.jpg";
const ProductInfoComp = () => {
  return (
    <>
      <section className="single-product">
        <Container>
          <Row>
            <Col>
              <div className="left-image">
                <img src={Profile} alt="" />
              </div>
            </Col>
            <Col>
              <div>
                <h4>Call of Duty®: Modern Warfare® II</h4>
                <span className="price">
                  <em>$28</em> $22
                </span>
                <p>
                  LUGX Gaming Template is based on the latest Bootstrap 5 CSS
                  framework. This template is provided by TemplateMo and it is
                  suitable for your gaming shop ecommerce websites. Feel free to
                  use this for any purpose. Thank you.
                </p>
                <form action="#">
                  <input type="qty" className="form-control" placeholder="1" />
                  <button type="submit">
                    <i className="fa fa-shopping-bag"></i> ADD TO CART
                  </button>
                </form>
                <ul>
                  <li>
                    <span>Game ID:</span> COD MMII
                  </li>
                  <li>
                    <span>Genre:</span> <a href="/">Action</a>,{" "}
                    <a href="/">Team</a>, <a href="/">Single</a>
                  </li>
                  <li>
                    <span>Multi-tags:</span> <a href="/">War</a>,{" "}
                    <a href="/">Battle</a>, <a href="/">Royal</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductInfoComp;
