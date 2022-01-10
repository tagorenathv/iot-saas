exports = async function(arg){
  var userId = context.user.id.toString();
  const userDeviceUsage = context.services.get("mongodb-atlas").db("iot-saas").collection("user_device_usage");
  var result = await userDeviceUsage.find({"userId": userId}).toArray();
  return JSON.stringify(result);
};
