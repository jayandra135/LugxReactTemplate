import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import profile1 from "../../images/categories/categories-01.jpg";
import profile2 from "../../images/categories/categories-05.jpg";
import profile3 from "../../images/categories/categories-03.jpg";
import profile4 from "../../images/categories/categories-04.jpg";

const ActionGamesComp = () => {
  const data = [
    {
      title: "Action",
      profile: profile1,
    },
    {
      title: "Action",
      profile: profile2,
    },
    {
      title: "Action",
      profile: profile3,
    },
    {
      title: "Action",
      profile: profile4,
    },
    {
      title: "Action",
      profile: profile4,
    },
  ];
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col className="col-lg-6">
              <div className="section-heading">
                <h6>Action</h6>
                <h2>Related games</h2>
              </div>
            </Col>
            <Col className="col-lg-6">
              <div className="main-button">
                <a href="shop.html">View All</a>
              </div>
            </Col>
            <Row className="apiRow">
              {data.map((ele, index) => {
                return (
                  <Col key={index} className="col-lg">
                    <Card className="CatItem">
                      <h2>{ele.title}</h2>
                      <div className="thumb">
                        <img src={ele.profile} alt="" />
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ActionGamesComp;
