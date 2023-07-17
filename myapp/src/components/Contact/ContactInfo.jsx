import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Iframe from "react-iframe";
const ContactInfo = () => {
  const url =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth";
  return (
    <>
      <section className="contact-page">
        <Container>
          <Row>
            <Col>
              <div className="left-text">
                <div className="section-heading">
                  <h6>Contact us</h6>
                  <h2>Say Hello!</h2>
                </div>
                <p>
                  LUGX Gaming Template is based on the latest Bootstrap 5 CSS
                  framework. This template is provided by TemplateMo and it is
                  suitable for your gaming shop ecommerce websites. Feel free to
                  use this for any purpose. Thank you.
                </p>
                <ul>
                  <li>
                    <span>Address</span> Sunny Isles Beach, FL 33160, United
                    States
                  </li>
                  <li>
                    <span>Phone</span> +123 456 7890
                  </li>
                  <li>
                    <span>Email</span> lugx@contact.com
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="right-content">
                <Row>
                  <Col>
                    <div id="map">
                      <Iframe url={url} />
                    </div>
                  </Col>
                  <Col className="col-lg-12">
                    <form id="contact-form" action="" method="post">
                      <Row>
                        <Col className="col-lg-6">
                          <fieldset>
                            <input
                              type="name"
                              name="name"
                              id="name"
                              placeholder="Your Name..."
                              required=""
                            />
                          </fieldset>
                        </Col>
                        <Col className="col-lg-6">
                          <fieldset>
                            <input
                              type="surname"
                              name="surname"
                              id="surname"
                              placeholder="Your Surname..."
                              required=""
                            />
                          </fieldset>
                        </Col>
                        <Col className="col-lg-6">
                          <fieldset>
                            <input
                              type="text"
                              name="email"
                              id="email"
                              pattern="[^ @]*@[^ @]*"
                              placeholder="Your E-mail..."
                              required=""
                            />
                          </fieldset>
                        </Col>
                        <Col className="col-lg-6">
                          <fieldset>
                            <input
                              type="subject"
                              name="subject"
                              id="subject"
                              placeholder="Subject..."
                            />
                          </fieldset>
                        </Col>
                        <Col className="col-lg-12">
                          <fieldset>
                            <textarea
                              name="message"
                              id="message"
                              placeholder="Your Message"
                            ></textarea>
                          </fieldset>
                        </Col>
                        <Col className="col-lg-12">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              className="orange-button"
                            >
                              Send Message Now
                            </button>
                          </fieldset>
                        </Col>
                      </Row>
                    </form>
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

export default ContactInfo;
