import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';

const DemoArea = (props) => {

  const config = {
    title: 'asdf',
    data: props.data,
    xField: 'timestamp',
    yField: 'value',
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
    smooth: true,
    line: { color: '#116149' },
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#ffffff 0.5:#116149 1:#116149',

      };
    },
  };

  return (<> { props.data && <Area {...config} /> } <></></>);
};

export default DemoArea;
