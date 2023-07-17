import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import profile1 from "../../images/trendingImg/trending-01.jpg";
import profile2 from "../../images/trendingImg/trending-02.jpg";
import profile3 from "../../images/trendingImg/trending-03.jpg";
import profile4 from "../../images/trendingImg/trending-04.jpg";
import baghandle from "../../images/trendingImg/shopbag.png";
import ApiComponent from "../ApiComp/ApiComponent";
const ApiTrendingComp = () => {
  const gamesCard = [
    {
      title: "Action",
      Name: "Assian creed",
      price: 20,
      profile: profile1,
      shopImg: baghandle,
    },
    {
      title: "Action",
      Name: "Assian creed",
      price: 44,
      profile: profile2,
      shopImg: baghandle,
    },
    {
      title: "Action",
      Name: "Assian creed",
      price: 55,
      profile: profile3,
      shopImg: baghandle,
    },
    {
      title: "Action",
      Name: "Assian creed",
      price: 32,
      profile: profile4,
      shopImg: baghandle,
    },
  ];

  return (
    <Row className="apiRow">
      {gamesCard.map((ele, index) => {
        return (
          <Col key={index}>
            <Card className="item">
              <div className="trendProfile">
                <img src={ele.profile} alt="" />
                <span>${ele.price}</span>
              </div>
              <Card.Body className="downContent">
                <span>{ele.title}</span>
                <div>
                  <h3>{ele.Name}</h3>
                  <span>
                    <img src={ele.shopImg} alt="" />
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ApiTrendingComp;
