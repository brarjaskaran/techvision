/**
 * Entry application component used to compose providers and render Routes.
 * */
import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Media,
  Card,
  CardImg,
  CardText,
  Form,
  FormGroup,
  Input,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
// Web Icon fonts
import Icofont from "react-icofont";
// Web theme color root css
import "./components/colors.css";
import Tdsheader from "./components/Tdsheader";
import Tdsbanner from "./components/Tdsbanner";
import Tdsinputgroup from "./components/Tdsinputgroup";
import Tdsaboutslider from "./components/Tdsaboutslider";
import Tdsfeedbackslider from "./components/Tdsfeedbackslider";
import Tdslightbox from "./components/Tdslightbox";
import Tdspricingtable from "./components/Tdspricingtable";
import Tdsfooter from "./components/Tdsfooter";
import "./App.css";
import "./responsive.css";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Navbar  */}
        <Tdsheader />

        {/* Hero Section Start */}
        <div id="home" className="section">
          <Tdsbanner />
        </div>
        {/* Subscribe Section Start*/}
        {/* <div className=" subscribe-box grapping">
          <Container>
            <Row className="align-items-center">
              <Col xs="12" md="12" lg="8" className="text-left">
                <h4 className="text-white">
                  {" "}
                  Join the Soxolo! Sign up for the latest updates and news.
                </h4>
              </Col>
              <Col xs="12" md="12" lg="4">
                <Tdsinputgroup />
              </Col>
            </Row>
          </Container>
        </div> */}
        {/* Welcome Section Start */}
        <div className=" welcome-box grapping">
          <Container>
            <div className="title-box">
              <h2>
                Welcome to <b>Tech Vision</b>
              </h2>
              <p>
                Get a Free Risk Assessment of your home by Our Security Expert.
              </p>{" "}
              <Media body>
                <Media heading>Dial</Media>
                <a href="tel:+61 415 174 120"> +61 415 174 120</a> <br />
              </Media>{" "}
            </div>
            {/* <Row>
              <Col xs="12" sm="12" md="4">
                <div className="white-bg wel-box coman-box">
                  <Icofont icon="icofont-drag2" />
                  <h4>Creative Design</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </Col>
              <Col xs="12" sm="12" md="4">
                <div className="white-bg wel-box coman-box">
                  <Icofont icon="icofont-code" />
                  <h4>Friendly Codes</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </Col>
              <Col xs="12" sm="12" md="4">
                <div className="white-bg wel-box coman-box">
                  <Icofont icon="icofont-live-support" />
                  <h4>Fast Support</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </Col>
            </Row> */}
          </Container>
        </div>
        {/* About us Section Start */}
        <div className="section about-box grapping" id="about">
          <Container>
            <Row>
              <Col xs="12" sm="12" md="12" lg="6">
                <div className="about-img">
                  <img
                    src={require("./images/aboutus.jpg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col xs="12" sm="12" md="12" lg="6">
                <Tdsaboutslider />
              </Col>
            </Row>
          </Container>
        </div>
        {/* Our Services Section Start */}
        <div className="section ourservice grapping" id="services">
          <Container>
            <div className="title-box">
              <h2>
                Our <b>Services</b>
              </h2>
            </div>
            <Row>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="white-bg coman-box ourservice-box">
                  <Icofont
                    icon="icofont-alarm"
                    style={{ color: "var(--orange)" }}
                  />
                  <h4>Home Alarm System installation</h4>
                  <p>Time needed to complete task: 3 hours 30 minutes</p>
                </div>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="white-bg coman-box ourservice-box">
                  <Icofont
                    icon="icofont-ui-alarm"
                    style={{ color: "var(--orange)" }}
                  />
                  <h4>Intercom doorbell installation</h4>
                  <p>
                    We have a variety of intercom system for installation. Range
                    from Hikvision, Dahua etc.
                  </p>
                </div>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="white-bg coman-box ourservice-box">
                  <Icofont
                    icon="icofont-crown"
                    style={{ color: "var(--orange)" }}
                  />
                  <h4>Home theatre installation</h4>
                  <p>
                    Home theatre installations and packages are also available
                    with us. We install costmised home theatre, installation of
                    projectors, screen with Dolby atmos, in wall speaker of
                    brands like Klipch, Bose, JBL etc.
                  </p>
                </div>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="white-bg coman-box ourservice-box">
                  <Icofont
                    icon="icofont-satellite"
                    style={{ color: "var(--orange)" }}
                  />
                  <h4>TV Antenna installation FTA</h4>
                  <p>
                    We do antenna installations and service the existing
                    antennas and we can also provide additional antenna tv
                    points.
                  </p>
                </div>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="white-bg coman-box ourservice-box">
                  <Icofont
                    icon="icofont-computer"
                    style={{ color: "var(--orange)" }}
                  />
                  <h4>TV wall mount</h4>
                  <p>
                    We do a variety of TV wall mounts, Fixed, extended,full
                    motion etc
                  </p>
                </div>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="white-bg coman-box ourservice-box">
                  <Icofont
                    icon="icofont-camera-alt"
                    style={{ color: "var(--orange)" }}
                  />
                  <h4>CCTV camera installation</h4>
                  <p>
                    We have a variety of CCTV, camera packages. For both
                    comercial and residential sites.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Team Section Start */}
        {/* <div className="section expert-team grapping" id="team">
          <Container>
            <div className="title-box">
              <h2>
                Expert <b>Team</b>
              </h2>
              <p>
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book
              </p>
            </div>
            <Row>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="text-center coman-box team-box">
                  <div className="team-img">
                    <img
                      src={require("./images/team-img1.jpg")}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <h4 className="text-white">Lucy Smith</h4>
                  <p className="text-white">
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book
                  </p>
                  <ListGroup className="social-icon-team">
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-facebook" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-twitter" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-instagram" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-linkedin" />
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="text-center coman-box team-box">
                  <div className="team-img">
                    <img
                      src={require("./images/team-img2.jpg")}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <h4 className="text-white">Alex Maxwel</h4>
                  <p className="text-white">
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book
                  </p>
                  <ListGroup className="social-icon-team">
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-facebook" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-twitter" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-instagram" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-linkedin" />
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="text-center coman-box team-box">
                  <div className="team-img">
                    <img
                      src={require("./images/team-img3.jpg")}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <h4 className="text-white">Steven Doe</h4>
                  <p className="text-white">
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book
                  </p>
                  <ListGroup className="social-icon-team">
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-facebook" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-twitter" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-instagram" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-linkedin" />
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
              <Col xs="12" sm="6" md="6" lg="3">
                <div className="text-center coman-box team-box">
                  <div className="team-img">
                    <img
                      src={require("./images/team-img4.jpg")}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <h4 className="text-white"> Maxwel Doe </h4>
                  <p className="text-white">
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book
                  </p>
                  <ListGroup className="social-icon-team">
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-facebook" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-twitter" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-instagram" />
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      {" "}
                      <Icofont icon="icofont-linkedin" />
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </Container>
        </div> */}
        {/* Portfolio Section Start*/}
        <div className="section ourportfolio grapping" id="portfolio">
          <Container>
            <div className="title-box">
              <h2>
                Recent <b>Jobs</b>
              </h2>
              <p>
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book
              </p>
            </div>
            <Tdslightbox></Tdslightbox>
          </Container>
        </div>
        {/* Marketing Section Start*/}
        {/* <div className="marketing-section grapping">
          <Container>
            <Row className="align-items-center">
              <Col xs="12" sm="12" md="12" lg="6">
                <div className="marketing-img">
                  <img
                    src={require("./images/digitalmarketing.jpg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col xs="12" sm="12" md="12" lg="6">
                <Media className="markrt-box">
                  <Media left href="#">
                    <Icofont icon="icofont-web" />
                  </Media>
                  <Media body>
                    <Media heading>Fully Responsive</Media>
                    Consectetur, adipisci velit, sed quia non numquam eius modi
                    tempora incidunt ut labore aliquam quaerat voluptatem.
                  </Media>
                </Media>
                <Media className="markrt-box">
                  <Media left href="#">
                    <Icofont icon="icofont-chart-pie" />
                  </Media>
                  <Media body>
                    <Media heading>Digital Marketing</Media>
                    Consectetur, adipisci velit, sed quia non numquam eius modi
                    tempora incidunt ut labore aliquam quaerat voluptatem.
                  </Media>
                </Media>
                <Media className="markrt-box">
                  <Media left href="#">
                    <Icofont icon="icofont-brand-designfloat" />
                  </Media>
                  <Media body>
                    <Media heading>Clean & Unique Design</Media>
                    Consectetur, adipisci velit, sed quia non numquam eius modi
                    tempora incidunt ut labore aliquam quaerat voluptatem.
                  </Media>
                </Media>
              </Col>
            </Row>
          </Container>
        </div> */}
        {/* Expert Feadback Section Start */}
        <div className="expertfeesback grapping">
          <Container>
            <div className="title-box">
              <h2>
                <b>Feadback</b>
              </h2>
            </div>
            <Tdsfeedbackslider></Tdsfeedbackslider>
          </Container>
        </div>
        {/* Our  Pricing Section Start*/}
        <div className="section ourlatest-pricing grapping" id="price">
          <Container>
            <div className="title-box">
              <h2>
                Our Latest <b>Pricing</b>
              </h2>
            </div>
            <Tdspricingtable></Tdspricingtable>
          </Container>
        </div>
        {/*Our Latest News  Section Start*/}
        {/* <div className="section latestnews grapping" id="blog">
          <Container>
            <div className="title-box">
              <h2>
                Our Latest <b>News</b>
              </h2>
              <p>
                Dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores
              </p>
            </div>
            <Row>
              <Col xs="12" sm="12" md="4">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={require("./images/blog-new1.jpg")}
                    alt="Card image cap"
                  />
                  <Card body>
                    <CardTitle>Dignissimos ducimus qui </CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button color="primary">Read More</Button>
                  </Card>
                </Card>
              </Col>
              <Col xs="12" sm="12" md="4">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={require("./images/blog-new2.jpg")}
                    alt="Card image cap"
                  />
                  <Card body>
                    <CardTitle>Dignissimos ducimus qui </CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button color="primary">Read More</Button>
                  </Card>
                </Card>
              </Col>
              <Col xs="12" sm="12" md="4">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={require("./images/blog-new3.jpg")}
                    alt="Card image cap"
                  />
                  <Card body>
                    <CardTitle>Dignissimos ducimus qui</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button color="primary">Read More</Button>
                  </Card>
                </Card>
              </Col>
            </Row>
          </Container>
        </div> */}
        {/* Work With Us  Section Start*/}
        {/* <div className="workwithus grapping">
          <Container>
            <div className="title-box mb-0">
              <h2 className="text-white">
                <b>Want to work with us?</b>
              </h2>
              <p className="text-white mb-4">Lets talk about project</p>
              <Button>Get Started</Button>
            </div>
          </Container>
        </div> */}
        {/* Contact Us Section Start  */}
        <div className="section contactus grapping" id="contact">
          <Container>
            <div className="title-box">
              <h2>
                Contact <b>Us</b>
              </h2>
            </div>
            <Row>
              {/* <Col xs="12" md="12" lg="4">
                <Media className="address-box">
                  <Media left href="#">
                    <Icofont icon="icofont-location-pin" />
                  </Media>
                  <Media body>
                    <Media heading>Address</Media>
                    <p> Exercisplan 4, 111 49 Stockholm, Sweden</p>
                  </Media>
                </Media>
              </Col> */}
              <Col xs="12" md="6" lg="5">
                <Media className="address-box">
                  <Media left href="#">
                    <Icofont icon="icofont-mail" />
                  </Media>
                  <Media body>
                    <Media heading>Email</Media>
                    <a href="mailto:techvisions49@gmail.com">
                      {" "}
                      techvisions49@gmail.com
                    </a>{" "}
                    <br />
                  </Media>
                </Media>
              </Col>
              <Col xs="12" md="6" lg="4">
                <Media className="address-box">
                  <Media left href="#">
                    <Icofont icon="icofont-phone" />
                  </Media>
                  <Media body>
                    <Media heading>Phone</Media>
                    <a href="tel:+61 415 174 120"> +61 415 174 120</a> <br />
                  </Media>
                </Media>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs="12" md="12" lg="4">
                <h4>Get in Touch</h4>
                <hr />
                <p>We would love to see on our social media</p>
                <ListGroup className="social-icon">
                  <ListGroupItem
                    tag="a"
                    target="_blank"
                    href="https://www.facebook.com/techvisions49"
                  >
                    {" "}
                    <Icofont icon="icofont-facebook" />
                  </ListGroupItem>

                  <ListGroupItem
                    tag="a"
                    href="https://www.instagram.com/techvisions49/"
                    target="_blank"
                  >
                    {" "}
                    <Icofont icon="icofont-instagram" />
                  </ListGroupItem>
                </ListGroup>
              </Col>

              <Col xs="12" md="12" lg="8">
                <Form className="mt-4" action="POST" data-netlify="true">
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          type="text"
                          name="name"
                          id="examplename"
                          placeholder="Name"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          placeholder="Email"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Input
                      type="address"
                      name="address"
                      id="exampleAddress"
                      placeholder="Address"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="textarea"
                      name="message"
                      id="message"
                      placeholder="Your message"
                    />
                  </FormGroup>
                  <FormGroup>
                    <div data-netlify-recaptcha="true"></div>
                  </FormGroup>

                  <Button color="primary">Send Message</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Footer  Section Start */}
        <div className="">
          <Tdsfooter></Tdsfooter>
        </div>
      </div>
    );
  }
}

export default App;
