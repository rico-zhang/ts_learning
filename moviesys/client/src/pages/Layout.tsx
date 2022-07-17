import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { menuConfig } from '../routes';
const { Header, Footer, Sider, Content } = Layout;

export default function _Layout() {
  const navigate = useNavigate();
  return (
    <div>
      <Layout>
        <Header>
          <NavLink to="/">猫眼电影系统</NavLink>{' '}
        </Header>
        <Layout>
          <Sider style={{ height: 'calc(100vh - 64px)' }}>
            <Menu
              mode="inline"
              theme="dark"
              style={{ height: '100%', borderRight: 0 }}
              items={menuConfig}
              onClick={(e) => {
                const { key, keyPath } = e;
                let item: any = {
                  children: menuConfig,
                };
                for (let i = keyPath.length - 1; i >= 0; i--) {
                  item = item.children.find((it: any) => it.key === keyPath[i]);
                }
                navigate(item.url);
              }}
            />
          </Sider>
          <Content
            style={{
              padding: '10px',
              overflow: 'auto',
              height: 'calc(100vh - 64px)',
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
