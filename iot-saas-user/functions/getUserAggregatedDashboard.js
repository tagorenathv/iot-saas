exports = async function(arg){
  var userId = context.user.id.toString();

  var pipeline = [
    {
      '$match': {
        'userId': userId, 
        'timestamp': {
          '$gte':  new Date(Date.now() - 1000 * 60 * Number(arg))
        }
      }
    },
    {
      '$sort': {
        'timestamp': -1
      }
    },
    {
      '$group': {
        '_id': '$deviceId', 
        'data': {
          '$push': {
            'value': '$avg'
          }
        }
      }
    }
  ];
  
  const aggregatedSensorData = context.services.get("mongodb-atlas").db("iot-saas").collection("aggregated_sensor_data");
  var result = await aggregatedSensorData.aggregate(pipeline).toArray();
  return JSON.stringify(result);
};
