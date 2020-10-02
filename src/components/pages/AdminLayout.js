// Admin Layout Container component
// Acts as a "layout page" by taking a page content parameter
// Wraps content and adds extra stuff, like header and footer, and determines the general layout;
// Also, passes down global state (like auth state)

import React, { useState, useEffect, useMemo, useContext } from 'react';
import AdminHeader from './Admin/AdminHeader';
import AdminFooter from './Admin/AdminFooter';

import { Layout, Menu, Breadcrumb } from 'antd';
import { DashboardOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
// const routePageMap

export default function AdminLayout({ userInfo, PageContent }) {
  const [sideCollapsed, setSideCollapsed] = useState(false);
  const [selectedPage, setSelectedPage] = useState('dashboard');

  const onSideCollapse = collapsed => {
    console.log(collapsed);
    setSideCollapsed(collapsed);
  };

  function onMenuSelect({ key, keyPath, selectedKeys }) {
    //   `item: ${{ item }}\nkey: ${{ key }}\nkeyPath: ${{
    //     keyPath,
    //   }}\nselectedKeys: ${{ selectedKeys }}\ndomEvent: ${{ domEvent }}`
    // );
    // console.log(authState);
    console.log(userInfo);
  }

  function onMenuClick(e) {}

  return (
    <>
      <Layout>
        <AdminHeader
          // isLoggedIn={authState.isAuthenticated}
          userInfo={userInfo}
          // authService={authService}
        />
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="vertical"
              defaultSelectedKeys={['dashboard']}
              theme="dark"
              style={{ height: '100%', borderRight: 5 }}
              onSelect={onMenuSelect}
            >
              <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
                Dashboard
              </Menu.Item>
              <Menu.Item key="users" icon={<UserOutlined />}>
                Users
              </Menu.Item>
            </Menu>
          </Sider>
          <PageContent userInfo={userInfo} />
        </Layout>
        <AdminFooter />
      </Layout>
    </>
  );
}
