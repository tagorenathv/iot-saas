exports = async function(arg) {
  const devices = context.services.get("mongodb-atlas").db("iot-saas").collection("devices");
  var result = await devices.find({},{"simulationData": 0}).toArray();
  return JSON.stringify(result);
};
