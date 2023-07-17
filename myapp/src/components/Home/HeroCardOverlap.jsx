import React from "react";
import img1 from "../../images/featured-01.png";
import img2 from "../../images/featured-02.png";
import img3 from "../../images/featured-03.png";
import img4 from "../../images/featured-04.png";
import { Row, Container, Col, Card } from "react-bootstrap";
const HeroCardOverlap = () => {
  const data = [
    { title: "Free Storage", img: img1 },
    { title: "User more", img: img2 },
    { title: "Reply ready", img: img3 },
    { title: "easy layput", img: img4 },
  ];
  console.log(data);
  return (
    <>
      <section className="features">
        <Container>
          <Row md={2} lg={4}>
            {data.map((ele, index) => {
              return (
                <Col key={index}>
                  <Card className="cards">
                    <div className="OverlapImage">
                      <img src={ele.img} alt="" />
                    </div>
                    <h5>{ele.title}</h5>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroCardOverlap;
