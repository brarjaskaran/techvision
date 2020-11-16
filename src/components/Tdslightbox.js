import React, { Component } from "react";
import { render } from "react-dom";
import { Row, Col } from "reactstrap";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./Tdslightbox.css";

const images = [
  {
    src: require("./../images/portfolio-img1.jpg"),
    title: "Security Alarm Installation",
    description: "description",
  },
  {
    src: require("./../images/portfolio-img2.jpg"),
    title: "Intercom Installation at premises",
    description: "description",
  },
  {
    src: require("./../images/portfolio-img3.jpg"),
    title: "TV antenna Installation",
    description: "description",
  },
  {
    src: require("./../images/portfolio-img4.jpg"),
    title: "CCTV Installation",
    description: "description",
  },
  {
    src: require("./../images/portfolio-img5.jpg"),
    title: "Intercom Installed at premises",
    description: "Intercom Installed at premises",
  },
  {
    src: require("./../images/portfolio-img6.jpg"),
    title: "TV Mount",
    description: "description",
  },
];

class Tdslightbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;

    let names = ["wood", "sun"];
    let image_array = images.map((image, key) => {
      return (
        <Col sm="6" md="4" key={key}>
          <div className="portfolio-box">
            <div className="portfolio-img">
              <img
                src={image.src}
                alt=""
                className="img-fluid"
                onClick={() => this.setState({ isOpen: true, photoIndex: key })}
                width="350px"
                height="261px"
              />
            </div>
            <h5 className="mt-3"> {image.title} </h5>
          </div>
        </Col>
      );
    });

    return (
      <div>
        <Row>{image_array}</Row>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]["src"]}
            nextSrc={images[(photoIndex + 1) % images.length]["src"]}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length]["src"]
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

export default Tdslightbox;
