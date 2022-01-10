import React, { useEffect, useState } from 'react';
import { Row, Col, Breadcrumb } from 'antd';
import BillsTable from './bills_table';
import { app } from "./App";
export default function Bills() {

    const [billDetails, setBillDetails] = useState([]);

    const getBills = () => {
        app.currentUser.functions.getUserBills().then(res => {
            setBillDetails(JSON.parse(res));
        });
    }

    useEffect( () => {
        getBills();
    }, []);

    return (
        <React.Fragment>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bills</Breadcrumb.Item>
            </Breadcrumb>
            <BillsTable bills = {billDetails} />
        </React.Fragment>

    )
}