import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import profile1 from "../../images/trendingImg/trending-01.jpg";
import profile2 from "../../images/trendingImg/trending-02.jpg";
import profile3 from "../../images/trendingImg/trending-03.jpg";
import profile4 from "../../images/trendingImg/trending-04.jpg";
import baghandle from "../../images/trendingImg/shopbag.png";

import DataContext from "../ApiComp/DataContext";

const TopGameComp = () => {
  const jsonData = useContext(DataContext);
  console.log(jsonData);
  const gamesCard = [
    {
      title: "Action",
      Name: "Assian creed",
      price: 20,
      profile: profile1,
      shopImg: baghandle,
      Explore: "Explore",
    },
    {
      title: "Action",
      Name: "Assian creed",
      price: 44,
      profile: profile2,
      shopImg: baghandle,
      Explore: "Explore",
    },
    {
      title: "Action",
      Name: "Assian creed",
      price: 55,
      profile: profile3,
      shopImg: baghandle,
      Explore: "Explore",
    },
    {
      title: "Action",
      Name: "Assian creed",
      price: 32,
      profile: profile4,
      shopImg: baghandle,
      Explore: "Explore",
    },
    {
      title: "Action",
      Name: "Assian creed",
      price: 32,
      profile: profile4,
      shopImg: baghandle,
      Explore: "Explore",
    },
    {
      title: "Action",
      Name: "Assian creed",
      price: 32,
      profile: profile4,
      shopImg: baghandle,
      Explore: "Explore",
    },
  ];
  return (
    <>
      <section className="topGames">
        <Container>
          <div className="mostplayed">
            <h2>Top Games</h2>
            <div className="trendGames">
              <h1>Most Played</h1>
              <button>View All</button>
            </div>
            <Row>
              {gamesCard.map((ele, index) => {
                return (
                  <Col key={index}>
                    <Card className="topCarditem">
                      <div className="trendProfile">
                        <img src={ele.profile} alt="" />
                        <span>${ele.price}</span>
                      </div>
                      <Card.Body className="downContent">
                        <span>{ele.title}</span>
                        <h3>{ele.Name}</h3>
                        <div>
                          <button>{ele.Explore}</button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TopGameComp;
