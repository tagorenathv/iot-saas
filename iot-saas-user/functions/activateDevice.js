exports = async function(arg){
  var userId = context.user.id.toString();
  const userDeviceSubscription = context.services.get("mongodb-atlas").db("iot-saas").collection("user_device_subscriptions");
  await userDeviceSubscription.updateOne({'userId': userId, 'deviceId': arg}, {'$set': {'suspended': false}});
  return {"message": "activated device"};
};
