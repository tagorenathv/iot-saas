exports = async function aggregatedSensorData() {

    const database = context.services.get("mongodb-atlas").db("iot-saas");
    const sensorData = database.collection("sensor_data");
    const aggSensorData = database.collection("aggregated_sensor_data");
    var pipeline = [{
        $project: {
            timestamp: 1,
            userId: 1,
            deviceId: 1,
            value: 1
        }
    }, {
        $match: {
            "timestamp": {
                "$gte": new Date(Date.now() - 1000 * 60 * 10)
            }
        }
    }, {
        $sort: {
            "userId": 1,
            "deviceId": 1,
            "timestamp": 1
        }
    }, {
        $group: {
            _id: {
                "userId": "$userId",
                "deviceId": "$deviceId"
            },
            "avg": {
                "$avg": "$value"
            },
            userId: {
                $first: '$userId'
            },
            deviceId: {
                $first: '$deviceId'
            },
            timestamp: {
                $first: new Date()
            }
        }
    }, {
        $unset: ["_id"]
    }];

    var result = await sensorData.aggregate(pipeline).toArray();
    if(result.length > 0)
      aggSensorData.insertMany(result);
    else
      console.log("Empty aggregated results.");
      
    return true;
}