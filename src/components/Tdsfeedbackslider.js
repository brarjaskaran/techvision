import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Tdsfeedbackslider.css";

class Tdsaboutslider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        767: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    };
  }
  render() {
    return (
      <OwlCarousel
        className="feedback-owl owl-theme"
        loop
        margin={30}
        nav={false}
        items="1"
        dots={true}
        lazyLoad={true}
        responsive={this.state.responsive}
      >
        <div className="item">
          <div className="feedback-box">
            <div className="client-info">
              <div className="client-img">
                <img
                  src={require("./../images/client-img4.jpg")}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h5 className="mb-2">Jaskaran Brar</h5>
              <p>Web Developer</p>
            </div>
            <p>
              I am got CCTV and and home theatre installation services by Tech
              Vision. These guys do their job with passion. It's amazing what
              they do.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="feedback-box">
            <div className="client-info">
              <div className="client-img">
                <img
                  src={require("./../images/client-img3.jpg")}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h5 className="mb-2">Latin</h5>
              <p>Property Consultant</p>
            </div>
            <p>
              Security of my home was great concern to me. I had too many
              troubles with my old contractor, after my friend suggestion, I get
              to know about tech vision and I am extremely happy with their
              services.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="feedback-box">
            <div className="client-info">
              <div className="client-img">
                <img
                  src={require("./../images/client-img1.jpg")}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h5 className="mb-2">Jaskaran Brar</h5>
              <p>Web Developer</p>
            </div>
            <p>
              Tech vision provide cost effective and out of the box solution to
              any security related problems. Big thumbs up to the hardworking
              team.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="feedback-box">
            <div className="client-info">
              <div className="client-img">
                <img
                  src={require("./../images/client-img2.jpg")}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h5 className="mb-2">Jagmeet Singh</h5>
              <p>Chef</p>
            </div>
            <p>
              I am a regular customer to Tech vision from last two years. I am
              really happy with their services. Karan is a nice person, he know
              his job and do it well.
            </p>
          </div>
        </div>
      </OwlCarousel>
    );
  }
}

export default Tdsaboutslider;
