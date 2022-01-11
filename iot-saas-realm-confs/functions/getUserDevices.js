exports = async function(arg){
  var userId = context.user.id.toString();
  const deviceSubscriptions = context.services.get("mongodb-atlas").db("iot-saas").collection("user_device_subscriptions");

  var result = await deviceSubscriptions.find({"userId": userId},{"simulationData": 0}).toArray();
   
  return JSON.stringify(result);
};
