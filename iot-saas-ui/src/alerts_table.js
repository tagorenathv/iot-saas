import { Table, Tag, Switch, Space } from 'antd';
import React from 'react';



class AlertsTable extends React.Component {

  state = {
    columns: [
      {
        title: 'Alert Id',
        dataIndex: '_id',
        key: '_id',
      },
      {
        title: 'User Id',
        dataIndex: 'userId',
        key: 'userId',
      },
      {
        title: 'Device Id',
        dataIndex: 'deviceId',
        key: 'deviceId',
      },
      {
        title: 'Value',
        dataIndex: 'value',
        key: 'deviceId',
      },
      {
        title: 'Timestamp',
        dataIndex: 'timestamp',
        key: 'timestamp',
      },
    ]
  }

  render() {
    const { alerts } = this.props;
    return (
      <div>
        <Table
          columns={this.state.columns}
          pagination={{ position: ['bottomRight'] }}
          dataSource={alerts}
        />
      </div>
    );
  }
}

export default AlertsTable;