import React, { useState, useEffect } from "react";

// Bootstrap components
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Navbar,
  Form,
  FormControl,
  Nav,
} from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import "../../bootstrap.min.css";

// My component cards
import Relative from "../../components/Relative";
import Text from "../../components/Text";
import Image from "../../components/Image";
import danger from "../../assets/danger.png";
import wasd from "../../assets/wasd.png";
import brands from "../../assets/brands.png";
import swipe from "../../assets/swipe.png";
import join1 from "../../assets/join1.jpeg";
import join2 from "../../assets/join2.jpeg";
import join3 from "../../assets/join3.jpeg";

import bottomLogo from "../../assets/bottomLogo.png";

// card iteam carousel
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

// Card styles
import "../../sass/card.scss";
//inout styles
import "../../sass/input.scss";

// Footer
import Footer from "../../template/Footer";

//Animation
import { motion } from "framer-motion/dist/framer-motion";

// import TypeWriter from "../../utils/animations/TypeWriterComponent";
import TypeWriterComponent from "../../utils/animations/TypeWriterComponent";
import ShowsComponent from "../../components/shows/ShowsComponent";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = ({ data }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggle = () => setIsDarkTheme(!isDarkTheme);

  const [searchInit, setSearchInit] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [filterData, setFilterData] = useState([]);

  const searchFunction = (e) => {
    setSearchKey(e.target.value);
    setSearchInit(true);
    e.preventDefault();

    console.log(e.nativeEvent.inputType);
  };

  useEffect(() => {
    document.body.classList.add("dark-theme");

    // setData( getData());
    // if( isDarkTheme ){
    //   document.body.classList.add('dark-theme')
    // }else{
    //   document.body.classList.remove('dark-theme')
    // }
  }, [isDarkTheme]);

  useEffect(() => {
    if (searchKey.length === 0) {
      setSearchInit(false);
    }
  }, [searchKey]);

  return (
    <div className="App">
      <Container fluid="lg">
        <div className="header-example mb-5  justify-content-between align-items-center">
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src={danger}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="navbarScroll"
                style={{ backgroundColor: "yellow" }}
              ></Navbar.Toggle>
              <Navbar.Collapse>
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px", color: "#ee6c4d" }}
                  navbarScroll
                >
                  {data.length !== 0 &&
                    data.navBar.map((nav, i) => (
                      <Nav.Link
                        id={i}
                        style={{ color: "#ee6c4d" }}
                        href={nav.link}
                      >
                        {nav.name}
                      </Nav.Link>
                    ))}
                </Nav>
                <Form className=" d-flex">
                  <FormControl
                    style={{
                      color: "#fff",
                      backgroundColor: "black",
                      borderColor: "#ee6c4d",
                      borderWidth: "3px",
                    }}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={searchFunction}
                  />
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <hr style={{ color: "yellow", height: "2px" }} />
        </div>
        {searchInit ? (
          <Container id="main">
            <Alert variant="warning">Showing Results to : {searchKey}</Alert>
            {/* <div  style={{ color: 'yellow' }}> <h4>Showing Results to : {searchKey}</h4></div> */}

            <Carousel
              responsive={responsive}
              itemClass="carousel-item-padding-40-px"
              // autoPlay={ true }
              // autoPlaySpeed={1000}
            >
              {data.length !== 0 &&
                data.cardList &&
                data.cardList
                  .filter(
                    (cat) =>
                      cat.name.includes(searchKey) ||
                      cat.heading.includes(searchKey) ||
                      cat.tags.includes(searchKey)
                  )
                  .map((list, i) => (
                    <Card
                      className="text-dark m-4 mobile_res transition__3d__zoom"
                      key={i}
                    >
                      <Image className="card-img" src={list.image}></Image>
                      <Card.ImgOverlay className="overlay_top_res card-overlay-black d-flex flex-column justify-content-between p-3">
                        <div className="h3 ">
                          <p className="text-white text-decoration-none">
                            {list.title}
                          </p>
                        </div>
                        <div className="d-flex justify-content-between ">
                          <div className="m-3">
                            <img
                              src={list.leftOverlay}
                              height="60px"
                              width="60px"
                            />
                            <p className="text-white text-decoration-none">
                              {list.leftOverlayText}
                            </p>
                          </div>
                          <div className="align-items-right m-3">
                            <img
                              src={list.rightOverlay}
                              height="50px"
                              width="50px"
                            />
                            <p className="text-white text-decoration-none">
                              {list.rightOverlayText}
                            </p>
                          </div>
                        </div>
                      </Card.ImgOverlay>
                      <Card.ImgOverlay className="overlay_bottom_res card-overlay2-black d-flex flex-column justify-content-between  p-4">
                        <div className="h5 mb-3">
                          <a
                            className="text-white text-decoration-none"
                            href={`/${list.link}`}
                          >
                            {list.heading}
                          </a>
                          <h6 className="text-white text-decoration-none ">
                            {" "}
                            {list.name}{" "}
                          </h6>
                        </div>
                        <div className="d-flex justify-content-between ">
                          <img src={list.artist} width="75px" height="75px" />
                          <div className="align-items-right">
                            <Button
                              style={{
                                borderWidth: "0px",
                                borderRadius: "35px",
                                backgroundColor: "yellow",
                                color: "black",
                              }}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = `${list.link}`;
                              }}
                            >
                              Enter
                            </Button>
                          </div>
                        </div>
                      </Card.ImgOverlay>
                    </Card>
                  ))}
            </Carousel>
          </Container>
        ) : (
          <Container id="main">
            <Row>
              <Col sm={12} md={6} lg={6} className="col-md-offset-2 mb-2">
                <div
                  className="h3 "
                  style={{ marginLeft: "20%", marginTop: "20%" }}
                >
                  <a className="text-white text-decoration-none" href="/#">
                    <TypeWriterComponent
                      text="Enter a portal to access live xr performances across the
                    metaverse"
                    />
                  </a>
                </div>
                <div style={{ marginLeft: "20%", marginTop: "10%" }}>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = `${
                        data.length !== 0 && data.haveacodeLink
                      }`;
                    }}
                  >
                    Have a code?{" "}
                  </Button>
                </div>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <Card className="text-dark m-4 mobile_res transition__3d__zoom">
                  <Image
                    className="card-img"
                    src={data.length !== 0 && data.masterCard.image}
                  ></Image>
                  <Card.ImgOverlay className="overlay_top_res card-overlay-black d-flex flex-column justify-content-between p-3">
                    <div className="h3 ">
                      <p className="text-white text-decoration-none">
                        {data.length !== 0 && data.masterCard.title}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between ">
                      <div className="m-3">
                        <img
                          src={data.length !== 0 && data.masterCard.leftOverlay}
                          height="50px"
                          width="50px"
                        />
                        <p className="text-white text-decoration-none">
                          {data.length !== 0 && data.masterCard.leftOverlayText}
                        </p>
                      </div>
                      <div className="align-items-right m-3">
                        <img
                          src={
                            data.length !== 0 && data.masterCard.rightOverlay
                          }
                          height="50px"
                          width="50px"
                        />
                        <p className="text-white text-decoration-none">
                          {data.length !== 0 &&
                            data.masterCard.rightOverlayText}
                        </p>
                      </div>
                    </div>
                  </Card.ImgOverlay>
                  <Card.ImgOverlay className="overlay_bottom_res card-overlay2-black d-flex flex-column justify-content-between  p-4">
                    <div className="h5 mb-3">
                      <a
                        className="text-white text-decoration-none"
                        href={`${data.length !== 0 && data.masterCard.link}`}
                      >
                        {data.length !== 0 && data.masterCard.heading}
                      </a>
                      <br></br>
                      <h6 className="text-white text-decoration-none ">
                        {" "}
                        {data.length !== 0 && data.masterCard.name}{" "}
                      </h6>
                    </div>
                    <div className="d-flex justify-content-between m-2">
                      <img
                        src={data.length !== 0 && data.masterCard.artist}
                        width="75px"
                        height="75px"
                      />
                      <div className="m-2" style={{ textAlign: "right" }}>
                        <Button
                          className="enter__btn"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `${
                              data.length !== 0 && data.masterCard.link
                            }`;
                          }}
                        >
                          Enter
                        </Button>
                      </div>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          </Container>
        )}
        {/* shows  */}
        <Row className="mb-4">
          <Col sm={12} md={6} lg={1} style={{ color: "yellow" }}>
            {" "}
            <h4>Shows</h4>
          </Col>
          <Col sm={12} md={6} lg={11}>
            {" "}
            <hr style={{ color: "yellow", height: "2px" }} />
          </Col>
        </Row>

        <ShowsComponent data={data} />

        {/* awards */}

        <hr style={{ color: "yellow", height: "2px" }} />
        <motion.img
          initial={{ scale: 0.1 }}
          whileInView={{
            scale: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
            },
          }}
          viewport={{ once: true, amount: 0.4 }}
          src={brands}
          width="90%"
        />

        {/* about */}
        <hr style={{ color: "yellow", height: "2px" }} />
        <Container className="mt-5 " id="about">
          <p className="text-white h1">About</p>
          <p className="text-white text-decoration-none h3 mb-5">
            {" "}
            {data.length !== 0 && data.about}{" "}
          </p>
        </Container>

        {/* lobbies */}
        <Row className="mb-4 mt-2">
          <Col sm={12} md={6} lg={1} style={{ color: "yellow" }}>
            {" "}
            <h4>Lobbies</h4>
          </Col>
          <Col sm={12} md={6} lg={11}>
            {" "}
            <hr style={{ color: "yellow", height: "2px" }} />
          </Col>
        </Row>

        <Carousel
          responsive={responsive}
          itemClass="carousel-item-padding-40-px"
          // autoPlay={ true }
          // autoPlaySpeed={1000}
        >
          {data.length !== 0 &&
            data.cardList &&
            data.cardList
              .filter((cat) => cat.category === "lobbies")
              .map((list, i) => (
                <Card
                  className="text-dark m-4 mobile_res transition__3d"
                  key={i}
                >
                  <Image className="card-img" src={list.image}></Image>
                  <div className="hover-img-container">
                    <Image className="hover-img" src={list.image}></Image>
                  </div>
                  <Card.ImgOverlay className="overlay_top_res card-overlay-black d-flex flex-column justify-content-between p-3">
                    <div className="h3 ">
                      <p className="text-white text-decoration-none">
                        {list.title}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between ">
                      <div className="m-3">
                        <img
                          src={list.leftOverlay}
                          height="60px"
                          width="60px"
                        />
                        <p className="text-white text-decoration-none">
                          {list.leftOverlayText}
                        </p>
                      </div>
                      <div className="align-items-right m-3">
                        <img
                          src={list.rightOverlay}
                          height="50px"
                          width="50px"
                        />
                        <p className="text-white text-decoration-none">
                          {list.rightOverlayText}
                        </p>
                      </div>
                    </div>
                  </Card.ImgOverlay>
                  <Card.ImgOverlay className="overlay_bottom_res card-overlay2-black d-flex flex-column justify-content-between  p-4">
                    <div className="h5">
                      <a
                        className="text-white text-decoration-none"
                        href={`${list.link}`}
                      >
                        {list.heading}
                      </a>
                      <h6 className="text-white text-decoration-none ">
                        {" "}
                        {list.name}{" "}
                      </h6>
                    </div>
                    <div className="d-flex justify-content-between ">
                      <img src={list.artist} width="75px" height="75px" />
                      <div className="align-items-right">
                        <Button
                          className="enter__btn"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `${list.link}`;
                          }}
                        >
                          Enter
                        </Button>
                      </div>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              ))}
        </Carousel>

        {/* clips */}
        <Row className="mb-4">
          <Col sm={12} md={6} lg={1} style={{ color: "yellow" }}>
            {" "}
            <h4>Clips</h4>
          </Col>
          <Col sm={12} md={6} lg={11}>
            {" "}
            <hr style={{ color: "yellow", height: "2px" }} />
          </Col>
        </Row>

        <Carousel
          responsive={responsive}
          itemClass="carousel-item-padding-40-px"
          // autoPlay={ true }
          // autoPlaySpeed={1000}
        >
          {data.length !== 0 &&
            data.cardList &&
            data.cardList
              .filter((cat) => cat.category === "clips")
              .map((list, i) => (
                <Card
                  className="text-dark m-4 mobile_res transition__3d"
                  key={i}
                >
                  <Image className="card-img" src={list.image}></Image>
                  <div className="hover-img-container">
                    <Image className="hover-img" src={list.image}></Image>
                  </div>
                  <Card.ImgOverlay className="overlay_top_res card-overlay-black d-flex flex-column justify-content-between p-3">
                    <div className="h3 ">
                      <p className="text-white text-decoration-none">
                        {list.title}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between ">
                      <div className="m-3">
                        <img
                          src={list.leftOverlay}
                          height="60px"
                          width="60px"
                        />
                        <p className="text-white text-decoration-none">
                          {list.leftOverlayText}
                        </p>
                      </div>
                      <div className="align-items-right m-3">
                        <img
                          src={list.rightOverlay}
                          height="50px"
                          width="50px"
                        />
                        <p className="text-white text-decoration-none">
                          {list.rightOverlayText}
                        </p>
                      </div>
                    </div>
                  </Card.ImgOverlay>
                  <Card.ImgOverlay className="overlay_bottom_res card-overlay2-black d-flex flex-column justify-content-between  p-4">
                    <div className="h5 ">
                      <a
                        className="text-white text-decoration-none"
                        href={`${list.link}`}
                      >
                        {list.heading}
                      </a>
                      <h6 className="text-white text-decoration-none ">
                        {" "}
                        {list.name}{" "}
                      </h6>
                    </div>
                    <div className="d-flex justify-content-between ">
                      <img src={list.artist} width="75px" height="75px" />
                      <div className="align-items-right">
                        <Button
                          className="enter__btn"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `${list.link}`;
                          }}
                        >
                          Enter
                        </Button>
                      </div>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              ))}
        </Carousel>

        <hr style={{ color: "yellow", height: "2px" }} />

        {/* join us */}
        <Container className="mt-5 mb-5" id="joinUs">
          <motion.p
            className="text-white h1 mb-3"
            style={{ textAlign: "center" }}
            initial={{ scale: 0.1 }}
            whileInView={{
              scale: 1,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
              },
            }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {" "}
            Join us!
          </motion.p>

          <Row>
            <Col sm={12} md={6} lg={4}>
              <Card
                className="mb-4 transition__3d transition__3d_jiggle"
                style={{ backgroundColor: "black", height: "450px" }}
              >
                <Relative>
                  <Image
                    className="card-img-top card-img-bottom p-4 "
                    style={{ borderRadius: "30px" }}
                    src={join1}
                  ></Image>
                </Relative>
                <Card.Body>
                  <Text tag="h4" className="weight-700 mb-4 text-white">
                    Learn
                  </Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <Text
                      tag="span"
                      className="weight-400 text-white font-size-20"
                    >
                      Free{" "}
                      <a href={data.length !== 0 && data.learnLink}>
                        {" "}
                        resources and toolkit{" "}
                      </a>{" "}
                      to create your own XR performance space.
                    </Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Card
                className="mb-4 transition__3d transition__3d_jiggle"
                style={{ backgroundColor: "black", height: "450px" }}
              >
                <Relative>
                  <Image
                    className="card-img-top card-img-bottom p-4 "
                    style={{ borderRadius: "30px" }}
                    src={join2}
                  ></Image>
                </Relative>
                <Card.Body>
                  <Text tag="h4" className="weight-700 mb-4 text-white">
                    Submit
                  </Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <Text
                      tag="span"
                      className="weight-400 text-white font-size-20"
                    >
                      <a href={data.length !== 0 && data.submitLink}>
                        Send a proposal
                      </a>{" "}
                      for our next seasonal series to showcase and monetize your
                      performance.
                    </Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Card
                className="mb-4 transition__3d transition__3d_jiggle"
                style={{ backgroundColor: "black", height: "450px" }}
              >
                <Relative>
                  <Image
                    className="card-img-top card-img-bottom p-4 "
                    style={{ borderRadius: "30px" }}
                    src={join3}
                  ></Image>
                </Relative>
                <Card.Body>
                  <Text tag="h4" className="weight-700 mb-4 text-white">
                    Follow
                  </Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <Text
                      tag="span"
                      className="weight-400 text-white font-size-20"
                    >
                      Get the{" "}
                      <a href={data.length !== 0 && data.followLink}>
                        latest news and updates{" "}
                      </a>
                      about the community and industry.
                    </Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <hr style={{ color: "yellow", height: "2px" }} />

        <Footer footer={data.footerIcons} />
      </Container>
    </div>
  );
};

export default Home;
