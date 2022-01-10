import { Timeline, Button, Empty } from 'antd';
import React, { useEffect, useState } from 'react';
import { app } from "./App";

class UsageTimeline extends React.Component {
  state = {
    pendingMessage: '',
    usages: [],
  };

  loadUsages = () => {
    this.setState({ pendingMessage: 'Updating...' });
    app.currentUser.functions.getUserDeviceUsage().then(res => {
      this.setState({ usages: JSON.parse(res) });
      setTimeout(() => this.setState({ pendingMessage: '' }), 1000);
    });
  }

  componentDidMount() {
    this.loadUsages();
  }

  render() {
    const { usages } = this.state;
    return (
      <div>
        <Timeline pending={this.state.pendingMessage} >
          {
            (usages === null || usages === undefined || usages.length === 0) && <Empty />
          }
          {
            usages && usages.sort((a, b) => a.timestamp > b.timestamp ? 1 : -1).map((entry, index) => (
              <Timeline.Item>DeviceId: {entry['deviceId']} active and used on <b>{entry['date']}</b> </Timeline.Item>
            ))
          }
        </Timeline>
        <Button type="primary" style={{ marginTop: 16 }} onClick={this.loadUsages}>
          Reload
        </Button>
      </div>
    );
  }
}

export default UsageTimeline;
