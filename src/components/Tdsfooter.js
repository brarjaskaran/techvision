import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./Tdsfooter.css";

class Tdsfooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer>
        <Container>
          <Row className="align-items-center">
            <Col md="6">
              <p>Copyright @ 2021 Tech Vision. All rights reserved</p>
            </Col>
            <Col md="6">
              <p>
                Website by:{" "}
                <a href="https://www.linkedin.com/in/jaskaran-brar-605992b9/">
                  {" "}
                  Jas Brar
                </a>

              </p>
            </Col>
            {/* <Col>
              <ListGroup className="footer-menu">
                <ListGroupItem tag="a" href="#">
                  {" "}
                  Terms & Conditions
                </ListGroupItem>
                <ListGroupItem tag="a" href="#">
                  {" "}
                  Privacy Policy
                </ListGroupItem>
              </ListGroup>
            </Col> */}
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Tdsfooter;
