import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import profile1 from "../../images/categories/categories-01.jpg";
import profile2 from "../../images/categories/categories-05.jpg";
import profile3 from "../../images/categories/categories-03.jpg";
import profile4 from "../../images/categories/categories-04.jpg";

const CategoryComp = () => {
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
  ];
  return (
    <>
      <section className="categories">
        <Container>
          <div className="CatHeader">
            <h3>categories</h3>
            <h2>Top categories</h2>
          </div>

          <Row>
            {data.map((ele, index) => {
              return (
                <Col key={index}>
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
        </Container>
      </section>
    </>
  );
};

export default CategoryComp;
