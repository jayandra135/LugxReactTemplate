import React from "react";
import { Container } from "react-bootstrap";
import ApiTrendingComp from "./ApiTrendingComp";
const TrendingSectionComp = () => {
  return (
    <>
      <section className="trending">
        <Container>
          <div className="trends">
            <h2>Trending</h2>
            <div className="trendGames">
              <h1>Trending Games</h1>
              <button>View All</button>
            </div>
            <ApiTrendingComp />
          </div>
        </Container>
      </section>
    </>
  );
};

export default TrendingSectionComp;
