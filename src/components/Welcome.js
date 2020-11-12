import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Icofont } from "react-icofont";

export default class Welcome extends Component {
  render() {
    return (
      <div className=" welcome-box grapping">
        <Container>
          <div className="title-box">
            <h2>
              Welcome to <b>Soxolo</b>
            </h2>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>
          <Row>
            <Col xs="12" sm="12" md="4">
              <div className="white-bg wel-box coman-box">
                <Icofont icon="icofont-drag2" />
                <h4>Creative Design</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </Col>
            <Col xs="12" sm="12" md="4">
              <div className="white-bg wel-box coman-box">
                <Icofont icon="icofont-code" />
                <h4>Friendly Codes</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </Col>
            <Col xs="12" sm="12" md="4">
              <div className="white-bg wel-box coman-box">
                <Icofont icon="icofont-live-support" />
                <h4>Fast Support</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
