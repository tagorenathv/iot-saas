exports = async function() {
  const database = context.services.get("mongodb-atlas").db("iot-saas");
  const devices = database.collection("devices");
  const userDeviceSubscriptions = database.collection("user_device_subscriptions");
  const sensorData = database.collection("sensor_data");
  
  var deviceData = await devices.find({}).toArray();
  var deviceSimulationMap = new Map();
  for(const device of deviceData) {
    deviceSimulationMap.set(device['_id'].toString(), device['simulationData']);
  }
  
  var userDeviceSubscriptionData = await userDeviceSubscriptions.find({"suspended": false},{'deviceId':1, 'userId': 1}).toArray();
  var simulatedRecords = [];
  for(const subscriptionRecord of userDeviceSubscriptionData) {
    try {
      var tempValue;
    if(deviceSimulationMap.get(subscriptionRecord['deviceId'])['booleanSimulation'] === true) {
      tempValue = Math.floor(Math.random() * 2)
    } else {
      var arbitaryValue = getRandomArbitrary(deviceSimulationMap.get(subscriptionRecord['deviceId'])['simulationRangeMin'],deviceSimulationMap.get(subscriptionRecord['deviceId'])['simulationRangeMax']);
      tempValue = Math.round(arbitaryValue * 100 + Number.EPSILON)/100;
    }
    simulatedRecords.push({"userId": subscriptionRecord['userId'], 'deviceId': subscriptionRecord['deviceId'], 'value': tempValue, 'timestamp': new Date()});
    }catch(e){
      console.log(e);
    }
  }
  sensorData.insertMany(simulatedRecords);
  console.log(simulatedRecords.length);
  return true;
};

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}