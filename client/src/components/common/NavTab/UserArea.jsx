import { NavLink } from 'react-router-dom';
import { Avatar } from 'antd';

import './Navbar.css';
import 'antd/dist/antd.min.css';

import {
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';

const UserArea = () => (
  <div className="header-navbar-userArea">
    <NavLink to="/favorite">
      <HeartOutlined style={{ fontSize: '1.5rem', color: '#1A1A1A' }} />
    </NavLink>
    <NavLink to="/cart">
      <ShoppingOutlined style={{ fontSize: '1.5rem', color: '#1A1A1A' }} />
    </NavLink>
    <NavLink to="/login">
      <Avatar icon={<UserOutlined />} />
    </NavLink>
  </div>
);
export default UserArea;
