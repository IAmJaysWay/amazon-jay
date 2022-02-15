import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Card } from "antd";
import Header from "../components/Header";
import Carousel1 from "../carousel1.png";
import Carousel2 from "../carousel2.png";
import Carousel3 from "../carousel3.png";
import "./Home.css";

const carouselImages = [Carousel1, Carousel2, Carousel3];

const Home = () => (
  <div className="container">
    <Header />

    <Carousel autoplay className="carousel">
      {carouselImages.map((e) => {
        return (
          <img src={e} className="carousel-img" alt="carousel image"></img>
        );
      })}
    </Carousel>
    <div className="cards">
      <Card className="card">
        <h1>Shop By Category</h1>
      </Card>
      <Card className="card">
        <h1>Browse Electronics</h1>
      </Card>
      <Card className="card">
        <h1>Artemis Fowl</h1>
      </Card>
      <Card className="card">
        <h1>Marvel Heroes Ep. 21</h1>
      </Card>
    </div>

    <Link to="/product" className="link">
      Product Page
    </Link>
    <Link to="/categories" className="link">
      Categories Page
    </Link>
    <Link to="/checkout" className="link">
      Checkout Page
    </Link>
  </div>
);

export default Home;
