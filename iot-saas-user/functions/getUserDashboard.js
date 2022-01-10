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
      '$group': {
        '_id': '$deviceId', 
        'data': {
          '$push': {
            'timestamp': '$timestamp', 
            'value': '$value'
          }
        }
      }
    }
  ];
  
  const sensors = context.services.get("mongodb-atlas").db("iot-saas").collection("sensor_data");
  var result = await sensors.aggregate(pipeline).toArray();
  return JSON.stringify(result);
};
