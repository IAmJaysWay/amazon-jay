import {InputNumber, Space } from "antd";
import { useState } from "react";
import "./PriceRange.css";

const PriceRange = () => {
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(100);

  function changePrice(min,max){
    setPriceMin(min);
    setPriceMax(max);
  }
  return (
    <>
    <h2>Price Range</h2>
    <p className="prices" onClick={() => changePrice(0,5)}>Under $5</p>
    <p className="prices" onClick={() => changePrice(5,10)}>$5 to $10</p>
    <p className="prices" onClick={() => changePrice(10,20)}>$10 to $20</p>
    <p className="prices" onClick={() => changePrice(20,100)}>$20 & Above</p>
    <Space>
    <InputNumber
      value={priceMin}
      formatter={value => `$ ${value}`}
      onChange={(value) => changePrice(value,priceMax)}
    />
    <InputNumber
      value={priceMax}
      formatter={value => `$ ${value}`}
      onChange={(value) => changePrice(priceMin,value)}
    />
  </Space>,
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    </>
  );
};

export default PriceRange;