import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Card } from "antd";
import Header from "../components/Header";
import Carousel1 from "../carousel1.png";
import Carousel2 from "../carousel2.png";
import Carousel3 from "../carousel3.png";
import Comics from "../comics.png";
import ArtemisFowl from "../ArtemisFowl.png";
import MobyDick from "../MobyDick.png";
import Adventure from "../adventure.png";
import Dictionaries from "../dictionaries.png";
import Fantasy from "../fantasy.png";
import Horror from "../horror.png";
import "./Home.css";

const carouselImages = [Carousel1, Carousel2, Carousel3];
const catCard = [Adventure, Dictionaries, Fantasy, Horror];

const Home = () => (
  <div className="container">
    <Header />

    <Carousel autoplay className="carousel">
      {carouselImages.map((e) => {
        return <img src={e} className="carousel-img" alt="carousel"></img>;
      })}
    </Carousel>

    <div className="cards">
      <Card className="card">
        <h1>Shop By Category</h1>
        <div className="card-content">
          {catCard.map((e) => {
            return (
              <img
                src={e}
                alt="category"
                className="card-category"
                onClick={() => console.log("beauty")}
              ></img>
            );
          })}
          <br />
          <Link to="/" className="link">
            Shop All
          </Link>
        </div>
      </Card>
      <Card className="card">
        <h1>Browse Comics</h1>
        <img src={Comics} alt="Comics Category" className="card-content"></img>
        <br />
        <Link to="/categories" className="link">
          Shop Now
        </Link>
      </Card>
      <Card className="card">
        <h1>Artemis Fowl</h1>
        <img src={ArtemisFowl} alt="Artemis Fowl" className="card-content"></img>
        <br />
        <Link to="/" className="link">
          View Product
        </Link>
      </Card>
      <Card className="card">
        <h1>Moby Dick</h1>
        <img src={MobyDick} alt="Moby Dick" className="card-content"></img>
        <br />
        <Link to="/" className="link">
          View Product
        </Link>
      </Card>
    </div>
  </div>
);

export default Home;
