import { NavLink } from 'react-router-dom';

import { Menu } from 'antd';

import './Navbar.css';
import 'antd/dist/antd.min.css';

import { DownOutlined } from '@ant-design/icons';

const { Item, SubMenu, ItemGroup } = Menu;

const Nav = () => (
  <Menu className='header-nav' mode="horizontal">
    <Item key="alipay">
      <NavLink to="/">Home</NavLink>
    </Item>
    <SubMenu key="shop" title="Shop" icon={<DownOutlined />}>
      <ItemGroup>
        <Item key="setting:1">shop 1</Item>
        <Item key="setting:2">shop 2</Item>
        <Item key="setting:3">shop 3</Item>
        <Item key="setting:4">shop 4</Item>
      </ItemGroup>
    </SubMenu>

    <SubMenu key="pages" icon={<DownOutlined />} title="Pages">
      <ItemGroup>
        <Item key="page:1">page 1</Item>
        <Item key="page:2">page 2</Item>
        <Item key="page:3">page 3</Item>
        <Item key="page:4">page 4</Item>
      </ItemGroup>
    </SubMenu>

    <SubMenu key="elements" icon={<DownOutlined />} title="Elements">
      <ItemGroup title="Pages">
        <Item key="elmeent:1">element 1</Item>
        <Item key="elmeent:2">element 2</Item>
        <Item key="elmeent:3">element 3</Item>
        <Item key="elmeent:4">element 4</Item>
      </ItemGroup>
    </SubMenu>
    <Item key="blog">
      <NavLink to="/blog">Blog</NavLink>
    </Item>
    <Item key="contact-us">
      <NavLink to="/contact-us">Contact us</NavLink>
    </Item>
  </Menu>
);

export default Nav;
