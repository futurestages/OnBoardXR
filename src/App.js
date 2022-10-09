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
import "./bootstrap.min.css";

// My component cards
import Relative from "./components/Relative";
import Text from "./components/Text";
import Image from "./components/Image";
import danger from "./assets/danger.png";
import wasd from "./assets/wasd.png";
import brands from "./assets/brands.png";
import swipe from "./assets/swipe.png";
import join1 from "./assets/join1.jpeg";
import join2 from "./assets/join2.jpeg";
import join3 from "./assets/join3.jpeg";

import bottomLogo from "./assets/bottomLogo.png";

// card iteam carousel
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

// Card styles
import "./sass/card.scss";
//inout styles
import "./sass/input.scss";

// Footer
import Footer from "./template/Footer";

//Animation
import { motion } from "framer-motion/dist/framer-motion";

import { siteData } from "./data/data";
import TypeWriter from "./utils/animations/TypeWriterComponent";
import TypeWriterComponent from "./utils/animations/TypeWriterComponent";
import ShowsComponent from "./components/shows/ShowsComponent";
import Home from "./pages/home/Home";

const App = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // setData(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log("My json data is", myJson);
        setData(myJson);
      })
      .catch((err) => {
        console.log("Error is", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (data.length !== 0) {
    return <Home data={data} />;
  } else {
    return <div>Loading</div>;
  }
};

export default App;
