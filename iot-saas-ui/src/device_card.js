import { Card, Col, Row, Switch, Tag, message, Button, Divider, } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';
import { app } from './App';

const { Meta } = Card;

class DeviceCard extends React.Component {

  subscribeToDevice = (data) => {
    app.currentUser.functions.subscribeDevice(data['_id']).then(res => {
      message.success('Device subscribed successfully.');
      setTimeout(() => {window.location.reload()}, 2000);
    })
  }

  toggleDeviceStatus = (data, flag) => {
    if (flag === true) {
      app.currentUser.functions.activateDevice(data['_id']).then(res => {
        message.success('Device activated successfully.');
        setTimeout(() => {window.location.reload()}, 2000);
      })
    } else {
      app.currentUser.functions.suspendDevice(data['_id']).then(res => {
        message.success('Device suspended successfully.');
        setTimeout(() => {window.location.reload()}, 2000);
      })
    }
  }

  render() {
    const { devicesToShow } = this.props;
    return (
      <div className="site-card-wrapper">
        <Row gutter={16}>
          {
            devicesToShow && devicesToShow.map((data, index) => {
              return (
                <Col span={8} key={index}>
                  <Card title={[data.title]} bordered={false}
                    actions={[
                      <Button disabled={data.alreadySubscribed} type='primary' onClick={() => { this.subscribeToDevice(data) }}>Subscribe</Button>,
                    ]}
                    extra={[<Switch checked={data.suspended === false} disabled={!data.alreadySubscribed} onChange={(event) => { this.toggleDeviceStatus(data, event) }} />]}>
                    <Meta
                      description={data.description}
                    />
                    <br />
                    <>
                      {data.tags.map(tag => (
                        <Tag color="blue" key={tag}>
                          {tag}
                        </Tag>
                      ))}
                    </>
                  </Card>
                  <Divider/>
                </Col>
                
              );
            })
          }
        </Row>
      </div>
    );
  }
}

export default DeviceCard;
