import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/plots';

const DemoLiquid = (props) => {
  const config = {
    percent: props.targetValue/100,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: {
      length: 128,
    },
    color: '#09804C',
  };
  return <Liquid {...config} />;
};

export default DemoLiquid;