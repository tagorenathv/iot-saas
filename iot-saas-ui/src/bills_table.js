import { Table, Tag, Switch, Space, Button, message, Empty } from 'antd';
import React from 'react';
import { app } from './App';



class BillsTable extends React.Component {

  payNowMethod = (record) => {
    app.currentUser.functions.payBill(record._id).then(res => {
      message.success('Bill paid successfully.');
      setTimeout(() => {window.location.reload()}, 2000);
    })
  }
  state = {
    columns: [
      {
        title: 'Bill Id',
        dataIndex: '_id',
        key: '_id',
      },
      {
        title: 'User Id',
        dataIndex: 'userId',
        key: 'userId',
      },
      {
        title: 'Month Year',
        dataIndex: 'monthYear',
        key: 'monthYear',
      },
      {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <Button type='link' disabled={record.paid} onClick={() => this.payNowMethod(record)}>Pay Now</Button>
          </Space>
        ),
      },
    ]
  }

  render() {
    const { bills } = this.props;
    return (
      <div>
        <Table
          columns={this.state.columns}
          pagination={{ position: ['bottomRight'] }}
          dataSource={bills}
        />
      </div>
    );
  }
}

export default BillsTable;