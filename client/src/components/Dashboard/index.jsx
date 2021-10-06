import { useState } from 'react';
import { Layout, Menu } from 'antd';
import NewProduct from './NewProduct';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { Item } = Menu;

import './style.css';

const Dashboard = () => {
  const [dashboardSection, setDashboardSection] = useState(<NewProduct />);

  return (
    <Layout className="dashboard-layout">
      <Sider className="dashboard-sider" breakpoint="lg" collapsedWidth="0">
        <div className="logo">
          <h4 className="logo-content">REMAN Dashboard </h4>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Item
            key="4"
            icon={<UserOutlined />}
            onClick={() => setDashboardSection(<NewProduct />)}
          >
            New Product
          </Item>
          <Item
            key="3"
            icon={<VideoCameraOutlined />}
            onClick={() => setDashboardSection('New Category')}
          >
            New Category
          </Item>
          <Item
            key="2"
            icon={<UploadOutlined />}
            onClick={() => setDashboardSection('New Section')}
          >
            New Section
          </Item>
          <Item
            key="1"
            icon={<UserOutlined />}
            onClick={() => setDashboardSection('Admin Controll')}
          >
            Admin Controll
          </Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background">{dashboardSection}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
