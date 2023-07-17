import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CtaComp = () => {
  return (
    <>
      <section className="cta">
        <Container>
          <Row l>
            <Col lg={5} className="align-self-end">
              <div className="shop">
                <Row>
                  <Col lg={12}>
                    <div className="ctaItem">
                      <h6>Our Shop</h6>
                      <h2>
                        Go pre-order buy & get Best <em>prices</em> For you!
                      </h2>
                      <p>
                        Lorem ipsum dolor consectetur adipiscing, sed do eiusmod
                        tempor incididunt.
                      </p>
                      <div className="main-button">
                        <a href="/home">Shop now</a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={5}>
              <div className="subscribe">
                <Row>
                  <Col lg={12}>
                    <div className="ctaItem">
                      <h6>newsletter</h6>
                      <h2>
                        get Up to $100 off just buy <em>subscribe</em>{" "}
                        newletter!
                      </h2>
                      <form action="#">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="your email.."
                        />
                        <button type="submit" className="ctaformbtn">
                          Subscribe now
                        </button>
                      </form>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CtaComp;
