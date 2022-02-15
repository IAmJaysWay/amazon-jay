import React from "react";
import Header from "../components/Header";
import Rating from "../components/Rating";
import PriceRange from "../components/PriceRange";
import Results from "../components/Results";
import { Layout, Button } from "antd";
import "./Categories.css";

const { Sider, Content } = Layout;

const Categories = () => (
  <div className="container">
    <Header />
    <div className="results-header">
    <span>Showing 4 of 4 Poducts for </span>
    <span className="category">"Comics"</span>
    </div>
    <Layout>
      <Sider
        width="340px"
        theme="light"
        style={{ padding: "25px"}}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Rating />
          <PriceRange />
          <Button
            className="login"
            key="1"
            type="primary"
            onClick={() =>
              console.log("Apply Filter Conditions To Moralis Query")
            }
          >
            Apply Filters
          </Button>
        </div>
      </Sider>
      <Content
        theme="light"
        style={{ padding: "35px", backgroundColor: "white"}}>
        <h1 style={{fontSize:"30px"}}>RESULTS</h1>
        <Results />
      </Content>
    </Layout>
  </div>
);

export default Categories;
