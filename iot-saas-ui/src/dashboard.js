import React, { useEffect, useState } from 'react';
import { Row, Col, Breadcrumb, Button, Divider, Empty, message } from 'antd';
import DemoArea from './dashboard_area';
import DemoLiquid from './dashboard_guage';
import DemoBullet from './dashboard_percentagebar';
import { SyncOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { app } from './App';
import AlertsTable from './alerts_table';
import UsageTimeline from './usage_timeline';

const { Title } = Typography;


const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [alerts, setAlerts] = useState([]);
    const [deviceData, setDeviceData] = useState([]);
    const [aggregatedData, setAggregatedData] = useState([]);

    const getTitleByDeviceId = (id) => {
        return deviceData.filter(e => e.deviceId === id)[0]['title'];
    }

    const getVisualTypeByDeviceId = (id) => {
        try {
            return deviceData.filter(e => e.deviceId === id)[0]['visualType'];
        } catch (e) {
            return 'bullet';
        }
    }

    const getDevices = () => {
        app.currentUser.functions.getDevices().then(res => {
            const devices = JSON.parse(res);
            var temp = [];
            for (const device of devices) {
                temp.push({ deviceId: device['_id'].toString(), visualType: device['visualType'], title: device['title'] });
            }
            setDeviceData(temp);
        });
    }

    const getAggregatedData = () => {
        app.currentUser.functions.getUserAggregatedDashboard(600).then(res => {
            console.log(JSON.parse(res));
            setAggregatedData(JSON.parse(res));
        });
    }

    const getAlerts = () => {
        app.currentUser.functions.getUserAlerts().then(res => {
            setAlerts(JSON.parse(res));
        });
    }

    const getLiveData = () => {
        app.currentUser.functions.getUserDashboard(1800).then(res => {
            setDashboardData(JSON.parse(res));
        });
    }

    var dasboardReload;
    useEffect(() => {
        reloadDashboard();
        dasboardReload = setInterval(() => reloadDashboard(), 900000); // 60s
        return () => {
            clearInterval(dasboardReload);
        }
    }, []);

    const reloadDashboard = () => {
        message.success("Refreshing data");
        setIsLoading(true);
        getDevices();
        getLiveData();
        getAggregatedData();
        getAlerts();
        setIsLoading(false);
    }

    return (
        <React.Fragment>
            <Row justify="space-between" align="middle">
                <Col ><Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb></Col>
                <Col >
                    <Button type="primary" icon={<SyncOutlined spin={isLoading} />} onClick={reloadDashboard}> Reload </Button>
                </Col>
            </Row>

            <Title level={2}>Live Data</Title>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                {
                    (dashboardData === null || dashboardData === undefined || dashboardData.length === 0) && <Empty />
                }
                {
                    dashboardData.sort((a, b) => a._id > b._id ? 1 : -1).map((data, index) => (
                        <>
                            <Title level={4} align='middle'>{getTitleByDeviceId(data._id)}</Title>
                            <DemoArea data={data.data} key={index} />
                            <br /><br /> <Divider /><br />
                        </>
                    ))
                }

            </div>
            <br />
            <Title level={2}>Aggregated Data</Title>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Row justify="space-around">
                    {
                        (aggregatedData === null || aggregatedData === undefined || aggregatedData.length === 0) && <Empty />
                    }
                    {
                        aggregatedData.sort((a, b) => a._id > b._id ? 1 : -1).map((data, index) => (
                            <>
                                <Col span={11}>
                                    <Title level={4} align='middle'>{getTitleByDeviceId(data._id)}</Title>
                                    {getVisualTypeByDeviceId(data._id) === 'bullet' && <DemoBullet targetValue={data.data[0].value} />}
                                    {getVisualTypeByDeviceId(data._id) === 'bubble' && <DemoLiquid targetValue={data.data[0].value} />}
                                    {getVisualTypeByDeviceId(data._id) === 'switch' && <img style={{ marginLeft: '35%', marginTop: '20%', marginBottom: '10%' }} width={200} height={200} src={data.data[0].value === 1 ? "on.png" : "off.png"} />}
                                    <br /><br /> <Divider /><br />
                                </Col>
                                <Col span={1}>

                                </Col>
                            </>
                        ))
                    }

                </Row>
            </div>
            <br />
            <Title level={2}>Alerts</Title>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <AlertsTable alerts={alerts} />
            </div>
            <br />
            <Title level={2}>Usage</Title>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <UsageTimeline />
            </div>
        </React.Fragment>
    )
}

export default Dashboard;