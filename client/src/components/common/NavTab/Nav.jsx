import { NavLink } from 'react-router-dom';

import { Menu } from 'antd';

import './Navbar.css';
import 'antd/dist/antd.min.css';

import { DownOutlined } from '@ant-design/icons';

const { Item, SubMenu } = Menu;

const NAV = () => (
  <Menu style={{ width: '34%' }} mode="horizontal">
    <Item key="alipay">
      <NavLink to="/home">Home</NavLink>
    </Item>
    <SubMenu key="shop" title="Shop" icon={<DownOutlined />}>
      <Menu.ItemGroup>
        <Menu.Item key="setting:1">shop 1</Menu.Item>
        <Menu.Item key="setting:2">shop 2</Menu.Item>
        <Menu.Item key="setting:3">shop 3</Menu.Item>
        <Menu.Item key="setting:4">shop 4</Menu.Item>
      </Menu.ItemGroup>
    </SubMenu>

    <SubMenu key="pages" icon={<DownOutlined />} title="Pages">
      <Menu.ItemGroup>
        <Menu.Item key="setting:1">page 1</Menu.Item>
        <Menu.Item key="setting:2">page 2</Menu.Item>
        <Menu.Item key="setting:3">page 3</Menu.Item>
        <Menu.Item key="setting:4">page 4</Menu.Item>
      </Menu.ItemGroup>
    </SubMenu>

    <SubMenu key="elements" icon={<DownOutlined />} title="Elements">
      <Menu.ItemGroup title="Pages">
        <Menu.Item key="setting:1">element 1</Menu.Item>
        <Menu.Item key="setting:2">element 2</Menu.Item>
        <Menu.Item key="setting:3">element 3</Menu.Item>
        <Menu.Item key="setting:4">element 4</Menu.Item>
      </Menu.ItemGroup>
    </SubMenu>
    <Item key="blog">
      <NavLink to="/blog">Blog</NavLink>
    </Item>
    <Item key="contact-us">
      <NavLink to="/contact-us">Contact us</NavLink>
    </Item>
  </Menu>
);

export default NAV;
