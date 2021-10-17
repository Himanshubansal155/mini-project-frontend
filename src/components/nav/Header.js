import React, { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setcurrent] = useState("home");
  const handleClick = (e) => {
    setcurrent(e.key);
  };
  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      icon={<MailOutlined />}
    >
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>

      <Item key="register" icon={<UserAddOutlined />} classname="float-right">
        <Link to="/register">Register</Link>
      </Item>

      <Item key="login" icon={<UserOutlined />} classname="float-right">
        <Link to="/login">Login</Link>
      </Item>

      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">
        <Item key="setting:1">Option 1</Item>
        <Item key="setting:2">Option 2</Item>
      </SubMenu>
      <Item key="alipay">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      </Item>
    </Menu>
  );
};

export default Header;
