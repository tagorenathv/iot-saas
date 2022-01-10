import { Layout, Dropdown, Menu, Row, BackTop, Typography } from 'antd';
import React from 'react';
import { DownOutlined, CaretUpOutlined } from '@ant-design/icons';
import {
  Route,
  Routes
} from "react-router-dom";

import Dashboard from './dashboard';
import Devices from './devices';
import Bills from './bills';
import CustomSider from './custom_sider';
import {app} from './App';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;


class SideLayout extends React.Component {


  logout() {
    app.currentUser.logOut().then( res => {
      sessionStorage.clear(); 
      window.location.reload();
    })  
   
  }

  menu = (
    <Menu>
      <Menu.Item>
        <a href="javascript:void('0')" onClick={() => this.logout()}>Signout</a>
      </Menu.Item>
    </Menu>
  );
  render() {

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <CustomSider />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}  >
            <Row justify='end'>
              <Dropdown overlay={this.menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  {JSON.parse(sessionStorage.getItem('userData'))['profile']['data']['email']} <DownOutlined />
                </a>
              </Dropdown>&nbsp;&nbsp;
            </Row>
          </Header>

          <Content style={{ margin: '0 16px' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/devices" element={<Devices />} />
              <Route path="/bills" element={<Bills />} />
            </Routes>
          </Content>
          <Footer style={{ position: "sticky", bottom: "0", textAlign: 'center' }}>made with Mongo Love ❤️</Footer>
        </Layout>
        <BackTop>
          <div style={{
            height: 40,
            width: 40,
            lineHeight: '40px',
            borderRadius: 4,
            backgroundColor: '#002140',
            color: '#fff',
            textAlign: 'center',
            fontSize: 24,
          }}>{<CaretUpOutlined />}</div>
        </BackTop>
      </Layout>
    );
  }
}

export default SideLayout;

