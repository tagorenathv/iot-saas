import React, { useEffect, useState } from 'react';
import { Row, Col, Breadcrumb, AutoComplete, Input, Button } from 'antd';
import DeviceCard from './device_card';
import { app } from './App';
import { SyncOutlined } from '@ant-design/icons';


export default function Devices() {
    const [options, setOptions] = useState([]);
    const [devicesToShow, setDevicesToShow] = useState([]);

    const handleAutocomplete = (value) => {
        setOptions(value ? searchDeviceByTitle(value) : []);
    };

    const onSearch = value => setDevicesToShow(value ? searchDevice(value) : []);

    const getDeviceById = (value) => {
        app.currentUser.functions.getUserDevices().then(res => {
            var userDevices = JSON.parse(res);
            var allUserDeviceId = [];
            var activeUserDeviceId = [];
            for (const device of userDevices) {
                allUserDeviceId.push(device['deviceId']);
                if(device['suspended'] === false) {
                    activeUserDeviceId.push(device['deviceId']);
                }
            }
            app.currentUser.functions.getDeviceById(value).then(res => {
                var allDevices = JSON.parse(res);
                for (const device of allDevices) {
                    if (allUserDeviceId.includes(device['_id'].toString())) {
                        device['alreadySubscribed'] = true;
                    } else {
                        device['alreadySubscribed'] = false;
                    }
                    if (activeUserDeviceId.includes(device['_id'].toString())) {
                        device['suspended'] = false;
                    } else {
                        device['suspended'] = true;
                    }
                }
                setDevicesToShow(allDevices);
            });
        });
    }

    const getCardDetails = () => {
        app.currentUser.functions.getUserDevices().then(res => {
            var userDevices = JSON.parse(res);
            var allUserDeviceId = [];
            var activeUserDeviceId = [];
            for (const device of userDevices) {
                allUserDeviceId.push(device['deviceId']);
                if(device['suspended'] === false) {
                    activeUserDeviceId.push(device['deviceId']);
                }
            }
            app.currentUser.functions.getDevices().then(res => {
                var allDevices = JSON.parse(res);
                for (const device of allDevices) {
                    if (allUserDeviceId.includes(device['_id'].toString())) {
                        device['alreadySubscribed'] = true;
                    } else {
                        device['alreadySubscribed'] = false;
                    }
                    if (activeUserDeviceId.includes(device['_id'].toString())) {
                        device['suspended'] = false;
                    } else {
                        device['suspended'] = true;
                    }
                }
                setDevicesToShow(allDevices);
            });
        });
    }


    const searchDeviceByTitle = (value) => {
        app.currentUser.functions.autocompleteTitle(value).then(res => {
            var allDevices = JSON.parse(res);
            var temp = [];
            for (const device of allDevices) {
                temp.push({ value: device['_id'].toString(), label: device['title'] });
            }
            setOptions(temp);
        });
    }

    const searchDevice = (value) => {
        console.log(value);
        app.currentUser.functions.getUserDevices().then(res => {
            var userDevices = JSON.parse(res);
            var allUserDeviceId = [];
            var activeUserDeviceId = [];
            for (const device of userDevices) {
                allUserDeviceId.push(device['deviceId']);
                if(device['suspended'] === false) {
                    activeUserDeviceId.push(device['deviceId']);
                }
            }
            app.currentUser.functions.search(value).then(res => {
                var allDevices = JSON.parse(res);
                for (const device of allDevices) {
                    if (allUserDeviceId.includes(device['_id'].toString())) {
                        device['alreadySubscribed'] = true;
                        device[''] = false;
                    } else {
                        device['alreadySubscribed'] = false;
                    }
                    if (activeUserDeviceId.includes(device['_id'].toString())) {
                        device['suspended'] = false;
                    } else {
                        device['suspended'] = true;
                    }
                }
                setDevicesToShow(allDevices);
            });
        });
    }

    useEffect(() => {
        getCardDetails();
    }, []);

    return (
        <React.Fragment>
            <Row justify="space-between" align="middle">
                <Col span={1}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Devices</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                <Col span={8}>
                    <AutoComplete
                        dropdownMatchSelectWidth={252}
                        style={{
                            width: '100%',
                        }}
                        options={options}
                        onSelect={getDeviceById}
                        onChange={handleAutocomplete}
                    >
                        <Input.Search size="large" placeholder="Search Device" enterButton allowClear onSearch={onSearch}/>
                    </AutoComplete>
                </Col>
                <Button type="link" icon={<SyncOutlined />} size={'medium'} onClick={getCardDetails}>Reload</Button>
            </Row>
            &nbsp;
            <DeviceCard devicesToShow={devicesToShow} />
        </React.Fragment>

    )
}