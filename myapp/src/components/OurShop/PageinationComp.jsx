import React from "react";
import { Row, Col } from "react-bootstrap";
const PageinationComp = () => {
  return (
    <>
      <Row>
        <Col>
          <div>
            <ul className="pagination">
              <li>
                <a href="/ourshop"> {"<"}</a>
              </li>
              <li>
                <a href="/ourshop"> {"1"}</a>
              </li>
              <li>
                <a href="/ourshop" className="is_active">
                  {"2"}
                </a>
              </li>
              <li>
                <a href="/ourshop"> {"3"}</a>
              </li>
              <li>
                <a href="/ourshop"> {">"}</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default PageinationComp;
