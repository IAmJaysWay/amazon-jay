import React from "react";
import Header from "../components/Header.js";
import Spidey1 from "../spiderman1.png";
import "./Product.css";
import { Rate, Select, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { Option } = Select;
const book = {
  name: "The Amazing Spiderman By Nick Spencer Vol. 1: Back To Basics (MARVEL ORIGINAL COMIC)",
  price: 9.99,
  rating: 4,
  image: Spidey1,
  about: "An alien invasion attacks New York City and the only one who can stop it is...Spider-Man?! But that's far from all you'll find here - a revelation from the past puts Peter Parker's job, relationships and whole life in jeopardy! And if even that's not enough, you'll see a new roommate, new love interests and a new villain!",
};

const Product = () => (
  <div className="container">
    <Header />
    <div className="product-content">
      <div>
        <div className="product-img">
          <img src={book.image} alt="product" width="100%"></img>
        </div>
        <p style={{ textAlign: "center" }}>Hover over image to zoom</p>
      </div>
      <div className="product-details">
        <h1>{book.name}</h1>
        <Rate defaultValue={4} disabled={true}></Rate>
        <hr></hr>
        <p>
          Price:
          <span className="price"> ${book.price}</span>
        </p>
        <p>
          No Import Fees & Free Shipping Included
        </p>
        <hr></hr>
        <h3>About This Item</h3>
        <p>
          {book.about}
        </p>
      </div>
      <div className="purchase-details">
      <span className="price"> ${book.price}</span>
      <p>
          No Import Fees & Free Shipping Included
      </p>
      <h1 style={{color:"green"}}> In Stock </h1>
      <h3>Quantity</h3>
      <Select defaultValue={1} style={{ width: "100%" }}>
      <Option value={1}>1</Option>
      <Option value={2}>2</Option>
      <Option value={3}>3</Option>
      <Option value={4}>4</Option>
      <Option value={5}>5</Option>
    </Select>
    <Button className="login" style={{width:"100%", marginTop:"50px"}}>
      <ShoppingCartOutlined /> Add to Cart
    </Button>
      </div>
    </div>
  </div>
);

export default Product;
