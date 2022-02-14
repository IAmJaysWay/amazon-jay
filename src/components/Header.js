import { PageHeader, Button, Input, Badge, Space } from "antd";
import { NavLink } from "react-router-dom";
import { useMoralis } from "react-moralis";
import Amazon from "../logo.png";
import USA from "../usa.png";
import BookStore from "../bookstore.png";
import "./Header.css";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";


const { Search } = Input;
const categories = ["Comics", "Dictionaries", "Novels", "Fantasy", "Horror", "Adventure"];

const Header = () => {
  const { authenticate } = useMoralis();
  return (
    <>
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        className="contents"
        ghost={false}
        extra={[
          <>
            <img src={Amazon} alt="amazon logo" className="logo"></img>
            <img src={BookStore} alt="page logo" className="logo"></img>
            <Search
              placeholder="Find A Product"
              enterButton
              className = "searchBar"
            />
            <Button
              className="login"
              key="1"
              type="primary"
              onClick={() => authenticate()}
            >
              Login
            </Button>

            <Space size={"large"}>
              <Badge count={0} showZero>
                <span className="header-buttons">
                  <ShoppingCartOutlined className="header-icon" />
                  Cart
                </span>
              </Badge>
              <Space className="header-buttons" size={"small"}>
                <img src={USA} alt="region" className="flag"></img>▾
              </Space>
              
            </Space>
          </>,
        ]}
      ></PageHeader>
    </div>
    <div className="site-page-subheader-ghost-wrapper">
      <Space size={"middle"}>
        <Space size={"small"} style={{fontWeight:"bold"}}>
          <MenuOutlined />
          Categories
        </Space>
        {categories.map((e) => {
          return(
            <NavLink to="/categories" className="categories">{e}</NavLink>
          )
        }

        )}
      </Space>
    </div>
    </>
  );
};

export default Header;
