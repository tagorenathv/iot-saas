import React, { useState, useEffect } from 'react';
import { Bullet } from '@ant-design/plots';

const DemoBullet = (props) => {
  const data = [
    {
      title: 'pH',
      ranges: [6.5, 9, 14],
      measures: [props.targetValue],
      target: 14
    },
  ];
  const config = {
    data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: ['#39a3f4', '#398A72', '#F50002'],
      measure: ['#5B8FF9', '#61DDAA'],
      target: '#39a3f4',
    },
    label: {
      measure: {
        position: 'middle',
        style: {
          fill: '#fff',
        },
      },
    },
    xAxis: {
      line: null,
    },
    yAxis: false,
    tooltip: {
      showMarkers: true,
      shared: true,
    },
  };
  return <Bullet {...config} />;
};

export default DemoBullet;