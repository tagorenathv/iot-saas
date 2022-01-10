import React from "react";
import { Layout, Menu, Col, Row } from 'antd'
import {
  Link,
} from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  LogoutOutlined,
  BookOutlined,
} from '@ant-design/icons';;

const { Sider } = Layout;


class CustomSider extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    const { collapsed } = this.state;
    return (
      <React.Fragment>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        <Row align="middle"><Col span={4}><img src="logo.png" className="logo"/></Col></Row>
        
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Dashboard
              <Link to={"/"} />
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Devices
              <Link to={"/devices"} />
            </Menu.Item>
            <Menu.Item key="3" icon={<BookOutlined />}>
              <Link to={"/bills"} />
              Bills
            </Menu.Item>
            <Menu.Item key="9" icon={<LogoutOutlined />}>
              <a href="javascript:void('0')" onClick={() => { sessionStorage.clear(); window.location.reload();}}>Signout</a>
            </Menu.Item>
          </Menu>
        </Sider>
      </React.Fragment>
    );
  }

}

export default CustomSider;
