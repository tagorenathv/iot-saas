exports = async function(arg) {
  const devices = context.services.get("mongodb-atlas").db("iot-saas").collection("devices");
  const deviceRecords = 
  [
    {
        "title": "Fiction's Grove - PH Sensor Kit (MNG-123C-Blue )",
        "description": "Are you trying to find an easy to use and cost-effect PH sensor/meter? Do you want to use a PH sensor/meter with Arduino or Raspberry Pi? Well, this new Grove - PH Sensor will meet all your needs. The PH sensor measures the hydrogen-ion activity in water-based solutions, we usually use it to measure the PH of a liquid. It is widely used in the chemical industry, the pharmaceutical industry, the dye industry, and scientific research where acidity and alkalinity testing is required. The drive board in this kit support both 3.3V and 5V system. And with the stander BNC probe interface and Grove connector, it is very convenient to work with Arduino and Raspberry Pi.\n\nFeatures\nWidely used in chemical industry, pharmaceutical industry, dye industry, and scientific research\nSupport with both Arduino and Rasberry Pi\nCompact size for easy deployment and cost-effective\nResolution: at most ±0.15PH (STP)\nProbe replaceable\nSpecification\nOperating voltage3.3V/5V\nRange0-14PH\nResolution±0.15PH（STP）\nResponse time＜1min\nProbe InterfaceBNC\nMeasure temperature0-60℃\nInternal resistance≤250MΩ（25℃）\nAlkali error\n0.2PH（1mol/L）Na+，PH14)（25℃）\nCautions\nBefore being measured, the electrode must be calibrated with a standard buffer solution of known PH value. In order to obtain more accurate results, the known PH value should be reliable, and closer to the measured one.\n\nWhen the measurement is completed, the electrode protective sleeve should be put on. A small amount of 3.3mol / L potassium chloride solution should be placed in the protective sleeve to keep the electrode bulb wet.\n\nThe leading end of the electrode must be kept clean and dry to absolutely prevent short circuits at both ends of the output, otherwise it will lead to inaccurate or invalid measurement results.\n\nAfter long-term use of the electrode, if you find that the gradient is slightly inaccurate, you can soak the lower end of the electrode in 4% HF (hydrofluoric acid) for 3-5 seconds, wash it with distilled water, and then soak in potassium chloride solution to make it new.",
        "tags": ["aqua", "pH"],
        "pricePerDay": {
            "$numberDouble": "25.0"
        },
        "simulationData": {
            "booleanSimulation": false,
            "simulationRangeMin": {
                "$numberDouble": "4.0"
            },
            "simulationRangeMax": {
                "$numberDouble": "10.0"
            }
        },
        "alertThresholdData": {
            "thresholdMin": {
                "$numberDouble": "6.5"
            },
            "thresholdMax": {
                "$numberDouble": "8.5"
            }
        },
        "visualType": "bullet"
    },
    {
        "title": "Fiction's Grove - PH Sensor Kit (MNG-123C-Blue )",
        "description": "Are you trying to find an easy to use and cost-effect PH sensor/meter? Do you want to use a PH sensor/meter with Arduino or Raspberry Pi? Well, this new Grove - PH Sensor will meet all your needs. The PH sensor measures the hydrogen-ion activity in water-based solutions, we usually use it to measure the PH of a liquid. It is widely used in the chemical industry, the pharmaceutical industry, the dye industry, and scientific research where acidity and alkalinity testing is required. The drive board in this kit support both 3.3V and 5V system. And with the stander BNC probe interface and Grove connector, it is very convenient to work with Arduino and Raspberry Pi.\n\nFeatures\nWidely used in chemical industry, pharmaceutical industry, dye industry, and scientific research\nSupport with both Arduino and Rasberry Pi\nCompact size for easy deployment and cost-effective\nResolution: at most ±0.15PH (STP)\nProbe replaceable\nSpecification\nOperating voltage3.3V/5V\nRange0-14PH\nResolution±0.15PH（STP）\nResponse time＜1min\nProbe InterfaceBNC\nMeasure temperature0-60℃\nInternal resistance≤250MΩ（25℃）\nAlkali error\n0.2PH（1mol/L）Na+，PH14)（25℃）\nCautions\nBefore being measured, the electrode must be calibrated with a standard buffer solution of known PH value. In order to obtain more accurate results, the known PH value should be reliable, and closer to the measured one.\n\nWhen the measurement is completed, the electrode protective sleeve should be put on. A small amount of 3.3mol / L potassium chloride solution should be placed in the protective sleeve to keep the electrode bulb wet.\n\nThe leading end of the electrode must be kept clean and dry to absolutely prevent short circuits at both ends of the output, otherwise it will lead to inaccurate or invalid measurement results.\n\nAfter long-term use of the electrode, if you find that the gradient is slightly inaccurate, you can soak the lower end of the electrode in 4% HF (hydrofluoric acid) for 3-5 seconds, wash it with distilled water, and then soak in potassium chloride solution to make it new.",
        "tags": ["aqua", "pH"],
        "pricePerDay": {
            "$numberDouble": "25.0"
        },
        "simulationData": {
            "booleanSimulation": false,
            "simulationRangeMin": {
                "$numberDouble": "4.0"
            },
            "simulationRangeMax": {
                "$numberDouble": "10.0"
            }
        },
        "alertThresholdData": {
            "thresholdMin": {
                "$numberDouble": "6.5"
            },
            "thresholdMax": {
                "$numberDouble": "8.5"
            }
        },
        "visualType": "bullet"
    },
    {
        "title": "Fiction's Grove - PH Sensor Kit (MNG-123C-Blue )",
        "description": "Are you trying to find an easy to use and cost-effect PH sensor/meter? Do you want to use a PH sensor/meter with Arduino or Raspberry Pi? Well, this new Grove - PH Sensor will meet all your needs. The PH sensor measures the hydrogen-ion activity in water-based solutions, we usually use it to measure the PH of a liquid. It is widely used in the chemical industry, the pharmaceutical industry, the dye industry, and scientific research where acidity and alkalinity testing is required. The drive board in this kit support both 3.3V and 5V system. And with the stander BNC probe interface and Grove connector, it is very convenient to work with Arduino and Raspberry Pi.\n\nFeatures\nWidely used in chemical industry, pharmaceutical industry, dye industry, and scientific research\nSupport with both Arduino and Rasberry Pi\nCompact size for easy deployment and cost-effective\nResolution: at most ±0.15PH (STP)\nProbe replaceable\nSpecification\nOperating voltage3.3V/5V\nRange0-14PH\nResolution±0.15PH（STP）\nResponse time＜1min\nProbe InterfaceBNC\nMeasure temperature0-60℃\nInternal resistance≤250MΩ（25℃）\nAlkali error\n0.2PH（1mol/L）Na+，PH14)（25℃）\nCautions\nBefore being measured, the electrode must be calibrated with a standard buffer solution of known PH value. In order to obtain more accurate results, the known PH value should be reliable, and closer to the measured one.\n\nWhen the measurement is completed, the electrode protective sleeve should be put on. A small amount of 3.3mol / L potassium chloride solution should be placed in the protective sleeve to keep the electrode bulb wet.\n\nThe leading end of the electrode must be kept clean and dry to absolutely prevent short circuits at both ends of the output, otherwise it will lead to inaccurate or invalid measurement results.\n\nAfter long-term use of the electrode, if you find that the gradient is slightly inaccurate, you can soak the lower end of the electrode in 4% HF (hydrofluoric acid) for 3-5 seconds, wash it with distilled water, and then soak in potassium chloride solution to make it new.",
        "tags": ["aqua", "pH"],
        "pricePerDay": {
            "$numberDouble": "25.0"
        },
        "simulationData": {
            "booleanSimulation": false,
            "simulationRangeMin": {
                "$numberDouble": "4.0"
            },
            "simulationRangeMax": {
                "$numberDouble": "10.0"
            }
        },
        "alertThresholdData": {
            "thresholdMin": {
                "$numberDouble": "6.5"
            },
            "thresholdMax": {
                "$numberDouble": "8.5"
            }
        },
        "visualType": "bullet"
    },
    {
        "title": "Fiction's Grove - PH Sensor Kit (MNG-123C-Blue )",
        "description": "Are you trying to find an easy to use and cost-effect PH sensor/meter? Do you want to use a PH sensor/meter with Arduino or Raspberry Pi? Well, this new Grove - PH Sensor will meet all your needs. The PH sensor measures the hydrogen-ion activity in water-based solutions, we usually use it to measure the PH of a liquid. It is widely used in the chemical industry, the pharmaceutical industry, the dye industry, and scientific research where acidity and alkalinity testing is required. The drive board in this kit support both 3.3V and 5V system. And with the stander BNC probe interface and Grove connector, it is very convenient to work with Arduino and Raspberry Pi.\n\nFeatures\nWidely used in chemical industry, pharmaceutical industry, dye industry, and scientific research\nSupport with both Arduino and Rasberry Pi\nCompact size for easy deployment and cost-effective\nResolution: at most ±0.15PH (STP)\nProbe replaceable\nSpecification\nOperating voltage3.3V/5V\nRange0-14PH\nResolution±0.15PH（STP）\nResponse time＜1min\nProbe InterfaceBNC\nMeasure temperature0-60℃\nInternal resistance≤250MΩ（25℃）\nAlkali error\n0.2PH（1mol/L）Na+，PH14)（25℃）\nCautions\nBefore being measured, the electrode must be calibrated with a standard buffer solution of known PH value. In order to obtain more accurate results, the known PH value should be reliable, and closer to the measured one.\n\nWhen the measurement is completed, the electrode protective sleeve should be put on. A small amount of 3.3mol / L potassium chloride solution should be placed in the protective sleeve to keep the electrode bulb wet.\n\nThe leading end of the electrode must be kept clean and dry to absolutely prevent short circuits at both ends of the output, otherwise it will lead to inaccurate or invalid measurement results.\n\nAfter long-term use of the electrode, if you find that the gradient is slightly inaccurate, you can soak the lower end of the electrode in 4% HF (hydrofluoric acid) for 3-5 seconds, wash it with distilled water, and then soak in potassium chloride solution to make it new.",
        "tags": ["aqua", "pH"],
        "pricePerDay": {
            "$numberDouble": "25.0"
        },
        "simulationData": {
            "booleanSimulation": false,
            "simulationRangeMin": {
                "$numberDouble": "4.0"
            },
            "simulationRangeMax": {
                "$numberDouble": "10.0"
            }
        },
        "alertThresholdData": {
            "thresholdMin": {
                "$numberDouble": "6.5"
            },
            "thresholdMax": {
                "$numberDouble": "8.5"
            }
        },
        "visualType": "bullet"
    }
];
  const result = await devices.insertMany(deviceRecords);
  return JSON.stringify(result);
};
