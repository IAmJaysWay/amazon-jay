import { Card, Rate } from "antd";
import { Link } from "react-router-dom";
import "./Results.css";
import Spidey1 from "../spiderman1.png";
import Spidey2 from "../spiderman2.png";
import Spidey3 from "../spiderman3.png";
import Spidey4 from "../spiderman4.png";


const books = [
  {
    name: "The Amazing Spiderman By Nick Spencer Vol. 1: Back To Basics (MARVEL ORIGINAL COMIC)",
    price: 9.99,
    rating: 4,
    image: Spidey1
  },
  {
    name: "The Amazing Spiderman By Nick Spencer Vol. 2: Friends And Foes (MARVEL ORIGINAL COMIC)",
    price: 19.99,
    rating: 5,
    image: Spidey2
  },
  {
    name: "The Amazing Spiderman By Nick Spencer Vol. 3: Lifetime Achievement (MARVEL ORIGINAL COMIC)",
    price: 2.99,
    rating: 1,
    image: Spidey3
  },
  {
    name: "The Amazing Spiderman By Nick Spencer Vol. 4: Hunted (MARVEL ORIGINAL COMIC)",
    price: 8.99,
    rating: 3,
    image: Spidey4
  }
];

const Results = () => {

  return (
<>
  {books.map((e,i) => {
    return (
      <Card>
      <div style={{ display: "flex" }}>
        <img src={e.image} alt={i} width="300px"></img>
        <div>
          <p className="title">
            {e.name}
          </p>
          <Rate defaultValue={e.rating} disabled={true}></Rate>
          <h2> ${e.price}</h2>
          <p>
            Ships to Your Location
          </p>
          <Link to="/product" className="login">
          Got to Product Page
        </Link>
        </div>
      </div>
    </Card>
    );
  })}
  </>
  )


};

export default Results;
