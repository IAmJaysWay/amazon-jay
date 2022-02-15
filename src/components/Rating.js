import { Rate, Radio, Space } from "antd";
import { useState } from "react";


const Rating = () => {
  const [rating, setRating] = useState(1);

  function changeRating(value){
    setRating(value);
    console.log(value);
  }
  return (
    <>
    <h2>Customer Reviews</h2>
    <Radio.Group value={rating} onChange={(value)=> changeRating(value.target.value)}>
        <Space direction="vertical">
          <Radio value={5}><Rate defaultValue={5} disabled={true}></Rate></Radio>
          <Radio value={4}><Rate defaultValue={4} disabled={true}></Rate></Radio>
          <Radio value={3}><Rate defaultValue={4} disabled={true}></Rate></Radio>
          <Radio value={2}><Rate defaultValue={2} disabled={true}></Rate></Radio>
          <Radio value={1}><Rate defaultValue={1} disabled={true}></Rate></Radio>
        </Space>
      </Radio.Group>
    <br />
    <br />
    </>
  );
};

export default Rating;
